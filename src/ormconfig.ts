
import { ConnectionOptions } from "typeorm";
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { OptimisticLockingSubscriber } from "./utils/OptimisticLockingSubscriber";

const data: any = dotenv.parse(fs.readFileSync(`.env`));

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: data.DB_USER,
  password: data.DB_PASSWORD,
  database: data.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: true,
  logging: false,
  logger: 'file',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  subscribers: [
    OptimisticLockingSubscriber
  ]
};

export = config;
