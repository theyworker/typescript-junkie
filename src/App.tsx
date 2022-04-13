
import './App.css';

const App  = () => {
  let firstValue: string = 'Manny'
  return (
    <div className="App">
      <header className="App-header">
        <p>
        The value {firstValue} is of {typeof firstValue} type!
        </p>
       
      </header>
    </div>
  );
}

export default App;
