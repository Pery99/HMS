import React from 'react'

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Bookings Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 text-sm font-medium">Bookings</h3>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Today
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.bookings.total}</p>
            <p className="text-gray-600 text-sm">Total Bookings</p>
          </div>
          <div className="text-right">
            <p className="text-green-500 text-sm">{stats.bookings.pending} pending</p>
            <p className="text-blue-500 text-sm">{stats.bookings.completed} completed</p>
          </div>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            This Month
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">${stats.revenue.thisMonth}</p>
            <p className="text-gray-600 text-sm">Total Revenue</p>
          </div>
          <div className="text-right">
            <p className="text-green-500 text-sm">Today: ${stats.revenue.today}</p>
            <p className="text-blue-500 text-sm">Week: ${stats.revenue.thisWeek}</p>
          </div>
        </div>
      </div>

      {/* Room Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 text-sm font-medium">Rooms</h3>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Live Status
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.rooms.total}</p>
            <p className="text-gray-600 text-sm">Total Rooms</p>
          </div>
          <div className="text-right">
            <p className="text-green-500 text-sm">{stats.rooms.available} available</p>
            <p className="text-red-500 text-sm">{stats.rooms.occupied} occupied</p>
          </div>
        </div>
      </div>

      {/* Guest Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 text-sm font-medium">Guests</h3>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Today
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">{stats.guests.currentlyStaying}</p>
            <p className="text-gray-600 text-sm">Current Guests</p>
          </div>
          <div className="text-right">
            <p className="text-green-500 text-sm">+{stats.guests.checkingInToday} Check-in</p>
            <p className="text-blue-500 text-sm">-{stats.guests.checkingOutToday} Check-out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
