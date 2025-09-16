import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { CreateUserUseCase } from "../application/usecases/create-user.usecase";
import { LoginUserUseCase } from "../application/usecases/login-user.usecase";
import { UpdateUserNameUseCase } from "../application/usecases/update-user-name.usecase";
import { UserLoginResponseDTO } from "./user.dto";

@Resolver()
export class UserResolver {

    constructor(
        private readonly createUser: CreateUserUseCase,
        private readonly loginUser: LoginUserUseCase,
        private readonly updateUserName: UpdateUserNameUseCase,
    ) {}

    @Query(() => String)
    user(): string{
        return "User";
    }

    @Mutation(() => String)
    async register(
        @Args('name') name: string,
        @Args('email') email: string,
        @Args('password') password: string,
    ) {
        const user = await this.createUser.execute(name, email, password);
        return `User ${user.email} created successfully`;
    }

    @Mutation(() => UserLoginResponseDTO)
    async login(
        @Args('email') email: string,
        @Args('password') password: string
    ): Promise<UserLoginResponseDTO> {
        const result = await this.loginUser.execute(email, password);
        if (!result) throw new Error("Invalid credentials");
        
        return {
            token: result.token,
            id: result.user.id,
            name: result.user.name,
            email: result.user.email
        };
    }

    @Mutation(() => String)
    async updateName(
        @Args('userId') userId: string, 
        @Args('name') name: string
    ) {
        const updated = await this.updateUserName.execute(userId, name);
        if(!updated) throw new Error("Error on updating user name");
        
        return updated.name;
    }

}
