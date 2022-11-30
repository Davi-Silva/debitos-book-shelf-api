import { writeFile, readFile } from 'fs/promises';
import { resolve } from 'path';
import { FileContentType, ReadFromFileReturn } from './type';

const pathname = resolve(__dirname, '..', '..', 'db', 'index.json');

export const saveToFile = async (data: FileContentType) => {
  const stringData = JSON.stringify(data);

  const written = await writeFile(pathname, stringData);
  return written;
};

export const readFromFile = async (): Promise<ReadFromFileReturn> => {
  const read = await readFile(pathname);
  const sData = read.toString();
  const data = JSON.parse(sData);

  return { books: data.books, authors: data.authors };
};
