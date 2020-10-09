const attachInteractor = (factory) => {
    return (req, res, next) => {
      factory.getInteractor()
        .then(interactor => {
          interactor.attachParams({ ...req.params, ...req.query, ...req.body, ...req.file });
          // interactor.attachUser(req.user);
          req.interactor = interactor;
          next();
        })
        .catch(err => {
          // todo check error for 401 or 500
          console.error(err);
          res.sendStatus(401);
        });
    };
};

module.exports = attachInteractor;