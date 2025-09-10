import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";

import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),

    MongooseModule.forRoot("mongodb+srv://guilhermeadmin:hpiYvP1LcLcrQ03x@cluster0.oagwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      graphiql: true
    }),

    UserModule
  ],
  controllers: [],
  providers: []
})

export class AppModule {

}
