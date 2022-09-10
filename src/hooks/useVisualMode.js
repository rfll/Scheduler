import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    if (replace) {
      setMode(newMode)
    } else {
      setHistory([...history, newMode])
      setMode(newMode)
    }
  }

  function back() {
    for (let index = history.length - 1; index >= 0; index--) {
      if (history[index] === initial) {
        return setMode(history[index]);
      }
      if (history[index] === mode) {
        return setMode(history[index - 1]);
      }
    }
  }

  return { mode, transition, back };
}