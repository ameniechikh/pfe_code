import { registerEnumType } from "type-graphql";

export enum UserStatusEnum {
    ACTIF = "Actif",
    INACTIF = "Inactif",
  }
  
  registerEnumType(UserStatusEnum, {
    name: 'UserStatusEnum',
  });
  