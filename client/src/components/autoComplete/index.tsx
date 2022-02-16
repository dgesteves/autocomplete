import { useEffect, useState, useRef } from "react";
import Input from "../input";
import Options from "../options";
import useOutsideClick from "../../hooks/useOutsideClick";

import styles from "./autoComplete.module.css";

interface Props {
  options: string[];
}

export default function AutoComplete({ options }: Props) {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const autocompleteRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(autocompleteRef, setShowSuggestions);

  useEffect(() => {
    if (value === suggestion) {
      setShowSuggestions(false);
    }
  }, [value, suggestion]);

  return (
    <div
      className={styles.autocomplete}
      ref={autocompleteRef}
      data-testid="autocomplete"
    >
      <Input
        value={value}
        setValue={setValue}
        setShowSuggestions={setShowSuggestions}
        placeholder="Search"
      />
      {showSuggestions && (
        <Options
          options={options}
          value={value}
          setValue={setValue}
          setSuggestion={setSuggestion}
        />
      )}
    </div>
  );
}
