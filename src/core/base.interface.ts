
import { Expose } from "class-transformer";

export class IBase {

  @Expose()
  id: string;

  @Expose()
  version: number;

  @Expose()
  updateDate: Date;

  @Expose()
  creationDate: Date;
}

export default IBase;
