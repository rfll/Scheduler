import { useState } from 'react';

export default function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    setHistory(prev => replace ? [...prev.slice(0,-1), newMode] : [...prev, newMode])

    // if (replace) {
    //   // setMode(newMode)
    // } else {
    //   setHistory([...history, newMode])
    //   // setMode(newMode)
    // }


  }

  function back() {
    // for (let index = history.length - 1; index >= 0; index--) {
    //   if (history[index] === initial) {
    //     return setMode(history[index]);
    //   }
    //   if (history[index] === mode) {
    //     return setMode(history[index - 1]);
    //   }
    // }
    if (history.length > 1) setHistory(prev => [...prev.slice(0,-1)])

  }

  return { mode: history[history.length - 1], transition, back };
}