// const Permissions = require("../../../Permissions");
const BaseFactory = require('../../BaseFactory');
const AddCommande = require('../interactors/AddCommande');

class AddCommandeFactory extends BaseFactory {
  static getInteractor(permission) {
    return new Promise((resolve, reject) => {
    //   switch (permission) {
        // case Permissions.ADMIN:
        //   break;
        // default:
            resolve(new AddCommande());
        //   reject(new Error());
        //   break;
    //   }
    });
  }
}

module.exports = AddCommandeFactory;