import { useState } from "react";

function useModal() {
  const [state, setState] = useState(false);

  function open() {
    setState(true);
  }

  function close() {
    setState(false);
  }

  return { state, open, close };
}

export default useModal;
