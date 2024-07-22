import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Brush } from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    // ...
];

export default function Graph() {
    return (
        <LineChart width={500} height={300} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <ReferenceLine x="Page A" stroke="red" label="Max PV PAGE" />
            <Brush dataKey='name' height={30} stroke="#8884d8"/>
        </LineChart>
    );
}

