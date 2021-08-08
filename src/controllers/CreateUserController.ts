import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, admin } = request.body;

    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.execute({
        email,
        name,
        admin,
      });

      return response.json(user);
    } catch (err) {
      return response.json({
        error: err.message,
      });
    }
  }
}

export { CreateUserController };
