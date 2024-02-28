import { useState, useEffect } from "react";
import Cell from "./Cell";

// ==============================================
// ==============================================
// ==============================================
// ==============================================

export default function App() {
  
  // ============================================

  const [state, setState] = useState({
    'nutrient': [[ 0, 0 ], [ 0, 0 ]],
    'serving':  [[ 0, 0 ], [ 0, 0 ]],
    'result':   [[ 0, 0 ]],
  });

  // ============================================

  const newResult = (new_state) => {
    let new_result = [0, 0];
    for (let food = 0; food < 2; food++) {
      const total_servings = new_state.serving[food].reduce((a, b) => a + b, 0);
      for (let idx = 0; idx < 2; idx++) {
        new_result[idx] += new_state.nutrient[food][idx] * total_servings;
      }
    }
    return new_result;
  };

  // ============================================

  const updateState = (type, food, idx, val) => {
    setState((prev) => {
      // console.log('val: ', val);

      const new_state = structuredClone(prev);
      new_state[type][food][idx] = Number(val);
      // console.log('new_state', new_state);

      // const updated_results = new_state.nutrient[food].map((nutrient) => {
      //   return nutrient * total_servings;
      // });
      const new_result = newResult(new_state);
      new_state.result = [new_result];
      return new_state;
    });
  };

  // ============================================

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  // ============================================

  return (
    <main style={{ 
      display: 'grid', 
      gap: '2rem',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      border: 'solid black 1px',
      padding: '1rem',
    }}>
      <div style={{ gridRow: '1 / 2', gridColumn: '1 / 2' }}>
        <span>Nutrients:</span>
        <Cell {...{ state, updateState }} type='nutrient' food={0} idx={0}/>
        <Cell {...{ state, updateState }} type='nutrient' food={0} idx={1}/>
      </div>

      <div style={{ gridRow: '2 / 3', gridColumn: '1 / 2' }}>
        <span>Servings:</span>
        <Cell {...{ state, updateState }} type='serving' food={0} idx={0} />
        <Cell {...{ state, updateState }} type='serving' food={0} idx={1} />
      </div>

      <div style={{ gridRow: '1 / 2', gridColumn: '2 / 3' }}>
        <span>Nutrients:</span>
        <Cell {...{ state, updateState }} type='nutrient' food={1} idx={0} />
        <Cell {...{ state, updateState }} type='nutrient' food={1} idx={1} />
      </div>

      <div style={{ gridRow: '2 / 3', gridColumn: '2 / 3' }}>
        <span>Servings:</span>
        <Cell {...{ state, updateState }} type='serving' food={1} idx={0} />
        <Cell {...{ state, updateState }} type='serving' food={1} idx={1} />
      </div>

      <div style={{ gridRow: '2 / 3', gridColumn: '3 / 4' }}>
        <span>Results:</span>
        <Cell {...{ state, updateState }} type='result' food={0} idx={0} />
        <Cell {...{ state, updateState }} type='result' food={0} idx={1} />
      </div>
    </main>
  );
}
