import { Request, Response } from 'express';

export const createAuthor = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const getAuthor = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const getAuthors = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const updateAuthor = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const deleteAuthor = (req: Request, res: Response) => {
  try {
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};
