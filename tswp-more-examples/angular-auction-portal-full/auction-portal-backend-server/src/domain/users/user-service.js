import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './User'
import { ServerError } from '../../common/ServerError'

export const userService = {
	logIn(email, password) {
		 if(!email) {
		 	  throw new ServerError(401, 'Logowanie wymaga e-mail')
		 }
		 let foundUser;
		 return	User.query()
				.where( { email } )
				.first()
				.then(user => {
					if(!user) {
						throw new ServerError(401, 'Brak autoryzacji')
					}
          foundUser = user;
					return bcrypt.compare(password, user.password);
				})
			  .then(isValid => {
				  if(!isValid) {
					  throw new ServerError(401, 'Brak autoryzacji')
				  }
          const token = jwt.sign( { id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: '3d' } );
          const {id, name, email} = foundUser;
				  return {id, name, email, token};
			  })
	},
	getById(id) {
		return User.query().findById(id);
	}
}

