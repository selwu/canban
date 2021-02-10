export interface UserType {
  email: string;
  password: string;
}

export interface RootState {
  user?: any;
  files?: any;
}
