const execute = (req, res) => {
    return req.interactor.run()
      .then(data => res.send(data))
      .catch(err => {
        console.error(err);
        res.status(500).send(err.message)
      });
  };
  
  module.exports = execute;