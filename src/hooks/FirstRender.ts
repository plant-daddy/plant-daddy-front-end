import React from "react";
import { useRef } from "react";

function FirstRender() {
  const firstRender = useRef(true);

  React.useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export default FirstRender;
