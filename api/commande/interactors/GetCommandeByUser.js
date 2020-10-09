const path = require('path');
const fs = require('fs');

const BaseInteractor = require('../../BaseInteractor');
const db = require('../../../db');
const sql = fs.readFileSync('./query/commande/get_commande_by_user.sql').toString();


class GetCommandeByUser extends BaseInteractor {

//   check(params) {
//     return new Promise((resolve, reject) => {
//         if (!params.hasOwnProperty('uuid'))
//             resolve(params);
//         else
//             reject(new Error('Need uuid parameter'));

//         console.log();
//     });
//   }

//   transform(params) {
//     return new Promise((resolve, reject) => {
//       resolve({
//         ...params,
//         id: params.uuid
//       });
//     });
//   }

  invoke() {
    return new Promise((resolve, reject) => {
        db.bdConnection(sql)
        .then(resolve({success: true}))
        .catch(reject);

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


module.exports = GetCommandeByUser;