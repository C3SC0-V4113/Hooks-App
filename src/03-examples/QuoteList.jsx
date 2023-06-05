export const QuoteList = ({ data }) => {
  return data.map((quote, i) => (
    <blockquote key={i} className="blockquote text-end">
      <p className="mb-4">{quote.quote}</p>
      <footer className="blockquote-footer">{quote.author}</footer>
    </blockquote>
  ));
};
