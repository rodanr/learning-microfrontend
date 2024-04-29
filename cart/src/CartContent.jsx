import React from "react";

export default function CartContent() {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {}, []);

  return <div>JWT: {token}</div>;
}
