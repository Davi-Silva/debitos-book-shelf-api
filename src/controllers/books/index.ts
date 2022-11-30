import { Request, Response } from 'express';

import { database } from '../../db';

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
    const { params } = req;
    const { id } = params;
    const { authors, books } = database;

    const newId = parseInt(id);

    const book = books.filter((book) => book.id === newId)[0] ?? {};

    return res.status(200).send({
      statusCode: 200,
      results: book,
      errors: [],
    });
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
    const { authors, books } = database;

    const mapped = books.map((book) => {
      const author = authors.filter((author) => book.author_id === author.id);

      return {
        id: book.id,
        author: author[0],
        name: book.name,
        isbn_no: book.isbn_no,
      };
    });

    return res.status(200).send({
      statusCode: 200,
      results: mapped,
      errors: [],
    });
  } catch (err: any) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
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
