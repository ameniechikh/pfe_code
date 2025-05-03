import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { UserService } from "../../services/users/user.service";
import { User } from "../../graphql/types/users/user.type";
import { IUser } from "../../models/users/user.model";
import { CreateUserInput } from "../../graphql/types/users/create-user.type";
import { UpdateUserInput } from "../../graphql/types/users/update-user.type";

@Service()
@Resolver()
export class UserResolver {
    constructor(@Inject() private userService: UserService) {}

    @Query(() => [User])
    async find() {
        return this.userService.findAll();
    }
    @Query(() => User, {nullable: true})
    async findById(@Arg("id") id: string) {
        return this.userService.findById(id);
    }

    @Mutation(() => User)
    async createUser(@Arg("input") userData: CreateUserInput) {
        return this.userService.createUser(userData);
    }

    @Mutation(() => User, {nullable: true})
    async updateUser(@Arg("input") userData: UpdateUserInput) {
        return this.userService.updateUser(userData);
    }

    @Mutation(() => User, {nullable: true})
    async deleteUser(@Arg("id") id: string) {
        return this.userService.deleteUser(id);
    }


}