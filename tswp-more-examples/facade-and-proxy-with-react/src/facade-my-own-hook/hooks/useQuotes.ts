import { useState, useEffect } from "react"
import { Quote } from '../model/Quote'
import { swQuotesService } from "../services/swQuotesService"

// Fasada sposobu pytania back-endu o dane.

export function useQuotes(author: string) {
	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<Quote[]>([])

	useEffect(() => {
		setLoading(true)
		swQuotesService.getAll()
			.then(quotes => {
				setQuotes(quotes.filter(q => q.author.includes(author)))
			})
			.finally(() => setLoading(false))
	}, [author])

	return { isLoading, quotes }
}
