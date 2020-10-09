class BaseInteractor {

    constructor() {
      this.params = {};
      this.user = null;
    }
  
    attachParams(params) {
      this.params = params;
    }
  
    attachUser(user) {
      this.user = user;
    }
  
    check(params) {
      return new Promise((resolve) => resolve(params));
    }
  
    transform(params) {
      return new Promise((resolve) => resolve(params));
    }
  
    invoke(params) {
      return new Promise((resolve, reject) => reject(new Error('Not implemented')));
    }
  
    run() {
      return new Promise((resolve, reject) => {
        this.check(this.params)
          .then((params) => this.transform(params)) // or else child classes will have undefined as this
          .then((params) => this.invoke(params)) // or else child classes will have undefined as this
          .then(resolve)
          .catch(reject)
      });
    }
}
  
module.exports = BaseInteractor;