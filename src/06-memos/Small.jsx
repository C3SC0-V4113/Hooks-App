/* eslint-disable react/display-name */
import propTypes from "prop-types";
import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});

Small.propTypes = {
  value: propTypes.number.isRequired,
};
