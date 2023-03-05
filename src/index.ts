import express, { Request, Response } from 'express';

class App {
  public app = express();
  public port = process.env.PORT || 9000;

  constructor() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });

    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

export default new App().app;
