import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { RegisterUserDto } from './dto/register-user.dto';
import IUser from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly usersRepository: UserRepository,
  ) {}

  async getUserById(id: string): Promise<IUser> {
    return this.usersRepository.findUserById(id);
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<IUser> {
    return this.usersRepository.registerUser(registerUserDto);
  }
}
