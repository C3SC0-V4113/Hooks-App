import { useLayoutEffect, useRef, useState } from "react";

export const QuoteList = ({ data }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [data]);

  return data.map((quote, i) => (
    <>
      <blockquote
        key={i}
        className="blockquote text-end"
        style={{ display: "flex" }}
      >
        <p ref={pRef} className="mb-4">
          {quote.quote}
        </p>
        <footer className="blockquote-footer">{quote.author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  ));
};
