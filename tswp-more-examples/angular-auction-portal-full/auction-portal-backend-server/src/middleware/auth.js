import jwt, { TokenExpiredError } from 'jsonwebtoken'
import { ServerError } from '../common/ServerError'
import { userService } from '../domain/users/user-service'

export function auth( req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) {
		throw new ServerError(401, 'Brak tokena w żądaniu')
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
		if (err) {
			if(err instanceof TokenExpiredError) {
				return next(new ServerError(401, 'Token dostępu wygasł'));
			}
			return next(new ServerError(401, 'Nieprawidłowy token dostępu'));
		}

		const { id } = payload;
		userService.getById(id).then(user => {
			if(!user) {
				 return next(new ServerError(403, 'Użytkownik nie istnieje'))
			}
			req.user = user;
			next()
		})
	})
}
