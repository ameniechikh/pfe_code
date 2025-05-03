import { Field, ID, ObjectType } from "type-graphql";
import { UserRoleEnum } from "../../../models/users/user-role.enum";
import { UserStatusEnum } from "../../../models/users/user-status.enum";

@ObjectType()
export class User {
    @Field(type => ID)
    id!: string;
    
    @Field(type => String)
    name!: string;

    @Field(type => String)
    email!: string;

    @Field()
    role!: string;

    @Field()
    status!: string;
}