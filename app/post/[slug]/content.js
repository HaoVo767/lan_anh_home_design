"use client";
import React, { useRef, useEffect } from "react";

export default function Content({ data }) {
  const postRef = useRef(null);
  // if (window !== undefined) {
  //   postRef?.current?.innerHTML = data;
  //   console.log("postRefffffffffff ", postRef.current);
  // }
  useEffect(() => {
    // console.log("postRefffffffffff ", postRef.current);
    postRef.current.innerHTML = data;
  }, []);
  return <div ref={postRef} className="w-4/5 md:w-2/3 mx-auto"></div>;
}
