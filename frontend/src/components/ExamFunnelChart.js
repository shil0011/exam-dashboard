import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-gray-300 font-bold mb-2">{`${label} Department`}</p>
        <div className="space-y-1">
          <p className="text-cyan-400 flex items-center justify-between gap-4">
            <span>Admitted:</span>
            <span className="font-mono">{payload[0].value}</span>
          </p>
          <p className="text-indigo-400 flex items-center justify-between gap-4">
            <span>Registered:</span>
            <span className="font-mono">{payload[1].value}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const ExamFunnelChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/exam/1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-[450px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barGap={12}
        >
          <defs>
            <linearGradient id="colorV1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0891b2" stopOpacity={0.8}/>
            </linearGradient>
            <linearGradient id="colorV2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
          <XAxis 
            dataKey="group" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 13 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Legend 
            verticalAlign="top" 
            align="right" 
            iconType="circle"
            wrapperStyle={{ paddingBottom: '30px', fontSize: '14px', color: '#94a3b8' }}
          />
          <Bar 
            dataKey="v1" 
            name="Admitted" 
            fill="url(#colorV1)" 
            radius={[6, 6, 0, 0]} 
            barSize={45}
          />
          <Bar 
            dataKey="v2" 
            name="Registered" 
            fill="url(#colorV2)" 
            radius={[6, 6, 0, 0]} 
            barSize={45}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExamFunnelChart;