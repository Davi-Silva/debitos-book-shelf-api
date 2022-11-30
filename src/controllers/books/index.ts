import { Request, Response } from 'express';

import { readFromFile, saveToFile, getRandomNumber } from '../../utils';

import { Book } from '../../utils/fs/type';

export const createBook = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { author, name } = body;

    const { authors, books } = await readFromFile();

    const lastBook = books[books.length - 1];
    const localBooks = books;

    const createObj: Book = {
      id: lastBook.id + 1,
      author_id: author.id,
      name,
      isbn_no: getRandomNumber(100000, 999999).toString(),
    };

    localBooks.push(createObj);

    const written = await saveToFile({
      books: localBooks,
      authors: authors,
    });

    return res.status(200).send({
      status_code: 200,
      results: written,
      errors: [],
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const { id } = params;
    const { authors, books } = await readFromFile();

    const newId = parseInt(id);

    const book = books.filter((book) => book.id === newId)[0] ?? {};

    if (Object.entries(book).length === 0) {
      return res.status(200).send({
        statusCode: 200,
        results: book,
        errors: [],
      });
    }

    const author =
      authors.filter((author) => author.id === book.author_id)[0] ?? {};

    const response = {
      id: book.id,
      author: author,
      name: book.name,
      isbn_no: book.isbn_no,
    };

    return res.status(200).send({
      statusCode: 200,
      results: response,
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

export const getBooks = async (req: Request, res: Response) => {
  try {
    const { authors, books } = await readFromFile();

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

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const { author, name, isbn_no } = body;

    const { authors, books } = await readFromFile();

    const bookId = parseInt(id);

    const filteredBooks = books.filter((book) => book.id === bookId);

    if (filteredBooks.length === 0) {
      return res.status(200).send({
        statusCode: 200,
        results: {},
        errors: ['Book not found'],
      });
    }

    const updatedObj = {
      id: filteredBooks[0].id,
      author_id: author.id,
      name,
      isbn_no,
    };

    const bookRemoved = books.filter((book) => book.id !== bookId);

    bookRemoved.push(updatedObj);

    const sorted = bookRemoved.sort((a, b) => {
      return a.id - b.id;
    });

    const written = await saveToFile({
      books: sorted,
      authors: authors,
    });

    return res.status(200).send({
      statusCode: 200,
      results: written,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err],
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const { id } = params;
    const { authors, books } = await readFromFile();

    const bookId = parseInt(id);

    const foundBook = books.filter((book) => book.id === bookId);

    if (foundBook.length === 0) {
      return res.status(400).send({
        statusCode: 400,
        results: {},
        errors: ['Book not found'],
      });
    }

    const filteredBooks = books.filter((book) => book.id !== bookId);

    const sorted = filteredBooks.sort((a, b) => {
      return a.id - b.id;
    });

    const written = await saveToFile({
      books: sorted,
      authors: authors,
    });

    return res.status(200).send({
      statusCode: 200,
      results: written,
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
