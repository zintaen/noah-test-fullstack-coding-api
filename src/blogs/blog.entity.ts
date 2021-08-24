import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../core/base.entity';

@Entity({ name: 'blogs' })
export class BlogEntity extends BaseEntity {
  @Column({ unique: true })
  title: string;

  @Column()
  content: string;

  @Column()
  thumbnail: string;
}
