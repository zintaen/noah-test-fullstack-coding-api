import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import IUser from './interfaces/user.interface';
import { MapData } from '../core/decorators/map-data.decorator';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  private logger = new Logger(UserRepository.name);

  @MapData(IUser)
  async registerUser(registerUserDto: RegisterUserDto): Promise<IUser> {
    try {
      const userEntity = new UserEntity();
      userEntity.username = registerUserDto.username;
      userEntity.email = registerUserDto.email;
      userEntity.firebaseUid = registerUserDto.firebaseUid;
      userEntity.firstName = registerUserDto.firstName;
      userEntity.lastName = registerUserDto.lastName;

      return this.save(userEntity);
    } catch (error) {
      this.logger.error(error.message, error.stack);
      if (error.code === '23505') {
        throw new ConflictException('Username or user already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  @MapData(IUser)
  async findUserById(id: string): Promise<IUser> {
    return this.findOneOrFail(id);
  }
}
