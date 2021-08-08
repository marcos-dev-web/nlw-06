import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ email, name, admin }: IUserRequest) {
    // instance of a new UsersRepositories
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error('Email incorrect');
    }

    // verify if user already exists
    const userAlreadyExist = await usersRepositories.findOne({
      email,
    });

    if (userAlreadyExist) {
      throw new Error('User already exists');
    }

    // create instance of usersRepositories
    const user = usersRepositories.create({
      email,
      name,
      admin,
    });

    // save this instance
    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
