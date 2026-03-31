import React from 'react';

const Sidebar = () => (
  <div className="w-64 h-screen bg-white border-r p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-10">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">🚌</div>
        <h1 className="text-xl font-bold">SR University</h1>
      </div>
      
      <p className="text-gray-400 text-xs font-semibold mb-4 tracking-widest">VIEWS</p>
      <nav className="space-y-2">
        <button className="w-full text-left p-3 rounded-xl bg-blue-600 text-white font-medium flex items-center gap-3">🗺️ Live Map</button>
        <button className="w-full text-left p-3 rounded-xl text-gray-600 hover:bg-gray-100 flex items-center gap-3">🚌 Manage Buses</button>
        <button className="w-full text-left p-3 rounded-xl text-gray-600 hover:bg-gray-100 flex items-center gap-3">🛤️ Manage Routes</button>
      </nav>
    </div>
    
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">AD</div>
      <div>
        <p className="text-sm font-bold">Admin User</p>
        <p className="text-xs text-gray-500 text-ellipsis overflow-hidden">admin@college.edu</p>
      </div>
    </div>
  </div>
);

export default Sidebar;