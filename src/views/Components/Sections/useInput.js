/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  console.log("i am inside useInput");

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {        
        console.log("i am inside onChange",event);
        setValue(event.target.value);
      },
    },
  };
};
