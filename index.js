const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/create', (req, res) => {
  if (req.headers.authorization !== 'Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=') {
    res.set('WWW-Authenticate', 'Basic realm="401');
    res.status(401).send('Try user: AzureDiamond, password: hunter2');
    return;
  }
  res.send('TODO: create a JWT');
});

app.get('/verify/:token', (req, res) => {
  res.send(`TODO: verify this JWT: ${req.params.token}`);
});

app.get('/', (req, res) => res.send('TODO: use Okta for auth'));

app.listen(port, () => console.log(`JWT server listening on port ${port}!`));
