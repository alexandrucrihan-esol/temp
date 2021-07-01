import { useCallback, useState } from "react";



export const useFormPartialForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const setForm = useCallback((name: keyof T) => (value: T[typeof name]) => {
    setFormState(p => ({
      ...p,
      [name]: value
    }));
  }, [setFormState]);

  return {
    state: formState,
    setFormState,
    setForm
  };
}