import { HttpModule, Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  // noinspection TypeScriptValidateTypes
  return TypeOrmModule.forRoot({ ...ormconfig, autoLoadEntities: true });
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseOrmModule(),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    HttpModule,
  ],
  providers: [AppService],
})
export class AppModule {}
