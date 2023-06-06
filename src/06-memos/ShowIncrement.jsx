/* eslint-disable react/display-name */
import propTypes from "prop-types";
import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Increment
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: propTypes.func.isRequired,
};
