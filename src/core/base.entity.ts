
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export class BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @VersionColumn()
  version: number;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
