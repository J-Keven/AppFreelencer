import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

class UserController {
  public async create(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const { email, firstName, lastName, password } = resquest.body;
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      email,
      firstName,
      lastName,
      password,
    });
    return response.status(201).json(user);
  }
}

export default UserController;
