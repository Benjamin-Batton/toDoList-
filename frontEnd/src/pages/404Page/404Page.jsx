import React from "react";
import { useParams } from "react-router-dom";

export const RedirectPage = (props) => {
  const { err } = useParams();
  console.log(props);
  return (
    <div>
       {`ERROR 404 PAGE ${err}`}
    </div>
  );
}

