import React, { useState } from "react";
import {
  UserPlusIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const GuestsPage = () => {
  const [guests] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      status: "Checked In",
      room: "101",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      status: "Reserved",
      room: "205",
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Guest Management</h1>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700"
        >
          <UserPlusIcon className="w-5 h-5" />
          <span>Add New Guest</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Search and filter section */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 min-w-0">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search guests..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 shrink-0">
            <FunnelIcon className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Responsive Table with Cards on Mobile */}
        <div className="block w-full">
          {/* Desktop Table - Hidden on Mobile */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4 min-w-[120px]">Guest Name</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4 min-w-[150px]">Email</th>
                  <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">Phone</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">Status</th>
                  <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">Room</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {guests.map((guest) => (
                  <tr key={guest.id} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{guest.name}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-[200px]">{guest.email}</td>
                    <td className="hidden sm:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">{guest.phone}</td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        guest.status === 'Checked In' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {guest.status}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">{guest.room}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-indigo-600">
                      <button className="hover:text-indigo-900">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - Hidden on Desktop */}
          <div className="md:hidden">
            {guests.map((guest) => (
              <div key={guest.id} className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{guest.name}</h3>
                    <p className="text-sm text-gray-500">{guest.email}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    guest.status === 'Checked In' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {guest.status}
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> {guest.phone}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Room:</span> {guest.room}
                  </p>
                  <div className="pt-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsPage;
