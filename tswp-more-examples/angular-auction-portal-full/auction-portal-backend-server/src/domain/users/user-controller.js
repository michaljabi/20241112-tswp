import express from 'express'
import { userService } from './user-service'

export const userController = express.Router();

userController.post('/log-in', ( req, res, next) => {
	const { email, password } = req.body;
  console.log(email, password);
	userService
		.logIn(email, password)
		.then(user => res.json(user))
		.catch(next)
})

userController.post('/log-out', ( req, res, next) => {
	userService.logOut()
		.then(() => {
			res.json( { status: 'OK' } );
		})
		.catch(next);
})

