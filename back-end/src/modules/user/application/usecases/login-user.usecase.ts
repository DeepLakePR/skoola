import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { UserRepository } from "../../infrastructure/user.repository";

export class LoginUserUseCase {

    constructor(private repo: UserRepository) {}

    async execute(email: string, password): Promise<string | null> {
        const user = await this.repo.findByEmail(email);
        if(!user) return null;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return null;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
        return jwt.sign({ userId: user.id }, "SECRET_KEY", { expiresIn: '1h' });
    }

}
