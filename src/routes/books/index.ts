import { Router } from 'express';

import {
  validateCreateBook,
  validateUpdateBook,
  validateDeleteBook,
  validateGetBook,
} from '../../middlewares/validators/books';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from '../../controllers';

const router = Router();

router.post('', validateCreateBook, createBook);

router.get('', getBooks);

router.get('/:id', validateGetBook, getBook);

router.put('/:id', validateUpdateBook, updateBook);

router.delete('/:id', validateDeleteBook, deleteBook);

export default router;
