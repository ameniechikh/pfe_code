import { Document, Model, model, Schema } from "mongoose";
import { UserRoleEnum } from "./user-role.enum";
import { UserStatusEnum } from "./user-status.enum";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: UserRoleEnum,
    default: UserRoleEnum.ADMIN,
    required: true,
  },
  status: {
    type: String,
    enum: UserStatusEnum,
    default: UserStatusEnum.ACTIF,
    required: true,
  }
});

export interface IUser extends Document {
  name: string;
  email: string;
  role: UserRoleEnum;
  status: UserStatusEnum;
}

export const User: Model<IUser> = model<IUser>("User", userSchema);
