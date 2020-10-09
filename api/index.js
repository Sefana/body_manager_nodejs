const BaseInteractor = require("./BaseInteractor");
const execute = require("./execute");
const router = require('express').Router();

// attach basic interactor
router.use((req, res, next) => {
    req.interactor = new BaseInteractor();
    next();
});

router.use(function(req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});
  
// ROUTES
router.use('/commande', require('./commande'));
router.use(execute);
  
module.exports = router;