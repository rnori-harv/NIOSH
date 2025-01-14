{
  /* Main page that displays lab data given a date and a specific HVAC lab*/
}

import * as React from "react";
import { Container } from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import {
  XYPlot,
  XAxis,
  YAxis,
  Hint,
  Crosshair,
  HorizontalGridLines,
  ChartLabel,
  VerticalGridLines,
  LineMarkSeries,
  LineSeries,
  DiscreteColorLegend,
} from "react-vis";
import { UPDATE_OPERATORS } from "@babel/types";

var d1 = new Date(2021, 10, 28);
var d2 = new Date(2021, 10, 30);

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
  result: string;
}

interface PredProps {
  lab: string;
  parameter: string;
  month1: number;
  day1: number;
  month2: number;
  day2: number;
  setback: number;
  model: string;
  outside: string;
}

const defaultPosts: IPost[] = [];

const LabDataCompare: React.FC<PredProps> = (props) => {
  const [tooltip, setTooltip] = useState([]);
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] =
    React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const outsideint = props.outside.split(".")[0];
  var outsidedec = props.outside.split(".")[1];

  if (outsidedec == undefined) {
    outsidedec = "0";
  }

  const url =
    "https://pred-flask-app.herokuapp.com/predictmany4/" +
    props.lab +
    "/" +
    props.parameter +
    "/" +
    props.month1 +
    "/" +
    props.day1 +
    "/" +
    props.month2 +
    "/" +
    props.day2 +
    "/" +
    props.setback +
    "/" +
    outsideint +
    "/" +
    outsidedec +
    "/" +
    props.model;

  console.log(url);

  React.useEffect(() => {
    axios
      .get<IPost[]>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPosts([response.data[0]]);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  function prepareData(posts: IPost[]) {
    if (posts[0] != undefined) {
      const data = posts[0].result;
      var data_graph = [];
      for (let i = 0; i < data.length; i++) {
        // const time = i + parseInt(props.timestep1.toString());
        const month_i = data[i][1].valueOf();
        const day_i = data[i][2].valueOf();
        const hour_i = data[i][3].valueOf();
        const label = month_i + "/" + day_i + " | " + hour_i;
        const point = { x: label, y: data[i][0] };
        data_graph.push(point);
      }
      return data_graph;
    }
  }

  function getTimeString(hour: string) {
    console.log(hour);
    if (parseInt(hour) == 12) {
      return "12PM";
    } else if (parseInt(hour) > 12) {
      return (parseInt(hour) % 12).toString() + "PM";
    } else {
      return parseInt(hour).toString() + "AM";
    }
  }

  return (
    <div className="App">
      <ul className="posts">
        <>
          {tooltip[0] != null ? (
            <>
              <h4>Mouse hovering at:</h4>
              <p>
                x = {tooltip[0]["x"].substring(0, 5)} |{" "}
                {getTimeString(tooltip[0]["x"].substring(6, 10))}
              </p>
              {/* {console.log(tooltip[0]["x"].substring(6, 10))} */}
              <p>y = {tooltip[0]["y"].toString().substring(0, 4)} degrees F</p>
            </>
          ) : null}
        </>
        <XYPlot
          width={1200}
          height={500}
          margin={{ left: 200, bottom: 50, top: 50 }}
          xType="ordinal"
          yDomain={[50, 100]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            title="Date"
            tickFormat={(v) => v.substring(0, 4)}
            tickSize={10}
            tickLabelAngle={-45}
            tickTotal={3}
            style={{
              text: {
                stroke: "none",
                fontSize: 9,
                fontWeight: 400,
              },
            }}
          />
          {/* <YAxis title="Temperature" /> */}
          {props.parameter == "temperature" ? (
            <YAxis title="Temperature (°F)" />
          ) : (
            <YAxis title="Humidity (%)" />
          )}
          {/* <YAxis title="Temperature (°F)" /> */}
          {/* <DiscreteColorLegend items={labLabels} orientation={"horizontal"} /> */}
          {/* {console.log(prepareData(posts))} */}
          <LineMarkSeries
            animation={true}
            curve={"curveMonotoneX"}
            //@ts-ignore
            onNearestX={(d) => setTooltip([d])}
            data={prepareData(posts)}
            color={"#FF6978"}
            //@ts-ignore
            size={2}
            strokeWidth={3}
            strokeStyle={"dashed"}
            opacity={1}
            style={{ fill: "none" }}
          />
          {/* <Crosshair values={tooltip} /> */}
          {/* : [0] {x: '12/8 | 1', y: 70.14023252887971} */}
        </XYPlot>
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
export default LabDataCompare;
