import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="h-15 bg-white rounded-sm mb-2">
      <div className="flex items-center justify-between h-full px-4">
        {/* <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-blue-600">Psych Desk</h1>
        </div> */}
         <div className="p-4 mb-2">
        <h1 className="text-4xl font-medium text-[#1a2bc3]">Psych Desk</h1>
      </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex items-center gap-1 cursor-pointer">
              <div>
                <p className="text-sm font-medium text-gray-700">Ankita Sharma</p>
                <p className="text-xs text-gray-500">Therapist</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};