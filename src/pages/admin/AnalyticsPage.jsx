import React from 'react';
import { 
  ArrowTrendingUpIcon,
  UsersIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const AnalyticsPage = () => {
  const stats = [
    { title: 'Total Bookings', value: '1,234', change: '+12.5%', icon: ArrowTrendingUpIcon },
    { title: 'Total Guests', value: '892', change: '+5.2%', icon: UsersIcon },
    { title: 'Room Occupancy', value: '75%', change: '+8.1%', icon: BuildingOfficeIcon },
    { title: 'Revenue', value: '$52,420', change: '+15.3%', icon: CurrencyDollarIcon },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;
