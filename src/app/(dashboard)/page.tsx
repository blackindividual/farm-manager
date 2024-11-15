import React from 'react';

// Start of Selection
export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Batches</h3>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Birds</h3>
          <p className="text-3xl font-bold">1,500</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">Average FCR</h3>
          <p className="text-3xl font-bold">1.75</p>
        </div>
      </div>

      {/* Recent Activity */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* Add activity list here */}
      </section>
    </div>
  )
}
