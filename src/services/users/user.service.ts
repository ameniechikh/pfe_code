import { Service } from "typedi";
import { IUser, User } from "../../models/users/user.model";
import { CreateUserInput } from "../../graphql/types/users/create-user.type";
import { UpdateUserInput } from "../../graphql/types/users/update-user.type";

interface ICreateUser {
    name: string;
    email: string;
}


@Service()
export class UserService { 

    public findById(id: string): Promise<IUser | null> {
        return User.findById(id);
    }

    public findAll(): Promise<IUser[]> {
        return User.find()
    }

    public createUser(user: CreateUserInput): Promise<IUser> {
        console.log(user);
        const userDb = new User(user);
        return userDb.save();
    }

    public updateUser(user: UpdateUserInput): Promise<IUser | null> {
        return User.findByIdAndUpdate(user.id, user, { new: true });
     }

    public deleteUser(id: string): Promise<IUser | null> {
        return User.findByIdAndDelete(id);
    }
}