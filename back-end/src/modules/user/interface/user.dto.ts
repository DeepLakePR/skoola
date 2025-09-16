import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserLoginResponseDTO{
    
    @Field()
    token!: string;

    @Field()
    id!: string;

    @Field()
    name!: string;

    @Field()
    email!: string;

}
