import PropTypes from "prop-types";
import {
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * Tooltip showing the information from the datas "kg" and "kCal"
 * @param {boolean} active or not
 * @param {array}   payload
 * @returns Active tooltip or null
 */

const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipActivity">
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Barchart showing the daily evolution of the burnt calories
 * and the evolution of the weight
 * @component
 * @param {array} userActivity - array of data with information about each session
 * @returns Recharts BarChart with the evolution for each session
 */

export default function Activity({ userActivity }) {
  return (
    <div className="barchartContainer">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          margin={{ top: 10, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
          className="barchart"
          width="50%"
          height="20%"
          data={userActivity}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis
            dataKey="xaxis"
            tickLine={false}
            axisLine={{ color: (155, 158, 172, 1) }}
            dy={16}
            padding={{ left: -48, right: -48 }}
          />
          <XAxis dataKey="calories" type="number" tickLine={false} />
          <YAxis
            dataKey="kilogram"
            type="number"
            tickLine={false}
            orientation="right"
            axisLine={false}
            domain={["dataMin - 1", "dataMax + 3"]}
            dx={48}
          />
          <YAxis
            dataKey="calories"
            type="number"
            yAxisId="calorie"
            hide={true}
          />
          <Tooltip content={<CustomTooltipActivity />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ marginTop: "-44px" }}
            formatter={(value) => (
              <span className="legendTextColor">{value}</span>
            )}
          />
          <Bar
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
            barSize={7}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
            barSize={7}
            dataKey="calories"
            fill="#E60000"
            yAxisId="calorie"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  userActivity: PropTypes.array.isRequired,
};
