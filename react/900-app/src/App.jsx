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
    'result':   [ 0, 0 ],
  });

  // ============================================

  const updateState = (type, row, val) => {
    setState((prev) => {
      const new_state = structuredClone(prev);
      new_state[type][row] = Number(val);

      const total_servings = new_state.serving.reduce((a, b) => a + b, 0);
      console.log('total_servings', total_servings);

      const updated_results = new_state.result.map((result, idx) => {
        return new_state.nutrient[idx] * total_servings;
      });

      new_state.result = updated_results;

      return new_state;
    });
  };

  // ============================================

  useEffect(() => {
    console.log(state);
  }, [state]);

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
        <Cell {...{ state, updateState }} type='nutrient' row={0} />
        <Cell {...{ state, updateState }} type='nutrient' row={1} />
      </div>

      <div style={{ gridRow: '2 / 3', gridColumn: '1 / 2' }}>
        <span>Servings:</span>
        <Cell {...{ state, updateState }} type='serving' row={0} />
        <Cell {...{ state, updateState }} type='serving' row={1} />
      </div>

      <div style={{ gridRow: '1 / 2', gridColumn: '2 / 3' }}>
        <span>Nutrients:</span>
        <Cell {...{ state, updateState }} type='nutrient' row={0} />
        <Cell {...{ state, updateState }} type='nutrient' row={1} />
      </div>

      <div style={{ gridRow: '2 / 3', gridColumn: '2 / 3' }}>
        <span>Servings:</span>
        <Cell {...{ state, updateState }} type='serving' row={0} />
        <Cell {...{ state, updateState }} type='serving' row={1} />
      </div>

      <div style={{ gridRow: '2 / 3', gridColumn: '3 / 4' }}>
        <span>Results:</span>
        <Cell {...{ state, updateState }} type='result' row={0} />
        <Cell {...{ state, updateState }} type='result' row={1} />
      </div>
    </main>
  );
}
