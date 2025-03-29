import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <header className="h-15 bg-white rounded-sm mb-2">
      <div className="flex items-center justify-between h-full px-4">
        {/* <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-blue-600">Psych Desk</h1>
        </div> */}
         <div className="p-4 mb-2">
        <h1 className="text-4xl font-medium text-primary">Psych Desk</h1>
      </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <Image
              src="/assets/profile.avif"
              alt="Profile"
              width={36}
              height={32}
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