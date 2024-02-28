import { useState, useEffect } from "react";
import Cell from "./Cell";

// ==============================================
// ==============================================
// ==============================================
// ==============================================

export default function App() {
  
  // ============================================

  const [state, setState] = useState({
    'nutrient': [ 0, 0 ],
    'serving':  [ 0, 0 ],
  });

  // ============================================

  const updateState = (key, row, val) => {
    setState((prev) => {
      const new_state = structuredClone(prev);
      new_state[key][row] = Number(val);
      return new_state;
    });
  };

  // ============================================

  useEffect(() => {
    console.log(state);
  }, [state]);

  // ============================================

  const onClick = () => {
    alert('you clicked me!');
  };

  // ============================================

  return (
    <>
      <div>
        <Cell {...{ state, updateState }} row={0} />
        <Cell {...{ state, updateState }} row={1} />
      </div>

      <button onClick={() => onClick()}>Update</button>
    </>
  )
}
