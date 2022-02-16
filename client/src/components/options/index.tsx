import { Dispatch, memo, SetStateAction } from "react";

import styles from "./options.module.css";
import { getSuggestions } from "../../utils";

interface Props {
  options: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setSuggestion: Dispatch<SetStateAction<string>>;
}

export default memo(function Options({
  options,
  value,
  setValue,
  setSuggestion,
}: Props) {
  const suggestions = getSuggestions(options, value);

  const handleClick = (suggestion: string) => {
    setValue(suggestion);
    setSuggestion(suggestion);
  };

  return (
    <ul className={styles.options}>
      {suggestions.map((suggestion) => (
        <li key={suggestion} onClick={() => handleClick(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
});
