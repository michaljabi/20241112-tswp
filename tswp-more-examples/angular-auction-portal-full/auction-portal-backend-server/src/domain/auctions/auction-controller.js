import express from 'express'
import { auctionService } from './auction-service'
import { auth } from '../../middleware/auth'

export const auctionController = express.Router();

auctionController.get('', ( req, res, next) => {
	const {title} = req.query;
	auctionService
		.getAllAuctions(title)
		.then(auctions => {
			res.json( auctions )
		})
		.catch(next)
})

auctionController.post('', auth, ( req, res, next) => {
	const { body } = req;
	auctionService
		.addOne(body)
		.then(newAuction => {
			res.json( newAuction );
		})
		.catch(next);
})

