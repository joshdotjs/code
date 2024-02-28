export default function Cell ({ state, updateState, type, row, col }) {

  // ============================================

  const onChange = (e) => {
    const { value } = e.target;
    console.log('value: ', value);
    updateState(type, row, 0, value);
  };

  // ============================================

  return (
    <div style={{
        border: 'solid black 1px',
        width: 'fit-content',
        padding: '0.25rem 0.5rem'
      }}
    >
      <input type="text" value={state[type][0][row]} onChange={onChange} />
    </div>
  );
}