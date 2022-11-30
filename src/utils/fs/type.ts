export type Book = {
  id: number;
  author_id: number;
  name: string;
  isbn_no: string;
};

export type Author = {
  id: number;
  name: string;
  country: string;
};

export type FileContentType = {
  books: Book[];
  authors: Author[];
};

export type ReadFromFileReturn = FileContentType;
