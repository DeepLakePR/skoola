import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/skoola_db"),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      playground: true
    }),

    UserModule
  ],
  controllers: [],
  providers: []
})

export class AppModule {}
