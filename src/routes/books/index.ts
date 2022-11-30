import { Router } from 'express';

// import { authenticateUser } from '@middlewares/Bookization';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from '../../controllers';

const router = Router();

router.post('', createBook);

router.get('', getBooks);

router.get('/:id', getBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

export default router;
