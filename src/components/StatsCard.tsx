'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownRight, Clipboard, Calendar, IndianRupee, Users, ArrowRight } from 'lucide-react';

interface TrendProps {
  value: string;
  label: string;
  isPositive: boolean;
}

interface StatsCardProps {
  title: string;
  value: string;
  trend: TrendProps;
  icon: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, icon }) => {
  const IconComponent = () => {
    switch (icon) {
      case 'clipboard':
        return <Clipboard className="w-5 h-5 text-blue-600" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case 'rupee':
        return <IndianRupee className="w-5 h-5 text-blue-600" />;
      case 'users':
        return <Users className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">{title}</span>
        <div className="p-2 bg-blue-50 rounded-lg">
          <IconComponent />
        </div>
      </div>
      <div className="mb-3">
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
      </div>
      <div className="flex items-center gap-2">
        {trend.isPositive ? (
          <ArrowUpRight className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownRight className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend.value}% {trend.label}
        </span>
      </div>
      <button className="w-full mt-4 py-2 flex items-center justify-center text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
        <span>View details</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};