import { Request, Response } from 'express';

export const createBook = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const getBook = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const getBooks = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const updateBook = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const deleteBook = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};
