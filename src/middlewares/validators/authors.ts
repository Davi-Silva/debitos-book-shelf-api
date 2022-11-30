import { Request, Response, NextFunction } from 'express';

import { validation } from '../../utils';

import {
  createAuthorBody,
  updateAuthorParam,
  updateAuthorBody,
  deleteAuthorParam,
  getAuthorParam,
} from '../../constants/validators/authors';

export const validateCreateAuthor = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;

  const validate = validation(createAuthorBody);

  if (!validate(body)) {
    return res.status(400).json({ statusCode: 400, error: validate.errors });
  }

  next();
};

export const validateUpdateAuthor = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params, body } = req;

  const validateParams = validation(updateAuthorParam);

  if (!validateParams(params)) {
    return res
      .status(400)
      .json({ statusCode: 400, error: validateParams.errors });
  }

  const validateBody = validation(updateAuthorBody);

  if (!validateBody(body)) {
    return res
      .status(400)
      .json({ statusCode: 400, error: validateBody.errors });
  }

  next();
};

export const validateDeleteAuthor = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params } = req;

  const validate = validation(deleteAuthorParam);

  if (!validate(params)) {
    return res.status(400).json({ statusCode: 400, error: validate.errors });
  }

  next();
};

export const validateGetAuthor = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params } = req;

  const validate = validation(getAuthorParam);

  if (!validate(params)) {
    return res.status(400).json({ statusCode: 400, error: validate.errors });
  }

  next();
};
