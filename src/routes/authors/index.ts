import { Router } from 'express';

// import { authenticateUser } from '@middlewares/authorization';

import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from '../../controllers';

const router = Router();

router.post('', createAuthor);

router.get('', getAuthors);

router.get('/:id', getAuthor);

router.put('/:id', updateAuthor);

router.delete('/:id', deleteAuthor);

export default router;
