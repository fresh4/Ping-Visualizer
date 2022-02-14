import { useEffect, useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'
import { LineChart, Line, XAxis, YAxis, ScatterChart, CartesianGrid, Scatter, Tooltip } from 'recharts';

export function PingScatter({data, label}) {
    const [timeout, setTimeout] = useState(0)
    const [timeoutTime, setTimeoutTime] = useState(null)

    useEffect(()=> {
        if(data.at(-1) !== undefined){
            if(data.at(-1)['x'] === 0){
                setTimeout(t => t+1)
                setTimeoutTime(new Date().toLocaleString())
            }
        }
    }, [data])

    return (
        <div className="App">
            <h1>{label}</h1>
            <ScatterChart width={1000} height={250} margin={{left:0, right:50, top:20}} data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis unit="m" fontSize={15} interval={299} tickFormatter={(e) => e/60} />
                <YAxis dataKey="x" unit="ms" fontSize={15} />
                <Scatter name={label} data={data} fill="#82ca9d" />
                <Tooltip content={<PointTooltip/>} wrapperStyle={{ width: 200, backgroundColor: 'whitesmoke', color:"#282c34", fontSize:15, borderRadius: 3}}/>
            </ScatterChart>
            <p style={{"fontSize":16}}>Number of failed requests: {timeout} {timeoutTime !== null ? ` || Latest failed request: ${timeoutTime}` : ""} </p>
        </div>
    );
}

export function PingLine({data, label}) {
    const [timeout, setTimeout] = useState(0)
    const [timeoutTime, setTimeoutTime] = useState(null)

    useEffect(()=> {
        if(data.at(-1) !== undefined){
            if(data.at(-1)['x'] === 0){
                setTimeout(t => t+1)
                setTimeoutTime(new Date().toLocaleString())
            }
        }
    }, [data])

    return (
        <div className="App">
            <h1>{label}</h1>
            <LineChart width={1000} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <Line type="monotone" dataKey="x" stroke="#8884d8" animationDuration={500} dot={false} />
                <XAxis unit="m" fontSize={15} interval={59} tickFormatter={(e) => e/60} />
                <YAxis dataKey="x" unit="ms" fontSize={15}/>
            </LineChart>
            <p style={{"fontSize":16}}>Number of failed requests: {timeout} {timeoutTime !== null ? ` || Latest failed request: ${timeoutTime}` : ""} </p>
        </div>
    );
}

function PointTooltip({ payload, label, active }) {
    if(active && payload[0] !== undefined){
        var data = payload[0].payload
        return(
            <div>
                <p>Ping: {data.x}ms</p>
                <p>{data.time}</p>
            </div>
        )
    }
    return null;
}

export function PingScatter2({data, label, options}) {
    return (
        <CanvasJSChart options={{...options, title: {text: `${label} - Timeouts: ${CountLosses(data)}`}, data: [{type: "scatter", dataPoints: data}]}}/>
    )
}

function CountLosses(data) {
    var losses = 0;
    data.forEach(element => {
        if(element.y === 0)
            losses++
    });
    return losses;
}