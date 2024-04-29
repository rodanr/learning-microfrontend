import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header({ appMeta }) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          Fidget Spinner World | {appMeta.appName}
        </div>
      </div>
      <div className="flex-end">
        <MiniCart />
        <Login />
      </div>
    </div>
  );
}
