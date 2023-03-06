import { ErrorRequestHandler } from 'express';
import CustomError from './CustomError ';

const errorHandler:ErrorRequestHandler = (err, req, res, next) => {
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
