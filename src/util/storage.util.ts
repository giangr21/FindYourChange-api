import { v4 as uuidv4 } from 'uuid';
import AppError from '@shared/errors/AppError';
import fs from 'fs';
import pathFinder from 'path';
import Jimp from 'jimp';

export default class StorageUtil {
    public async saveFile(file: any): Promise<string> {
        if (!file.image.mimetype) {
            throw new Error('Arquivo não encontrado!');
        }

        if (!file.image.mimetype.includes('image')) {
            throw new Error('Somente permitido imagens!');
        }

        const filename = file.image.name.split('.');
        const nome = `${uuidv4()}.${filename[filename.length - 1]}`;

        const salvandoArquivoLocal = new Promise((resolve, reject): any => {
            file.image.mv(`${process.env.STORAGE_PATH}/${nome}`, (err: any): any => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });

        const arquivoSalvo: any = await salvandoArquivoLocal;

        if (arquivoSalvo !== true) {
            throw new AppError(`Falha ao salvar o arquivo ${nome}.`);
        } else {
            const image = await Jimp.read(`${process.env.STORAGE_PATH}/${nome}`);
            await image.resize(120, Jimp.AUTO);
            await image.quality(100);
            await image.writeAsync(`${process.env.STORAGE_PATH}/min/${nome}`);
        }

        return nome;
    }

    public deleteFile(nome: string): void {
        const path = `${process.env.STORAGE_PATH}/${nome}`;
        const pathMin = `${process.env.STORAGE_PATH}/min/${nome}`;
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        if (fs.existsSync(pathMin)) {
            fs.unlinkSync(pathMin);
        }
    }

    public getFile(nome: string): string {
        const path = `${process.env.STORAGE_PATH}/${nome}`;
        if (fs.existsSync(path)) {
            return path;
        }
        if (fs.existsSync(`src/assets/defaultImgs/${nome}`)) {
            return `src/assets/defaultImgs/${nome}`;
        }
        return pathFinder.resolve(__dirname, '..', 'assets', 'no-image.png');
    }

    public getFileMin(nome: string): string {
        const path = `${process.env.STORAGE_PATH}/min/${nome}`;
        if (fs.existsSync(path)) {
            return path;
        }
        if (fs.existsSync(`src/assets/defaultImgs/min/${nome}`)) {
            return `src/assets/defaultImgs/min/${nome}`;
        }

        return pathFinder.resolve(__dirname, '..', 'assets', 'no-image.png');
    }
}
