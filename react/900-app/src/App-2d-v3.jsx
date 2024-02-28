import { useState, useEffect } from "react";
import Cell from "./Cell";

// ==============================================
// ==============================================
// ==============================================
// ==============================================

export default function App() {
  
  // ============================================

  const [state, setState] = useState({
    'nutrient': [[ 0, 0 ],    [ 0, 0 ]],
    'serving':  [[ 0, 0, 0 ], [ 0, 0, 0 ]],
    'result':   [[ 0, 0 ]],
  });

  // ============================================

  const newResult = (new_state) => {
    let new_result = [0, 0];
    for (let food = 0; food < state.nutrient[food].length; food++) {
      const total_servings = new_state.serving[food].reduce((a, b) => a + b, 0);
      for (let idx = 0; idx < state.serving[food].length; idx++) {
        new_result[idx] += new_state.nutrient[food][idx] * total_servings;
      }
    }
    return new_result;
  };

  // ============================================

  const updateState = (type, food, idx, val) => {
    setState((prev) => {
      const new_state = structuredClone(prev);
      new_state[type][food][idx] = Number(val);

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
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <main
        className="card card-1"
        style={{ 
          display: 'grid', 
          gap: '2rem',
          gridTemplateRows: 'repeat(9, 1fr)',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: 'solid black 1px',
          borderRadius: '0.25rem',
          padding: '1rem',
          width: 'fit-content',
        }}
      >
        <div style={{ gridRow: '1 / 2', gridColumn: '1 / 2' }}>
          <Cell>Calories: </Cell>
        </div>
        <div style={{ gridRow: '2 / 3', gridColumn: '1 / 2' }}>
          <Cell>Protien: </Cell>
        </div>

        <div style={{ gridRow: '4 / 5', gridColumn: '1 / 2' }}>
          <Cell>Meal 1: </Cell>
        </div>
        <div style={{ gridRow: '5 / 6', gridColumn: '1 / 2' }}>
          <Cell>Meal 2: </Cell>
        </div>
        <div style={{ gridRow: '6 / 7', gridColumn: '1 / 2' }}>
          <Cell>Meal 3: </Cell>
        </div>


        <div style={{ gridRow: '1 / 2', gridColumn: '2 / 3' }}>
          <Cell {...{ state, updateState }} type='nutrient' food={0} idx={0}/>
        </div>
        <div style={{ gridRow: '2 / 3', gridColumn: '2 / 3' }}>
          <Cell {...{ state, updateState }} type='nutrient' food={0} idx={1}/>
        </div>
        <div style={{ gridRow: '4 / 5', gridColumn: '2 / 3' }}>
          <Cell {...{ state, updateState }} type='serving' food={0} idx={0} />
        </div>
        <div style={{ gridRow: '5 / 6', gridColumn: '2 / 3' }}>
          <Cell {...{ state, updateState }} type='serving' food={0} idx={1} />
        </div>
        <div style={{ gridRow: '6 / 7', gridColumn: '2 / 3' }}>
          <Cell {...{ state, updateState }} type='serving' food={0} idx={2} />
        </div>


        <div style={{ gridRow: '1 / 2', gridColumn: '3 / 4' }}>
          <Cell {...{ state, updateState }} type='nutrient' food={1} idx={0} />
        </div>
        <div style={{ gridRow: '2 / 3', gridColumn: '3 / 4' }}>
          <Cell {...{ state, updateState }} type='nutrient' food={1} idx={1} />
        </div>
        <div style={{ gridRow: '4 / 5', gridColumn: '3 / 4' }}>
          <Cell {...{ state, updateState }} type='serving' food={1} idx={0} />
        </div>
        <div style={{ gridRow: '5 / 6', gridColumn: '3 / 4' }}>
          <Cell {...{ state, updateState }} type='serving' food={1} idx={1} />
        </div>
        <div style={{ gridRow: '6 / 7', gridColumn: '3 / 4' }}>
          <Cell {...{ state, updateState }} type='serving' food={1} idx={2} />
        </div>


        <div style={{ gridRow: '8 / 9', gridColumn: '4 / 5' }}>
          <Cell {...{ state, updateState }} type='result' food={0} idx={0} />
        </div>
        <div style={{ gridRow: '9 / 10', gridColumn: '4 / 5' }}>
          <Cell {...{ state, updateState }} type='result' food={0} idx={1} />
        </div>

        <hr style={{ gridRow: '3 / 4', gridColumn: '1 / -1', borderColor: 'black', borderWidth: '1px', background: 'black', borderRadius: '0.25rem', width: '100%'}}/>
        <hr style={{ gridRow: '7 / 8', gridColumn: '1 / -1', borderColor: 'black', borderWidth: '1px', background: 'black', borderRadius: '0.25rem', width: '100%'}}/>

      </main>
    </div>
  );
}
