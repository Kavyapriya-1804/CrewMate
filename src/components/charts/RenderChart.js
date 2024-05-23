import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { AreaChart, Area} from "recharts";
import { BarChart, Bar, Rectangle } from "recharts";
import { PieChart, Pie} from "recharts";
import { ScatterChart, Scatter} from "recharts";
import { ResponsiveContainer } from "recharts";

const RenderLineChart = ({data, x_axis="name", y_axis="value", minHeight=400}) => (
  <ResponsiveContainer width="100%" minHeight={minHeight} className="my-4">
    <LineChart data={data}>
      <Line type="monotone" dataKey={y_axis} stroke="#bb14e0" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={x_axis} />
      <YAxis />
      <Tooltip/>
    </LineChart>
  </ResponsiveContainer>
);

const RenderAreaChart = ({data, x_axis="name", y_axis="value", minHeight=400}) => (
  <ResponsiveContainer width="100%" minHeight={minHeight} className="my-4">
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#c9cba3" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#c9cba3" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey={x_axis} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey={y_axis} stroke="#875f9a" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  </ResponsiveContainer>
);

const RenderBarChart = ({data, x_axis="name", y_axis="value", minHeight=400}) => (
  <ResponsiveContainer width="100%" minHeight={minHeight} className="my-4">
    <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={x_axis} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={y_axis} fill="#e0147e" activeBar={<Rectangle fill="#875f9a" stroke="purple" />} />
    </BarChart>
  </ResponsiveContainer>
);

const RenderPieChart = ({data, x_axis="name", y_axis="value", minHeight=400}) => (
  <ResponsiveContainer width="100%" minHeight={minHeight} className="my-4">
    <PieChart>
      <Pie data={data} dataKey={y_axis} nameKey={x_axis} cx="50%" cy="50%" outerRadius={150} fill="#875f9a" label />
      <Tooltip/>
    </PieChart>
  </ResponsiveContainer>
);

const RenderScatterChart = ({data, x_axis="name", y_axis="value", minHeight=400}) => (
  <ResponsiveContainer width="100%" minHeight={minHeight} className="my-4">
    <ScatterChart>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={x_axis} type="number" name="X" />
      <YAxis dataKey={y_axis} type="number" name="Y" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter data={data} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);

export { RenderLineChart, RenderAreaChart, RenderBarChart, RenderPieChart, RenderScatterChart };
