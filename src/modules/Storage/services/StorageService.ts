import StorageUtil from '@util/storage.util';

class StorageService {
    public async uploadFile(file: any): Promise<string> {
        const storageUtil = new StorageUtil();
        const fileName = await storageUtil.saveFile(file);
        return fileName;
    }

    public async getFile(file: any): Promise<string> {
        const storageUtil = new StorageUtil();
        const fileName = await storageUtil.getFile(file);
        return fileName;
    }

    public async getMin(file: any): Promise<string> {
        const storageUtil = new StorageUtil();
        const fileName = await storageUtil.getFileMin(file);
        return fileName;
    }
}

export default StorageService;
