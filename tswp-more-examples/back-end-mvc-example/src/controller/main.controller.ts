import express, {Request, Response} from 'express';
import {User} from "../model/User";

export const mainController = express.Router()


mainController.get('/', (req: Request, res: Response) => {

	if(req.session.user) {
		const {name} = req.session.user;
		res.render('welcome', {title: 'Strona domowa', userName: name});
	} else {
		res.render('home', {title: 'Logowanie'});
	}
})

mainController.post('/', (req: Request, res: Response) => {

	const { login, password } = req.body;
	if(login === 'test' && password === '1234') {
		req.session.user = new User(1, 'Test User');
		res.render('welcome', {title: 'Strona domowa', userName: 'Test User'});
	} else {
		res.render('home', {
			title: 'Niepowodzenie logowania...',
			errorMessage: 'Niestety podano nieprawidłowe hasło / login...'
		});
	}
})

mainController.post('/log-out', (req, res) => {
	delete req.session.user;
	res.redirect('/');
})
