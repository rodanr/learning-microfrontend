import React from "react";

import { login, jwt } from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";

export default function CartContent() {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return (
    <div className="flex">
      <div></div>JWT: {token}
      <Login />
      <MiniCart />
    </div>
  );
}
