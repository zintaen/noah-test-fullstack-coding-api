
import {
    Column,
    Entity,
} from 'typeorm';
import { Roles } from 'src/constants/Roles';
import { BaseEntity } from "../core/base.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

    @Column({ unique: true, nullable: true })
    firebaseUid: string;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string;

    @Column({ default: Roles.USER })
    roles: number;
}
