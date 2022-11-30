export type CreateAuthorSchema = {
  name: string;
  country: string;
};

export type UpdateAuthorBodySchema = {
  name: string;
  country: string;
};

export type UpdateAuthorParamSchema = {
  id: string;
};
