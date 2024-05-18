import { LineChart, Line, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend } from "recharts";
import { AreaChart, Area} from "recharts";
import { PieChart, Pie} from "recharts";
import { ScatterChart, Scatter} from "recharts";

const RenderLineChart = ({data}) => (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip/>
  </LineChart>
);

const RenderAreaChart = ({data}) => (
  <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>
);

const RenderPieChart = ({data01, data02}) => (
  <PieChart width={730} height={250}>
    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    <Tooltip/>
  </PieChart>
);

const RenderScatterChart = ({data01, data02}) => (
  <ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10, }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="x" type="number" name="stature" unit="cm" />
    <YAxis dataKey="y" type="number" name="weight" unit="kg" />
    <ZAxis dataKey="z" type="number" range={[64, 144]} name="score" unit="km" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="A school" data={data01} fill="#8884d8" />
    <Scatter name="B school" data={data02} fill="#82ca9d" />
  </ScatterChart>
);

export { RenderLineChart, RenderAreaChart, RenderPieChart, RenderScatterChart };
