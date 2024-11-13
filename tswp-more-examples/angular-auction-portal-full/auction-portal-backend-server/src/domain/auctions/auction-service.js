import { Auction } from './Auction'
import { ServerError } from '../../common/ServerError'

export const auctionService = {
	getAllAuctions(title='') {
		return Auction.query().where('title', 'like', `%${title}%`);
	},
	addOne(auction) {
		const {title, price, imgUrl} = auction;
		const errors = [];
		if(!title) {
			errors.push('tytuł')
		}
		if(!price) {
			errors.push('cenę')
		}
		if(!imgUrl) {
			errors.push('zdjęcie')
		}
		if(errors.length) {
			 throw new ServerError(422, 'Aukcja powinna mieć: ' + errors.join(', '))
		}
		return Auction.query().insert(auction);
	}
}

