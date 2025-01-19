import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  CalendarIcon, 
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: HomeIcon, label: 'Dashboard', path: '/admin', exact: true },
  { icon: BuildingOfficeIcon, label: 'Rooms', path: '/admin/rooms' },
  { icon: CalendarIcon, label: 'Bookings', path: '/admin/bookings' },
  { icon: UsersIcon, label: 'Guests', path: '/admin/guests' },
  { icon: ChartBarIcon, label: 'Analytics', path: '/admin/analytics' },
  { icon: CurrencyDollarIcon, label: 'Revenue', path: '/admin/revenue' },
  { icon: Cog6ToothIcon, label: 'Settings', path: '/admin/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-6 border-b border-gray-200">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BuildingOfficeIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            Hotel Admin
          </h1>
        </motion.div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={
              isActiveRoute(item.path, item.exact)
                ? 'flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-600'
                : 'flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
            }
          >
            <motion.div
              className="flex items-center gap-3 w-full"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className={`w-5 h-5 ${
                isActiveRoute(item.path, item.exact) ? 'text-indigo-600' : 'text-gray-400'
              }`} />
              <span>{item.label}</span>
            </motion.div>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 flex-shrink-0 flex items-center justify-center">
            <span className="text-white font-medium">A</span>
          </div>
          <div className="min-w-0">
            <p className="font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-sm text-gray-500 truncate">admin@hotel.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
