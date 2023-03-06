
import express, { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

class App {
  public app = express();
  public port = process.env.API_PORT || 3000 ;

  constructor() {
    this.app.get('/', (req: Request, res: Response) => {
      res.sendStatus(StatusCodes.OK);
    });

    this.app.listen(this.port, () => {
      console.clear()
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

export default new App().app;
