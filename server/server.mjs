import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
// import { PORT } from '../config';

const app = express();
// const { PORT = config.PORT } = process.env;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  return next();
});

app.get('/', (req, res) => {
  res.sendFile('../index.html');
});

// app.get('/', (req, res) => {
//   res.send(res.locals.data);
// });

app.listen(3000, () => {
  console.log(`Server started at http://localhost: 3000...`);
});
