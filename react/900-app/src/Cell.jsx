export default function Cell ({ state, updateState, type, food, idx }) {

  // ============================================

  const onChange = (e) => {
    const { value } = e.target;
    updateState(type, food, idx, value);
  };

  // ============================================

  return (
    <div style={{
        border: 'solid black 1px',
        width: 'fit-content',
        padding: '0.25rem 0.5rem'
      }}
    >
      <input type="text" value={state[type][food][idx]} onChange={onChange} />
    </div>
  );
}