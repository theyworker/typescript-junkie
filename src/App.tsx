import './App.css';

const App  = () => {
  let firstValue: [string, number]  = ['hi', 2]

  enum Codes  {first = 1, second = 2}

  let secondValue : Codes = Codes.first

  const warning =(): void => {
    console.log('warning');
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
        The value {secondValue} is of {typeof secondValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
