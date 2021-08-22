
import { Exclude, Expose } from "class-transformer";
import IBase from "../../core/base.interface";
import { UserEntity } from "../user.entity";

export class IUser extends IBase implements UserEntity {

  @Exclude({ toPlainOnly: true })
  firebaseUid: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  roles: number;
}

export default IUser;
