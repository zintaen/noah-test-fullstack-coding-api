import { Expose } from 'class-transformer';
import IBase from '../../core/base.interface';
import { BlogEntity } from '../blog.entity';

export class IBlog extends IBase implements BlogEntity {
  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  thumbnail: string;
}

export default IBlog;
