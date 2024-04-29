import React from "react";

import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    login("sally", "123");
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return <div>JWT: {token}</div>;
}
