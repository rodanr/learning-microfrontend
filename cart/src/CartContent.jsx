import React from "react";

import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = React.useState("");

  return <div>JWT: {token}</div>;
}
