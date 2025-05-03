import { InputType, Field, Int } from "type-graphql";
import { UserStatusEnum } from "../../../models/users/user-status.enum";
import { UserRoleEnum } from "../../../models/users/user-role.enum";

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => UserRoleEnum)
  role!: UserRoleEnum;

  @Field(() => UserStatusEnum)
  status!: UserStatusEnum;
}