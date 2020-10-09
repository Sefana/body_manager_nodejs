const router = require('express').Router();

const attachInteractor = require('../attachInteractor');
const AddCommandeFactory = require('./factories/AddCommandeFactory');
const GetCommandeByUserFactory = require('./factories/GetCommandeByUserFactory');
 
// MIDDLEWARE
router.use((req, res, next) => {
  console.log('Manage by Commande');
  next();
});

// ROUTES
router.get('/', attachInteractor(GetCommandeByUserFactory));
router.post('/', attachInteractor(AddCommandeFactory));

module.exports = router;