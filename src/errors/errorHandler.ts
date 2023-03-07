import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http-exception.error';

export class ErrorHandler {
  public static handle(
    err: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ message });
  }
}
