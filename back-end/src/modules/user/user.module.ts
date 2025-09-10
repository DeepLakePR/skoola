import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserModel, UserSchema } from "./infrastructure/user.model";

import { CreateUserUseCase } from "./application/usecases/create-user.usecase";
import { LoginUserUseCase } from "./application/usecases/login-user.usecase";
import { UpdateUserNameUseCase } from "./application/usecases/update-user-name.usecase";
import { UserRepository } from "./infrastructure/user.repository";

import { UserResolver } from "./interface/user.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }])
    ],
    providers: [
        UserRepository,

        CreateUserUseCase,
        LoginUserUseCase,
        UpdateUserNameUseCase,

        UserResolver
    ],
    exports: [
        UserRepository
    ]
})

export class UserModule {}
