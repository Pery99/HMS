import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    {
      title: 'Bookings',
      mainStat: '156',
      subTitle: 'Today',
      icon: CalendarIcon,
      details: [
        { label: 'Pending', value: '23', color: 'text-yellow-600 bg-yellow-50' },
        { label: 'Completed', value: '133', color: 'text-green-600 bg-green-50' }
      ],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Revenue',
      mainStat: '$76,500',
      subTitle: 'This Month',
      icon: CurrencyDollarIcon,
      details: [
        { label: 'Today', value: '$2,850', color: 'text-green-600' },
        { label: 'This Week', value: '$18,650', color: 'text-green-600' }
      ],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Rooms',
      mainStat: '50',
      subTitle: 'Live Status',
      icon: BuildingOfficeIcon,
      details: [
        { label: 'Available', value: '8', color: 'text-blue-600 bg-blue-50' },
        { label: 'Occupied', value: '42', color: 'text-orange-600 bg-orange-50' }
      ],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Guests',
      mainStat: '86',
      subTitle: 'Today',
      icon: UsersIcon,
      details: [
        { label: 'Check-in', value: '+12', color: 'text-green-600', icon: ArrowTrendingUpIcon },
        { label: 'Check-out', value: '-8', color: 'text-red-600', icon: ArrowTrendingDownIcon }
      ],
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">{stat.subTitle}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.mainStat}</h3>
                  <p className="text-sm font-medium text-gray-600 mt-1">{stat.title}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>

              {/* Details */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center space-x-4">
                  {stat.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      {detail.icon && (
                        <detail.icon className={`w-4 h-4 ${detail.color}`} />
                      )}
                      <div>
                        <span className={`text-sm font-semibold ${detail.color}`}>
                          {detail.value}
                        </span>
                        <p className="text-xs text-gray-500">{detail.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional dashboard content can go here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          {/* Add recent activity content */}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          {/* Add quick actions content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
