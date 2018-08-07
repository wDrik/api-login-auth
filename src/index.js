import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
