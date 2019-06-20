import React from 'react';
import './App.css';
import Counter from './components/Counter';
// import CounterF from './components/CounterF';

class App extends React.Component {
  returnNumber () {
    return "108";
  }
  render () {
    // const initValue = "108";
    const array = ["Ania", "Jacek", "Marcin"]
    const elements = array.map(element => <Counter initValue={element} />)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Licznik w ReactJS</h1>
        </header>
        {/* <Counter initValue={this.returnNumber()} />
        <CounterF initValue={initValue} /> */}
        <div>{elements}</div>
      </div>
    );
  }
}

export default App;
