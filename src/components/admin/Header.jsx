import React from 'react';
import { 
  Bars3Icon, 
  BellIcon, 
  UserIcon,
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Header = ({ onMenuClick, onLogout, isSidebarOpen, isMobile }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Only show menu button on mobile when sidebar is closed */}
          {isMobile && !isSidebarOpen && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Bars3Icon className="w-6 h-6" />
            </motion.button>
          )}

          <div className="hidden md:flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative p-2 rounded-lg hover:bg-gray-100"
          >
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </motion.button>
          
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:block font-medium">Admin</span>
            </motion.div>
            
            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl border border-gray-100">
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
