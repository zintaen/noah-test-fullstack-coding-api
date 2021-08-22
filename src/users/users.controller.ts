
import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/guards/firebase-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesAllowed } from 'src/auth/decorators/roles.decorator';
import { Roles } from 'src/constants/Roles';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from "./decorators/get-user.decorator";
import { UsersService } from "./users.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import IUser from "./interfaces/user.interface";
import { Public } from "../auth/decorators/public.decorator";

@ApiTags("Users")
@Controller('/users')
@UseGuards(FirebaseAuthGuard, RolesGuard)
@RolesAllowed(Roles.ADMIN)
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post("/register")
    @Public()
    registerUser(@Body() registerUserDto: RegisterUserDto) {
        return this.usersService.registerUser(registerUserDto);
    }

    @Get('/me')
    @RolesAllowed(Roles.USER)
    getMe(@GetUser() userDto: IUser) {
        return userDto;
    }
}
