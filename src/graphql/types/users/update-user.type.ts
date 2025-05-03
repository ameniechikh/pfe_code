import { InputType, Field } from "type-graphql";
import { CreateUserInput } from "./create-user.type";

@InputType()
export class UpdateUserInput extends CreateUserInput {
  @Field()
  id!: string;
}