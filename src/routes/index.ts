import { Application } from 'express';

import books from './books';
import authors from './authors';

export default (app: Application): void => {
  app.use('/books', books);
  app.use('/user/auth', authors);
};
