import './App.css';

function App() {
  const name = 'React';
  const list = ['우유', '딸기', '바나나', '사과'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hellow2</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1674641672189-f3de2f2cfc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='photo'
      />
    </>
  );
}

export default App;
