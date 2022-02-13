import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ScatterChart, CartesianGrid, Scatter, Tooltip, Label } from 'recharts';

export function PingScatter({data, label}) {
    const [timeout, setTimeout] = useState(0)
    const [timeoutTime, setTimeoutTime] = useState(null)

    useEffect(()=> {
        if(data.at(-1) !== undefined){
            if(data.at(-1)['x'] === 0){
                setTimeout(timeout+1)
                setTimeoutTime(new Date().toLocaleString())
            }
        }
    }, [data])

    return (
        <div className="App">
            <h1>{label}</h1>
            <ScatterChart width={1000} height={250} margin={{left:0, right:50, top:20}}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis unit="m" fontSize={15} interval={59} tickFormatter={(e) => e/60} />
                <YAxis dataKey="x" unit="ms" fontSize={15}/>
                <Scatter name={label} data={data} fill="#82ca9d" />
                <Tooltip />
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
                setTimeout(timeout+1)
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

