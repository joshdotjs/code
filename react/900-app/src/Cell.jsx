export default function Cell ({ state, updateState, type, row }) {

  // ============================================

  const onChange = (e) => {
    const { value } = e.target;
    updateState(type, row, value);
  };

  // ============================================

  return (
    <div style={{
        border: 'solid black 1px',
        width: 'fit-content',
        padding: '0.25rem 0.5rem'
      }}
    >
      <input type="text" value={state[type][row]} onChange={onChange} />
    </div>
  );
}