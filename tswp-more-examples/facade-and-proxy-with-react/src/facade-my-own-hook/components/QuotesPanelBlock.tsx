
export function QuotesPanelBlock({ quote }: any) {
    return (
        <div key={quote.text} className="panel-block mb-1 content is-flex-direction-column is-align-items-flex-start">
            <blockquote style={{width: '100%'}}>{quote.text}</blockquote>
            <em className="ml-auto"> ~ {quote.author}</em>
        </div>
    )
}
