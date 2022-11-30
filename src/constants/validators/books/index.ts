import { JSONSchemaType } from 'ajv';

import {
  CreateBookSchema,
  UpdateBookBodySchema,
  UpdateBookParamSchema,
} from './types';

export const createBookBody: JSONSchemaType<CreateBookSchema> = {
  type: 'object',
  properties: {
    name: { type: 'string', maxLength: 255 },
    author: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
      },
      required: ['id'],
    },
  },
  additionalProperties: false,
  required: ['name', 'author'],
};

export const updateBookParam: JSONSchemaType<UpdateBookParamSchema> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
  required: ['id'],
};

export const updateBookBody: JSONSchemaType<UpdateBookBodySchema> = {
  type: 'object',
  properties: {
    name: { type: 'string', maxLength: 255 },
    isbn_no: { type: 'string', maxLength: 6, minLength: 6 },
    author: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
      },
      required: ['id'],
    },
  },
  additionalProperties: false,
  required: ['name', 'author', 'isbn_no'],
};

export const deleteBookParam: JSONSchemaType<UpdateBookParamSchema> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
  required: ['id'],
};

export const getBookParam: JSONSchemaType<UpdateBookParamSchema> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
  required: ['id'],
};
