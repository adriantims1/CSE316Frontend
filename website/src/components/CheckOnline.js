import React, { useState, useEffect } from "react";
import { CheckOnlineAPIMethod } from "../api/generalClient";
import { useHistory } from "react-router-dom";

export default function CheckOnline(props) {
  const history = useHistory();
  const [state, setState] = useState(false);
  useEffect(() => {
    //const sessId = await CheckOnlineAPIMethod();
    //console.log(localStorage.getItem("log"));
    //console.log(sessId.data);
    if (localStorage.getItem("log") !== "false") {
      setState(true);
    } else {
      console.log("false");
      setState(false);
      history.push("/");
    }
  });
  return <div>{state ? props.success : null}</div>;
}
