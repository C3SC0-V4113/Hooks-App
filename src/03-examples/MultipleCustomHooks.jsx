import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  //   console.log({ data, hasError, isLoading });

  //   const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      <button
        disabled={isLoading}
        onClick={() => increment()}
        className="btn btn-primary"
      >
        More Quotes
      </button>
      <button
        disabled={isLoading}
        onClick={() => decrement()}
        className="btn btn-secondary"
      >
        Less Quotes
      </button>
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        data.map((quote, i) => (
          <blockquote key={i} className="blockquote text-end">
            <p className="mb-4">{quote.quote}</p>
            <footer className="blockquote-footer">{quote.author}</footer>
          </blockquote>
        ))
      )}
    </>
  );
};
