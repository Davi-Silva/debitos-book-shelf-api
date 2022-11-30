import { Request, Response } from 'express';

import { readFromFile, saveToFile, getRandomNumber } from '../../utils';

import { Author } from '../../utils/fs/type';

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { country, name } = body;

    const { authors, books } = await readFromFile();

    const lastAuthor = authors[authors.length - 1];
    const localAuthors = authors;
    const localBooks = books;

    const createObj: Author = {
      id: lastAuthor.id + 1,
      name,
      country,
    };

    localAuthors.push(createObj);

    const written = await saveToFile({
      books: localBooks,
      authors: localAuthors,
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

export const getAuthor = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const { id } = params;
    const { authors, books } = await readFromFile();

    const newId = parseInt(id);

    const filteredAuthor =
      authors.filter((author) => author.id === newId)[0] ?? {};

    if (Object.entries(filteredAuthor).length === 0) {
      return res.status(200).send({
        statusCode: 200,
        results: filteredAuthor,
        errors: [],
      });
    }

    const author =
      authors.filter((author) => author.id === filteredAuthor.id)[0] ?? {};

    const response = {
      id: author.id,
      name: author.name,
      country: author.country,
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

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const { authors } = await readFromFile();

    const mapped = authors.map((author) => {
      return {
        id: author.id,
        name: author.name,
        country: author.country,
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

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const { name, country } = body;

    const { authors, books } = await readFromFile();

    const authorId = parseInt(id);

    const filteredAuthors = authors.filter((author) => author.id === authorId);

    if (filteredAuthors.length === 0) {
      return res.status(200).send({
        statusCode: 200,
        results: {},
        errors: ['Author not found'],
      });
    }

    const updatedObj = {
      id: filteredAuthors[0].id,
      name,
      country,
    };

    const authorRemoved = authors.filter((author) => author.id !== authorId);

    authorRemoved.push(updatedObj);

    const sorted = authorRemoved.sort((a, b) => {
      return a.id - b.id;
    });

    console.log(sorted);

    const written = await saveToFile({
      books,
      authors: sorted,
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

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    const { id } = params;
    const { authors, books } = await readFromFile();

    const authorId = parseInt(id);

    const foundAuthor = authors.filter((author) => author.id === authorId);

    if (foundAuthor.length === 0) {
      return res.status(400).send({
        statusCode: 400,
        results: {},
        errors: ['Author not found'],
      });
    }

    const filteredAuthors = authors.filter((author) => author.id !== authorId);

    const filteredBooks = books.filter((book) => book.author_id !== authorId);

    const written = await saveToFile({
      books: filteredBooks,
      authors: filteredAuthors,
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
