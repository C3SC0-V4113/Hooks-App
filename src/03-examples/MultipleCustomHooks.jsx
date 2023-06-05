import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, QuoteList } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading } = useFetch(
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
        disabled={isLoading || counter == 0}
        onClick={() => decrement()}
        className="btn btn-secondary"
      >
        Less Quotes
      </button>
      {isLoading ? <LoadingQuote /> : <QuoteList data={data} />}
    </>
  );
};
