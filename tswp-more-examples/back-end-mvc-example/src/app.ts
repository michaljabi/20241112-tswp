import express, {Express} from 'express'
import session  from 'express-session'
import { engine }  from 'express-handlebars'
import { mainController } from './controller/main.controller';
import { tasksController } from './controller/tasks.controller';
import './contracts/express-session.extend' // Ten import jest potrzebny dla typowania req.session.user

const app: Express = express();

app.use(session({
	name: 'my-session',
	secret: 'IUDT&^%^&D%W*QHD*&%^&WQ%6q4w65wr65q4452356',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(mainController)
app.use('/tasks', tasksController)

export default app;
