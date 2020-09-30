import { ValidationError } from 'yup';

interface ErrosFormat {
  [key: string]: string;
}

function formatErrorValidate(errors: ValidationError): ErrosFormat {
  const errorFormat: ErrosFormat = {};

  errors.inner.forEach(error => {
    errorFormat[error.path] = error.message;
  });

  return errorFormat;
}

export default formatErrorValidate;
