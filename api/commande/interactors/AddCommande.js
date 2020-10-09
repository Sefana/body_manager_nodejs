const path = require('path');
const fs = require('fs');

const BaseInteractor = require('../../BaseInteractor');
const db = require('../../../db');
const sql = fs.readFileSync('./query/commande/add_commande.sql').toString();


class AddCommande extends BaseInteractor {

  check(params) {
    return new Promise((resolve, reject) => {
        if (!params.hasOwnProperty('id'))
            reject(new Error('Need id parameter'));
        else if (!params.hasOwnProperty('programme')) 
            reject(new Error('Need programme parameter'));
        else
            resolve(params);
        
    });
  }

  transform(params) {
    return new Promise((resolve, reject) => {
      resolve({
        ...params,
        id: params.id.toLowerCase()
      });
    });
  }

  invoke({ id }) {
    return new Promise((resolve, reject) => {
    //   db.panoramisDataQuery(sql, [name])
    //     .then(apis => {

    //       resolve(apis.rows.reduce((acc, api) => {
    //         if (!acc.hasOwnProperty('name'))
    //           acc = {
    //             name: api.name,
    //             description: api.description,
    //             object: api.object,
    //             implementation: api.implementation,
    //             versions: []
    //           };

    //         if (api.name === acc.name)
    //           acc.versions.push({
    //             name: api.version,
    //             consumers: api.consumers_name.map((name, index) => ({ name, description: api.consumers_description[index] })),
    //             backend: api.backend,
    //             url: api.url,
    //             input: api.input,
    //             output: api.output,
    //           });
    //         return acc;
    //       }, {}));
    //     })
    //     .catch(reject);
    });
  }
}


module.exports = AddCommande;