import {Model} from 'objection';

export class Auction extends Model {
	static get tableName() {
		return 'auctions';
	}
}
