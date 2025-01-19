import React from 'react';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

const RevenuePage = () => {
  const revenueStats = [
    { period: 'Today', amount: 2850, change: '+12%', trend: 'up' },
    { period: 'This Week', amount: 18650, change: '+8%', trend: 'up' },
    { period: 'This Month', amount: 76500, change: '-3%', trend: 'down' },
    { period: 'This Year', amount: 925000, change: '+15%', trend: 'up' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Revenue Overview</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {revenueStats.map((stat) => (
          <motion.div
            key={stat.period}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600">{stat.period}</p>
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                <CurrencyDollarIcon className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              ${stat.amount.toLocaleString()}
            </p>
            <div className="mt-2 flex items-center">
              {stat.trend === 'up' ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RevenuePage;
