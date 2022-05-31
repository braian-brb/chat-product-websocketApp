import express from 'express';
import { urlencoded, json, } from 'express';
import { engine } from 'express-handlebars';
import { router } from './routes/index.js';
import morgan from 'morgan';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

export const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
/*------- SETTINGS ------- */
app.set('PORT', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
/*------- MIDLEWARES ------- */
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
/*------- ROUTES ------- */
app.use('/', router);
/*------- VIEWS ------- */
app.engine(
    '.hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(__dirname, 'views', 'layouts'),
      partialsDir: path.join(__dirname, 'views', 'partials'),
    })
  );