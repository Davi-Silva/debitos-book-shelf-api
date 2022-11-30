import { Application, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import corsOptions from '../config/middlewares/cors';

export default (app: Application): void => {
  app.use(cors(corsOptions));

  app.use(
    urlencoded({
      extended: false,
    }),
  );

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
};
