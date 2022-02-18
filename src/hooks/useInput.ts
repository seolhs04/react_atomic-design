import { useState } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    const willUpdate = true;
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}
