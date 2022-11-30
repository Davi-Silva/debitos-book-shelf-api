import { Request, Response, NextFunction } from 'express';

import { validation } from '../../utils';

import {
  createBookBody,
  updateBookParam,
  updateBookBody,
  deleteBookParam,
  getBookParam,
} from '../../constants/validators/books';

export const validateCreateBook = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;

  const validate = validation(createBookBody);

  if (!validate(body)) {
    return res.status(400).json({ statusCode: 400, error: validate.errors });
  }

  next();
};

export const validateUpdateBook = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params, body } = req;

  const validateParams = validation(updateBookParam);

  if (!validateParams(params)) {
    return res
      .status(400)
      .json({ statusCode: 400, error: validateParams.errors });
  }

  const validateBody = validation(updateBookBody);

  if (!validateBody(body)) {
    return res
      .status(400)
      .json({ statusCode: 400, error: validateBody.errors });
  }

  next();
};

export const validateDeleteBook = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params } = req;

  const validate = validation(deleteBookParam);

  if (!validate(params)) {
    return res.status(400).json({ statusCode: 400, error: validate.errors });
  }

  next();
};

export const validateGetBook = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { params } = req;

  const validate = validation(getBookParam);

  if (!validate(params)) {
    return res.status(400).json({ statusCode: 400, error: validate.errors });
  }

  next();
};
