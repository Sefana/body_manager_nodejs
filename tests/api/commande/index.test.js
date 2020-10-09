const GetCommandeByUser = require('./interactors/GetCommandeByUser.subtest');
const AddCommande = require('./interactors/AddCommande.subtest');
const GetCommandeByUserFactory = require('./factories/GetCommandeByUserFactory.subtest');
const AddCommandeFactory = require('./factories/AddCommandeFactory.subtest');

describe('/commande', () => {
    GetCommandeByUserFactory();
    AddCommandeFactory();
    GetCommandeByUser();
    AddCommande();
});