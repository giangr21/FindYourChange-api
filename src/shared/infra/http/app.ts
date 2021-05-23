import AppError from '@shared/errors/AppError';

import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import fileUpload from 'express-fileupload';
import { Server, createServer } from 'http';
import bodyParser from 'body-parser';
import routes from './routes';

class App {
    public app: express.Application;

    public server: Server;

    constructor() {
        this.app = express();

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(fileUpload());

        this.app.use(routes);

        this.app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
            if (err instanceof AppError) {
                return response.status(err.statusCode).json({
                    status: 'error',
                    message: err.message,
                });
            }

            // eslint-disable-next-line no-console
            console.log(err);

            return response.status(500).json({
                status: 'error',
                message: 'Internal server error',
            });
        });

        this.server = createServer(this.app);
    }
}

export default new App();
