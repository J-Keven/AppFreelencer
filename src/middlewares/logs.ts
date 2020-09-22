import { Response, Request, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
  console.time();
  console.log(`[METHOD]: ${req.method} [URL]: ${req.url}`);

  next();

  console.timeEnd();
};
