import React from "react";

export default function Header({ appMeta }) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Fidget Spinner World | {appMeta.appName}
    </div>
  );
}
