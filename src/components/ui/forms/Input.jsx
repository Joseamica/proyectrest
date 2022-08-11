import { useState } from "react";

export const Input = ({ onClick, placeholder, ...rest }) => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <input {...rest} placeholder={placeholder} onClick={onClick} />
      {state}
    </>
  );
};
