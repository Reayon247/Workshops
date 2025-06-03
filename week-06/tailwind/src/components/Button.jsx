import { useState } from "react";

export default function App() {
  let [myCounterState, setMyCounterState] = useState(0);

  function decreaseCounter() {
    setMyCounterState(myCounterState - 1);
  }

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  function resetCount() {
    setMyCounterState((myCounterState = 0));
  }

  return (
    <div>
      <p>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decreaseCounter}>Eat a cookie</button>
      <button onClick={resetCount}>RESET</button>
    </div>
  );
}
