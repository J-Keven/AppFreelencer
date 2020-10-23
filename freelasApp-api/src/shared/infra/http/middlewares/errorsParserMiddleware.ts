import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

export default (
  error: Error | AppError,
  request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  console.log(error.message);
  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: 'Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
};

// errorsParserMiddleware;
