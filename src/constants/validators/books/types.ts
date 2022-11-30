export type CreateBookSchema = {
  name: string;
  author: {
    id: number;
  };
};

export type UpdateBookBodySchema = {
  name: string;
  author: {
    id: number;
  };
  isbn_no: string;
};

export type UpdateBookParamSchema = {
  id: string;
};
