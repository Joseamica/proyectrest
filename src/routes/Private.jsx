import * as React from "react";
import { Route, Navigate } from "react-router-dom";

export function Private({ children, path }) {
  const [user, setUser] = React.useState(true);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
