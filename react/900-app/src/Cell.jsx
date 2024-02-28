export default function Cell ({ state, updateState, row }) {

  const onChange = (e) => {
    const { value } = e.target;
    updateState('nutrient', row, value);
  };

  return (
    <div style={{
        border: 'solid black 1px',
        width: 'fit-content',
        padding: '0.25rem 0.5rem'
      }}
    >
      <input type="text" value={state.nutrient[row]} onChange={onChange} />
    </div>
  )
}