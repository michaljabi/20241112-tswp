import { Quote } from '../model/Quote'

export const swQuotesService = {
	getAll(): Promise<Quote[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{ author: 'Leia Organa', text: 'Help me, Obi-Wan Kenobi. You’re my only hope.' },
					{ author: 'Darth Vader', text: 'I find your lack of faith disturbing.' },
					{ author: 'Han Solo', text: 'It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.' },
					{ author: 'Obi-Wan Kenobi', text: 'The Force will be with you. Always.' },
					{ author: 'Yoda', text: 'Do. Or do not. There is no try.' },
					{ author: 'Darth Vader', text: 'No. I am your father.' },
					{ author: 'Emperor Palpatine', text: 'Now, young Skywalker, you will die.' },
					{ author: 'Yoda', text: 'Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.' },
				])
			}, 800)
		})
	}
}
