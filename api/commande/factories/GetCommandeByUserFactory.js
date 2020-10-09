// const Permissions = require("../../../Permissions");
const BaseFactory = require('../../BaseFactory');
const GetCommandeByUser = require('../interactors/GetCommandeByUser');

class GetCommandeByUserFactory extends BaseFactory {
  static getInteractor() {
    return new Promise((resolve, reject) => {
    //   switch (permission) {
        // case Permissions.ADMIN:
        //   break;
        // default:
            resolve(new GetCommandeByUser());
        //   reject(new Error());
        //   break;
    //   }
    });
  }
}

module.exports = GetCommandeByUserFactory;