import * as React from "react";
import { Route, Navigate } from "react-router-dom";

export function Private({ children }) {
  const [user, setUser] = React.useState(false);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
