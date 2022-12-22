export type UnregisteredUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type RegisteredUser = {
  first_name: string;
  last_name: string;
  uuid: string;
  email: string;
  password: string;
  role: Role;
  password_verified: boolean;
  last_login: Date | null;
  date_created: Date;
};

enum Role {
  GENERAL,
  ADMIN,
}

export type ApiResult = {
  success: boolean;
  data: any;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type ClientPlatforms = "app" | "browser";
