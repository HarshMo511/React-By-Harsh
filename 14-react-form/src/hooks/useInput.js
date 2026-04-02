import { useState } from "react";

export function useInput(defautValue, validationFn) {
  const [enteredvalue, setEnteredValue] = useState(defautValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueISValid = validationFn(enteredvalue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredvalue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueISValid,
  };
}
