import { extendObservable } from 'mobx';

class UserStore {

  constructor() {

    extendObservable(this, {

      loading: true,
      isloggedIn: false,
      userName: ''
    })
  }
}

export default new UserStore();