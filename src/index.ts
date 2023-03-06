import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CustomError from './helpers/CustomError ';
import errorHandler from './helpers/errorHandler';


class App {
  public app = express();
  public port = process.env.API_PORT || 3000;

  constructor() {
    this.app.get('/', (req: Request, res: Response) => {
      res.sendStatus(StatusCodes.OK);
    });

    this.app.get('/users/:id', (req: Request, res: Response, next: any) => {
      const userId = req.params.id;

      if (userId !== '123') {
        const err = new CustomError('User not found', StatusCodes.NOT_FOUND);
        return next(err);
      }

      res.json({ id: userId, name: 'John Doe' });
    });

    // middleware errorHandler para lidar com erros personalizados
    this.app.use(errorHandler);

    this.app.listen(this.port, () => {
      console.clear();
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

export default new App().app;
