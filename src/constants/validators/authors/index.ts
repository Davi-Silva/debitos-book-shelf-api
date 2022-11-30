import { JSONSchemaType } from 'ajv';

import {
  CreateAuthorSchema,
  UpdateAuthorBodySchema,
  UpdateAuthorParamSchema,
} from './types';

export const createAuthorBody: JSONSchemaType<CreateAuthorSchema> = {
  type: 'object',
  properties: {
    name: { type: 'string', maxLength: 255 },
    country: { type: 'string' },
  },
  required: ['country', 'name'],
};

export const updateAuthorParam: JSONSchemaType<UpdateAuthorParamSchema> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
  required: ['id'],
};

export const updateAuthorBody: JSONSchemaType<UpdateAuthorBodySchema> = {
  type: 'object',
  properties: {
    name: { type: 'string', maxLength: 255 },
    country: { type: 'string' },
  },
  additionalProperties: false,
  required: ['name', 'country'],
};

export const deleteAuthorParam: JSONSchemaType<UpdateAuthorParamSchema> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
  required: ['id'],
};

export const getAuthorParam: JSONSchemaType<UpdateAuthorParamSchema> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
  required: ['id'],
};
