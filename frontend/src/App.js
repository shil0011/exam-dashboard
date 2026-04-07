import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExamFunnelChart from './components/ExamFunnelChart';

function App() {
  const [stats, setStats] = useState({ totalAdmitted: 0, totalRegistered: 0, groups: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/exam/1');
        const data = response.data;
        const totalAdmitted = data.reduce((sum, item) => sum + item.v1, 0);
        const totalRegistered = data.reduce((sum, item) => sum + item.v2, 0);
        setStats({
          totalAdmitted,
          totalRegistered,
          groups: data.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Admission Analytics
            </h1>
            <p className="text-gray-400 mt-2 text-lg">Real-time examination enrollment monitoring</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium border border-green-500/20 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Live System
            </span>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Total Admitted" 
            value={stats.totalAdmitted} 
            trend="+12%" 
            color="from-cyan-500 to-blue-500" 
          />
          <StatCard 
            title="Total Registered" 
            value={stats.totalRegistered} 
            trend="+8%" 
            color="from-indigo-500 to-purple-500" 
          />
          <StatCard 
            title="Active Departments" 
            value={stats.groups} 
            trend="Stable" 
            color="from-emerald-500 to-teal-500" 
          />
        </div>

        {/* Chart Section */}
        <div className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
                Enrollment Distribution
              </h2>
            </div>
            <div className="flex justify-center">
              <ExamFunnelChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, trend, color }) => (
  <div className="bg-[#1e293b]/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
      <span className="text-gray-400 font-medium text-sm">{title}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full ${trend.includes('+') ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
        {trend}
      </span>
    </div>
    <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {value.toLocaleString()}
    </div>
    <div className="mt-4 w-full bg-gray-700/50 h-1 rounded-full overflow-hidden">
      <div className={`h-full bg-gradient-to-r ${color} w-2/3`}></div>
    </div>
  </div>
);

export default App;