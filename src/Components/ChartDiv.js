import { LineChart, Line, XAxis, YAxis, ScatterChart, CartesianGrid, Scatter, Tooltip, Label } from 'recharts';

export function PingScatter({data, label}) {
    return (
        <div className="App">
            <ScatterChart width={1000} height={250} margin={{left:50, right:20}}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis unit="m" fontSize={15} interval={59} tickFormatter={(e) => e/60} />
                <YAxis dataKey="x" unit="ms" fontSize={15}/>
                <Scatter name={label} data={data} fill="#82ca9d" />
                <Tooltip />
            </ScatterChart>
            <h1>{label}</h1>
        </div>
    );
}

export function PingLine({data, label}) {
    return (
        <div className="App">
            <LineChart width={1000} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <Line type="monotone" dataKey="x" stroke="#8884d8" animationDuration={500} dot={false} />
                <XAxis unit="m" fontSize={15} interval={59} tickFormatter={(e) => e/60} />
                <YAxis dataKey="x" unit="ms" fontSize={15}/>
            </LineChart>
            <h1>{label}</h1>
        </div>
    );
}

