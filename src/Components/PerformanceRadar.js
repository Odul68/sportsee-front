import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Adding newKind data with the necessary name for each
 * @param {object} kind
 * @returns string with the new kind or null
 *
 */
const formatDataName = (kind) => {
  switch (kind) {
    case 1:
      return "Cardio";
    case 2:
      return "Énergie";
    case 3:
      return "Endurance";
    case 4:
      return "Force";
    case 5:
      return "Vitesse";
    case 6:
      return "Intensité";
    default:
      return null;
  }
};

/**
 * Creating a RadarChart showing progress depending on category
 * @component
 * @param {aray} userPerformance - array with datas from the performance part
 * @returns component Recharts RadarChart with 6 kinds
 */

export default function Performance({ userPerformance }) {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={52} data={userPerformance}>
          <PolarGrid />
          <PolarAngleAxis
            className="radarAttribute"
            dataKey="kind"
            tickFormatter={formatDataName}
            stroke="#FFFFFF"
            fontSize={14}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.7}
            legendType="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Performance.propTypes = {
  userPerformance: PropTypes.array.isRequired,
};
