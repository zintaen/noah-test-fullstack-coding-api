
import { plainToClass } from "class-transformer";
import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../users/user.entity";
import IUser from "../users/interfaces/user.interface";

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity> {

  async findUserByFirebaseUid(firebaseUid: string): Promise<IUser> {
    return plainToClass(IUser, await this.findOneOrFail({ where: { firebaseUid } }));
  }
}
