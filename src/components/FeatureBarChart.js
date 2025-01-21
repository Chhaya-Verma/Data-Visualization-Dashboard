
// src/components/FeatureBarChart.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Brush } from "recharts";

const FeatureBarChart = ({ data, xKey, barKeys, onBarClick, selectedBar, onBrushChange }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {barKeys.map((key, index) => (
            <Bar
              key={index}
              dataKey={key}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color for each bar
              onClick={(e) => onBarClick(e, key)} // Handle click on bar for line chart
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {/* Line Chart to display time trend */}
      {selectedBar && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={selectedBar} stroke="#8884d8" />
            <Brush
              dataKey={xKey}
              height={30}
              stroke="#8884d8"
              onChange={onBrushChange}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default FeatureBarChart;
