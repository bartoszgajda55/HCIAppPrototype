export class User {
  name: string;
  description: string;
  accountsConnected: {
    facebook: boolean,
    instagram: boolean
  };
  email: string;
  password: string;
}
