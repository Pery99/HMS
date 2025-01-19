import React, { useState } from 'react'

const AdminRooms = () => {
  const [rooms] = useState([
    {
      id: 1,
      number: "101",
      type: "Deluxe Suite",
      status: "occupied",
      price: 299,
      maintenance: false
    },
    // Add more sample rooms as needed
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Rooms</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
          Add New Room
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Room {room.number}</h3>
                  <p className="text-gray-600">{room.type}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                  ${room.status === 'occupied' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {room.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-600">Price: ${room.price}/night</p>
                <p className="text-gray-600">
                  Maintenance: {room.maintenance ? 'Required' : 'Not Required'}
                </p>
              </div>

              <div className="mt-6 flex gap-2">
                <button className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-opacity-90">
                  Edit
                </button>
                <button className="flex-1 border border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminRooms
