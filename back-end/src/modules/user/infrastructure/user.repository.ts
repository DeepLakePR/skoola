import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel } from "./user.model";
import { User } from "../domain/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {

    constructor(
        @InjectModel(UserModel.name)
        private userModel: Model<UserModel>
    ){}

    async create(user: User): Promise<User>{
        const created = new this.userModel(user);
        const saved = await created.save();

        return new User(saved.id, saved.name, saved.email, saved.password, saved.course);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.userModel.findOne({ email }).exec();

        if (!user) return null;

        return new User(user.id, user.name, user.email, user.password);
    }

    async updateName(userId: string, name: string): Promise<User | null> {
        const updated = await this.userModel.findByIdAndUpdate(userId, { name }, { new: true }).exec();
        
        if(!updated) return null;

        return new User(updated.id, updated.name, updated.email, updated.password);
    }

}
