import React, { useLayoutEffect, useRef, useState } from "react";

import { useCounter, useFetch } from "../hooks";

export const Quote = ({author, quote}) => {

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  const pRef = useRef()

  useLayoutEffect(() => {
    const {height, width} = (pRef.current.getBoundingClientRect())
    setBoxSize({height, width})
  
    return () => {
    };
  }, [quote])

  return (
    <>
    <figure className="text-end">
      <blockquote className="blockquote">
        <p ref={pRef}>{quote}</p>
      </blockquote>
      <figcaption className="blockquote-footer">{author}</figcaption>
    </figure>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
