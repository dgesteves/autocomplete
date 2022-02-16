import { ChangeEvent, Dispatch, memo, SetStateAction } from "react";

import styles from "./input.module.css";

interface Props {
  value: string;
  placeholder: string;
  setShowSuggestions: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<string>>;
}

export default memo(function Input({
  value,
  placeholder,
  setShowSuggestions,
  setValue,
}: Props) {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    setShowSuggestions(true);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
});
