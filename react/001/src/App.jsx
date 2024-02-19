export default function App() {
  
  const onClick = () => {
    alert('you clicked me!');
  };

  return (
    <>
      <button onClick={() => onClick()}>Click Me</button>
    </>
  )
}
