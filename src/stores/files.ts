import { makeAutoObservable } from 'mobx';

class FilesStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const filesStore = new FilesStore();
