import express from 'express'
import cors from 'cors'
import './data-access/db-connection'
import { ServerError } from './common/ServerError'
import { auctionController } from './domain/auctions/auction-controller'
import { userController } from './domain/users/user-controller'

const app = express();

app.use(cors({ origin: process.env.VALID_CORS }));
app.use(express.json());

app.get('/', (req, res) => {
	throw ServerError.notAuthorized();
})

app.use('/auctions', auctionController);
app.use('/users', userController);

app.all('**', (req, res) => {
	res.status(404).json({ message: `Nie obsługuje ${req.method} na ${req.url}` })
})

app.use((err, req, res, next) => {
	const { message } = err;
	const error = { message };
	const isServerError = err instanceof ServerError;
	const statusCode = isServerError ? err.status : 500;
  console.error(error);
	res.status(statusCode).json(error);
})

export default app;
