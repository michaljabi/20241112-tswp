export class ServerError extends Error {
	constructor (status = 500, message = 'Server Error') {
		super(message);
		this.status = status;
	}

	static notAuthorized(msg = 'Not Authorized'){
		 return new ServerError(401, msg)
	}
}
