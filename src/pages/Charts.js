import { RenderLineChart, RenderAreaChart, RenderBarChart, RenderPieChart, RenderScatterChart} from "../components/charts/RenderChart";
const dataSample = [
  { name: "Page A", value: 400 },
  { name: "Page B", value: 300 },
  { name: "Page C", value: 300 },
  { name: "Page D", value: 200 },
  { name: "Page E", value: 270 },
  { name: "Page F", value: 200 },
];
const data01 = [
  {
    "name": 100,
    "value": 200
  },
  {
    "name": 120,
    "value": 100
  },
  {
    "name": 170,
    "value": 300
  },
  {
    "name": 140,
    "value": 250
  },
  {
    "name": 150,
    "value": 400
  },
  {
    "name": 110,
    "value": 280
  }
];

const Charts = ({data=dataSample}) => {
  const uniVariate = data && data[0] && data[0].name && typeof data[0].name === "string";
  const biVariate = !uniVariate;

  return(
    <>
        {uniVariate && 
          <>
            <RenderLineChart data={data} x_axis={"name"} y_axis={"value"} ></RenderLineChart>
            <RenderAreaChart data={data} x_axis={"name"} y_axis={"value"} ></RenderAreaChart>
            <RenderBarChart data={data} x_axis={"name"} y_axis={"value"} ></RenderBarChart>
            <RenderPieChart data={data} ></RenderPieChart>
          </>
        }
        {biVariate && 
          <RenderScatterChart data={data01} ></RenderScatterChart>
        }
    </>
  );
}

export default Charts;
