import React from 'react';

const BusCard = ({ bus }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-600',
    maintenance: 'bg-orange-100 text-orange-600',
    inactive: 'bg-gray-100 text-gray-600'
  };

  return (
    <div className="p-4 border rounded-2xl bg-white shadow-sm mb-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div className="p-2 bg-green-50 rounded-lg">🚌</div>
          <div>
            <h3 className="font-bold text-gray-800">{bus.id}</h3>
            <p className="text-xs text-gray-500">{bus.driver}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusColors[bus.status]}`}>
          {bus.status}
        </span>
      </div>

      <div className="bg-blue-50 p-3 rounded-xl mb-3 flex items-center gap-2">
        <span className="text-blue-500">📍</span>
        <p className="text-xs font-medium text-blue-800">{bus.route}</p>
      </div>

      <div className="flex justify-between items-center text-xs">
        <p className="text-gray-500 italic">Next stop: <span className="font-bold not-italic">{bus.nextStop}</span></p>
        <p className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-bold">{bus.eta}</p>
      </div>
    </div>
  );
};

export default BusCard;