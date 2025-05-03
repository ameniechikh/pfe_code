import { registerEnumType } from "type-graphql";

export enum UserRoleEnum {
    ADMIN = "Admin",
    AGENT_COMMERCIAL = "Agent commercial",
    AGENT_APPROVISIONNEMENT = "Agent approvisionnement",
    AGENT_MAGASINIER = "Agent magasinier",
    FOURNISSEUR = "Fournisseur",
    CLIENT = "Client",
    AGENT_PRODUCTION = "Agent production",
  }

registerEnumType(UserRoleEnum, {
    name: 'UserRoleEnum',
  });