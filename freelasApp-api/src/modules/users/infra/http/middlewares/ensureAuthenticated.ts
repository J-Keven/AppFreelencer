import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import tokenConfig from '@configs/token';

interface PayloadProps {
  exp: number;
  iat: number;
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | void> {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(400).json('Token is requered');
  }
  const [, token] = authorization.split(' ');

  try {
    const { secretKey } = tokenConfig;

    const decoded = jwt.verify(token, secretKey);
    const { sub } = decoded as PayloadProps;

    request.user = {
      id: sub,
    };
  } catch (error) {
    return response.status(401).json('Invalid token');
  }

  return next();
}

export default ensureAuthenticated;
