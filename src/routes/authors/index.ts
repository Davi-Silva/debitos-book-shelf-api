import { Router } from 'express';

import {
  validateCreateAuthor,
  validateDeleteAuthor,
  validateGetAuthor,
  validateUpdateAuthor,
} from '../../middlewares/validators/authors';

import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from '../../controllers';

const router = Router();

router.post('', validateCreateAuthor, createAuthor);

router.get('', getAuthors);

router.get('/:id', validateGetAuthor, getAuthor);

router.put('/:id', validateUpdateAuthor, updateAuthor);

router.delete('/:id', validateDeleteAuthor, deleteAuthor);

export default router;
