import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });

export const validation = (schema: any) => {
  const validate = ajv.compile(schema);
  return validate;
};
