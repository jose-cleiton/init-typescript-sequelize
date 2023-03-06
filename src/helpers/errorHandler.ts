import { Request, Response, NextFunction } from 'express';
import CustomError from './CustomError ';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    const { message, statusCode, details } = err;
    console.log(`Error: ${message} - ${statusCode} - ${details}`);
    res.status(statusCode).json({ message, details });
  } else {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default errorHandler;
