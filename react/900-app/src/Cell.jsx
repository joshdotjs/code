export default function Cell ({ state, updateState, type, food, idx, children }) {

  // ============================================

  const onChange = (e) => {
    const { value } = e.target;
    updateState(type, food, idx, value);
  };

  // ============================================

  return (
    <div style={{
        // outline: 'solid rgba(0,0,0,0.2) 1px',
        // borderRadius: '0.25rem',
        // padding: '0.25rem 0.5rem',
        textAlign: 'right',
      }}
    >
      { children }
      { !children && <input type="text" value={state[type][food][idx]} onChange={onChange} />  }
    </div>
  );
}