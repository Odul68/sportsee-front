import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Legind showing the score in number with a text
 * @param {array} payload - datas
 * @returns Legent with the data in percentage
 */

function CustomLegendScore(payload) {
  return (
    <div className="legendScore">
      <p className="legendScoreNumber">
        {payload?.payload[1]?.payload.newTodayScore}%
      </p>
      <p className="legendScoreText">de votre</p>
      <p className="legendScoreText">objectif</p>
    </div>
  );
}

/**
 * RadialBarchart showing the score in % of the part already achieved of the goal
 * @component
 * @param {number} userMain - datas from the main user info in "score"
 * @returns component Recharts RadialBarChart
 */

export default function PerformanceScore({ userMain }) {
  let newData = [
    {
      newTodayScore: 100,
      fill: "#FFFFFF",
    },
    {
      newTodayScore: userMain * 100,
      fill: "#E60000",
    },
  ];

  return (
    <div className="scoreContainer">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={90}
          endAngle={500}
          barSize={10}
          cx="50%"
          cy="50%"
          innerRadius={window.innerWidth > 1340 ? "75%" : "55%"}
          outerRadius={window.innerWidth > 1340 ? "75%" : "55%"}
          data={newData}
        >
          <RadialBar cornerRadius="100%" dataKey="newTodayScore" />
          <Legend content={<CustomLegendScore />} verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceScore.propTypes = {
  userMain: PropTypes.number.isRequired,
};
