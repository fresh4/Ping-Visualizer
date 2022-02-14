import './App.css';
import { PingScatter, PingScatter2 } from './Components/ChartDiv';
import { CanvasJSChart } from 'canvasjs-react-charts'
import data102 from './pyscripts/102.json'
import data103 from './pyscripts/103.json'
import data104 from './pyscripts/104.json'
import data105 from './pyscripts/105.json'


function App() {
  const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark1",
      axisY: [{maximum: 100}]
      // title: {text: "Data?"}
  }
      // data: [{type: "line", dataPoints: data102}]}
  return (
    <div className="App">
      <header className="App-header">
        <PingScatter2 options={options} data={data102} label="102"/>
        <PingScatter2 options={options} data={data103} label="103"/>
        <PingScatter2 options={options} data={data104} label="104"/>
        <PingScatter2 options={options} data={data105} label="105"/>
        
        {/* <PingScatter data={data102} label="102"/> */}
        {/* <PingScatter data={data104} label="104"/> */}
        {/* <CanvasJSChart options={{...options, title: {text: "102"}, data: [{type: "line", dataPoints: data102}]}}/>
        <CanvasJSChart options={{...options, title: {text: "103"}, data: [{type: "line", dataPoints: data103}]}}/>
        <CanvasJSChart options={{...options, title: {text: "104"}, data: [{type: "line", dataPoints: data104}]}}/>
        <CanvasJSChart options={{...options, title: {text: "105"}, data: [{type: "line", dataPoints: data105}]}}/> */}
      </header>



    </div>
  );
}

export default App;
