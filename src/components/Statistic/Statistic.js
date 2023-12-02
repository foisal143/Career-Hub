import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const Statistic = () => {
  const data = [
    {
      name: 'a1',
      marks: 50,
    },
    {
      name: 'a2',
      marks: 60,
    },
    {
      name: 'a3',
      marks: 55,
    },
    {
      name: 'a4',
      marks: 58,
    },
    {
      name: 'a5',
      marks: 60,
    },
    {
      name: 'a6',
      marks: 50,
    },
    {
      name: 'a7',
      marks: 60,
    },
  ];
  return (
    <div className="md:w-1/2 mx-auto h-[calc(100vh-160px)] flex justify-center items-center">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistic;
