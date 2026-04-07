import React from 'react';
import ExamFunnelChart from './components/ExamFunnelChart';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Students Admitted vs Registered</h1>
        <ExamFunnelChart />
      </div>
    </div>
  );
}

export default App;