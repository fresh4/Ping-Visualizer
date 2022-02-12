import './App.css';
import { PingScatter } from './Components/ChartDiv';
import data102 from './pyscripts/102.json'
import data104 from './pyscripts/104.json'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PingScatter data={data102} label="102"/>
        <PingScatter data={data104} label="104"/>
      </header>
    </div>
  );
}

export default App;
