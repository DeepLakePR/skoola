import { UserRepository } from "../../infrastructure/user.repository";
import { User } from "../../domain/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateUserNameUseCase { 

    constructor(private repo: UserRepository) {}

    async execute(userId: string, name: string): Promise<User | null> {
        return this.repo.updateName(userId, name);
    }

}
