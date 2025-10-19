import * as bcrypt from "bcrypt";
import { UserRepository } from "../../infrastructure/user.repository";
import { User } from "../../domain/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateUserUseCase {

    constructor(private repo: UserRepository){}

    async execute(name: string, email: string, password: string, course: string): Promise<User> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const hashed = await bcrypt.hash(password, 10);

        return this.repo.create(new User('', name, email, hashed, course));

    }

}
