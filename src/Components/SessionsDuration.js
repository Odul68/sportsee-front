import PropTypes from "prop-types";
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
 * @param {object} day
 * @returns string ou null
 */

const formatNameDay = (day) => {
  switch (day) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";

    default:
      return null;
  }
};

/**
 * Tooltip showing the amount of time spend when active
 * @param {boolean} active or not
 * @param {array} payload
 * @returns Active tooltip or null
 */

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

/**
 * LineChart showing the average duration of each session per day and its progress in a week
 * @component
 * @param {Array} userSessions - array giivng data about the time for each day
 * @returns component Recharts LineChart
 */

export default function SessionsDuration({ userSessions }) {
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
          data={userSessions}
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
            dataKey="day"
            tickFormatter={formatNameDay}
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

SessionsDuration.propTypes = {
  userSessions: PropTypes.array.isRequired,
};
