import { useEffect, Dispatch, SetStateAction, MutableRefObject } from "react";

export default function useOutsideClick(
  ref: MutableRefObject<HTMLDivElement | null>,
  fn: Dispatch<SetStateAction<boolean>>
) {
  const handleOutsideClick = (evt: any) => {
    if (ref.current && !ref.current?.contains(evt.target)) {
      fn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
}
