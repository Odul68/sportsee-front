import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

/**
 * Adds newDay data with the initial of every day of the week
 */
const formatData = (data) => {
  const object = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const res = data.map((item) => ({ ...item, newDay: object[item.day] }));
  return res;
};

/**
 * LineChart showing the average duration of each
 * session per day and its progress in a week
 */

export default function SessionsDuration() {
  const [session, setSession] = useState(null);

  const handleSessionData = async () => {
    const promise = await fetch(
      "http://localhost:3000/user/18/average-sessions"
    );
    const res = await promise.json();
    const formatedData = formatData(res.data.sessions);
    setSession({ ...res.data.sessions, sessions: formatedData });
  };

  useEffect(() => {
    handleSessionData();
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltipSession">
          <p className="tooltipSessionText">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="sessionGraph">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer
        className="sessionResponsiveContainer"
        width="100%"
        height="100%"
      >
        <LineChart
          width="50%"
          height="50%"
          data={session?.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          /**
           * Changes the background of the div to a darker red when
           * the mouse is over the chart line
           */
          onMouseMove={(e) => {
            const div = document.getElementsByClassName(
              "sessionResponsiveContainer"
            )[0];
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth;
              const mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
        >
          <XAxis
            dataKey="newDay"
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            padding={{ top: 50 }}
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
            hide
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
            legendType="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
