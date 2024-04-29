import React from "react";

import { login, jwt } from "./cart";
import Login from "./Login";

export default function CartContent() {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return (
    <div>
      <div></div>JWT: {token}
      <Login />
    </div>
  );
}
