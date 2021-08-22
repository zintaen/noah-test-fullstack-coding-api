
import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseAuthStrategy } from './strategies/firebase-auth.strategy';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthRepository } from "./auth.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthRepository]),
    PassportModule,
    HttpModule,
  ],
  providers: [
    FirebaseAuthStrategy,
  ],
})
export class AuthModule {}
