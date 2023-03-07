import { HttpException } from '../errors/http-exception.error';
import { Request, Response, NextFunction } from 'express';

class ExpressAsyncErrorMiddleware {
  /**
   *
   * @param {Error} error
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  static handle(error: Error, _req: Request, res: Response, next: NextFunction) {
    if (error instanceof HttpException) {
      res.status(error.status).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: error.message || 'Internal server error' });
    }

    return next();
  }
}

export { ExpressAsyncErrorMiddleware };
