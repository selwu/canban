import { makeAutoObservable } from 'mobx';
import { UserType } from '../utils/types';

class UserStore {
  currentUser = {};
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: UserType) => {
    this.currentUser = user;
    this.isAuth = true;
  };

  logout = () => {
    this.currentUser = {};
    this.isAuth = false;
  };
}

export const userStore = new UserStore();
