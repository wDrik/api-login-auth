import express from 'express';
import bodyParser from 'body-parser';
import acl from 'express-acl';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

acl.config({
  filename: '/src/config/nacl.json',
  baseUrl: '/'
})

app.use(acl.authorize);

require('./app/controllers/index').default(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
