import { User } from '../model/user';

export interface IUserDAO {
  validator(): boolean;
  getUser(): User; 
}