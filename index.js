const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const history = require("connect-history-api-fallback");

const app = express();

require('dotenv').config();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept, x-ms-token-aad-id-token');
    res.header('Content-Type', 'application/json');
    if ('OPTIONS' === req.method)
      res.sendStatus(200);
    else
      next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
req.url = req.url.replace(/\$@/g, '%2F');
req.url = req.url.replace(/@@/g, '%2B');
req.url = req.url.replace(/@\$/g, '%25');
req.url = req.url.replace(/\$88/g, '%5C');
next();
});

app.use((req, res, next) => {
console.log(`\n\n# New ${req.method} request:`);
console.log(`Time (UTC): ${moment.utc().format('MMM D, YYYY h:mm:ss A')}`);
console.log(`Path: ${req.url}`);
console.log('');
next();
});

app.get("/health", (req, res) => res.send({ success: true }));

const clientMiddleware = express.static("./client");
app.use(clientMiddleware);
app.use(history({ disableDotRule: true }));
app.use(clientMiddleware);

app.use("/api", require("./api"));

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});