import React from "react";
import { Button } from "react-bootstrap";
import "./AppButton.css";

export default ({
  text,
  className = "",
  onClick = null
}) =>
  <Button
    className={`LoaderButton ${className}`}
    title={text}
    onClick={onClick}
  >    
  {text}
  </Button>;
