import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpException } from './errors/http-exception.error';

class App {
  public app = express();
  public port = process.env.API_PORT || 3000;

  constructor(customError: any) {
    // Adicionar os middlewares de body-parser e cors
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.get('/', (req: Request, res: Response) => {
      res.status(StatusCodes.OK).json({ message: 'Hello World!' });
    });

    this.app.get('/users/:id', (req: Request, res: Response, next: NextFunction) => {
      const userId = req.params.id;

      if (userId !== '123') {
        throw new HttpException(StatusCodes.NOT_FOUND, 'User not found');
      }

      res.json({ id: userId, name: 'John Doe' });
    });

    // middleware errorHandler para lidar com erros personalizados
    this.app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
      const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
      const message = err.message || 'Internal Server Error';

      res.status(status).json({ message });
    });

    this.app.listen(this.port, () => {
      console.clear();
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

export default App;
