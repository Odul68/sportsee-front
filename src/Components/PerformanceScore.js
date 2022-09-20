import { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * RadialBarchart showing the score in %
 * of the part already achieved of the goal
 */

export default function PerformanceScore() {
  const [score, setScore] = useState([]);

  const handleScoreData = async () => {
    const promise = await fetch("http://localhost:3000/user/18");
    const res = await promise.json();

    setScore(res.data);
  };

  useEffect(() => {
    handleScoreData();
  }, []);

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

  let newData = [
    {
      newTodayScore: 100,
      fill: "#FFFFFF",
    },
    {
      newTodayScore: score?.score * 100,
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
          innerRadius={80}
          outerRadius={80}
          data={newData}
        >
          <RadialBar cornerRadius="100%" dataKey="newTodayScore" />
          <Legend content={<CustomLegendScore />} verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
