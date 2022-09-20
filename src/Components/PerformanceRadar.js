import { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/** Adding newKind data with the necessary name for each */
const formatData = (data) => {
  const object = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  const res = data.map((item) => ({ ...item, newKind: object[item.kind] }));
  return res;
};

/**
 * Creating a RadarChart showing progress
 * depending on category
 */

export default function Performance() {
  const [performance, setPerformance] = useState(null);

  const handlePerformanceData = async () => {
    const promise = await fetch("http://localhost:3000/user/18/performance");
    const res = await promise.json();
    const formatedData = formatData(res.data.data);
    setPerformance({ ...res.data, data: formatedData });
  };

  useEffect(() => {
    handlePerformanceData();
  }, []);

  if (!performance) {
    return <div>loading...</div>;
  }

  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={75} data={performance?.data}>
          <PolarGrid />
          <PolarAngleAxis
            className="radarAttribute"
            dataKey="newKind"
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
