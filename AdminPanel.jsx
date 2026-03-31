import React, { useState } from 'react';

const AdminPanel = ({ buses, onUpdateBus, onDeleteBus, onAddBus }) => {
  const [newBusId, setNewBusId] = useState("");

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border">
      <h2 className="text-lg font-bold mb-4">Admin: Manage Fleet</h2>
      
      {/* Add Bus Section */}
      <div className="flex gap-2 mb-6">
        <input 
          className="border p-2 rounded-lg flex-1" 
          placeholder="Enter Bus ID (e.g. SRU-005)"
          value={newBusId}
          onChange={(e) => setNewBusId(e.target.value)}
        />
        <button 
          onClick={() => { onAddBus(newBusId); setNewBusId(""); }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >+ Add</button>
      </div>

      {/* List with Controls */}
      <div className="space-y-4">
        {buses.map(bus => (
          <div key={bus.id} className="flex justify-between items-center p-3 border rounded-xl">
            <div>
              <p className="font-bold">{bus.id}</p>
              <p className="text-xs text-gray-500 uppercase">{bus.status}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => onUpdateBus(bus.id, 'active')}
                className="text-xs bg-green-500 text-white p-2 rounded">Active</button>
              <button 
                onClick={() => onUpdateBus(bus.id, 'maintenance')}
                className="text-xs bg-orange-500 text-white p-2 rounded">Service</button>
              <button 
                onClick={() => onDeleteBus(bus.id)}
                className="text-xs bg-red-500 text-white p-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;