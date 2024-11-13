import { useQuotes } from '../hooks/useQuotes';
import { QuotesPanelBlock } from './QuotesPanelBlock';

type QuotesPanelProps = { title?: string, filterBy?: string }

function QuotesPanel({ title = 'All quotes', filterBy = '' }: QuotesPanelProps) {

	const {isLoading, quotes} = useQuotes(filterBy)

	return (
		<section className={`panel ` + (filterBy ? 'is-success' : 'is-info')}>
			<p className="panel-heading">
				{title}
			</p>
			{isLoading &&
				<div className="panel-block"> loading... </div>
			}
			{!isLoading &&
				quotes.map((q: any) => (<QuotesPanelBlock key={q.text} quote={q} />))
			}
		</section>
	)
}

export default QuotesPanel
