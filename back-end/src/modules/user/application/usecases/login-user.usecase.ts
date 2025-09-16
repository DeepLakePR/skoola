import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { UserRepository } from "../../infrastructure/user.repository";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

interface LoginResponse{
    token: string,
    user: {
        id: string,
        name: string,
        email: string,
    }
}

@Injectable()
export class LoginUserUseCase {

    private readonly jwtSecret: string;

    constructor(private readonly repo: UserRepository, private readonly configService: ConfigService) {

        this.jwtSecret = this.configService.get<string>("JWT_SECRET_KEY") as string;

        if(!this.jwtSecret){
            throw new Error("JWT_SECRET_KEY .env not defined.");
        }

    }

    async execute(email: string, password): Promise<LoginResponse | null> {
        const user = await this.repo.findByEmail(email);
        if(!user) throw new UnauthorizedException("Fail on authenticate user. Email not found.");

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new UnauthorizedException("Fail on authenticate user. Invalid password.");

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
        const token: string = jwt.sign({ userId: user.id }, this.configService.get<string>("JWT_SECRET_KEY"), { expiresIn: '1h' });

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }

}
