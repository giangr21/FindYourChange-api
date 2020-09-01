import { logger } from '@util/log.util';

class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;

        logger.error(message);
    }
}

export default AppError;
