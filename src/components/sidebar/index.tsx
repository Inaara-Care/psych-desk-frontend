'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdAnalytics,
  MdGroup,
  MdOutlineCalendarMonth,
  MdOutlineCalendarViewDay,
  MdOutlineContactPage,
  MdOutlineDescription,
  MdOutlineInbox,
  MdOutlineReceipt,
  MdOutlineSettings,
} from 'react-icons/md';
import { PiLinkBold } from 'react-icons/pi';
import { useSidebarContext } from '@/context/Sidebar.context';

const menuItems = [
  { icon: MdAnalytics, label: 'Dashboard', redirectTo: '/', },
  { icon: PiLinkBold, label: 'Event types', redirectTo: '/event-types' },
  { icon: MdOutlineCalendarViewDay, label: 'Bookings', redirectTo: '/bookings' },
  { icon: MdOutlineCalendarMonth, label: 'Calendar', redirectTo: '/calendar' },
  { icon: MdOutlineInbox, label: 'Inbox', redirectTo: '/inbox' },
  { icon: MdOutlineReceipt, label: 'Billings', redirectTo: '/billings' },
  { icon: MdGroup, label: 'Clients', redirectTo: '/clients' },
  { icon: MdOutlineContactPage, label: 'Contacts', redirectTo: '/contacts' },
  { icon: MdOutlineDescription, label: 'Resources', redirectTo: '/resources' },
  { icon: MdOutlineSettings, label: 'Settings', redirectTo: '/settings' },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { activeTab, setActiveTab } = useSidebarContext();
  
  const isActive = (path: string) => {
    if (path.replace('/', '') === activeTab) return true;
    const endpoint = pathname.split('/')[2];
    return `/${endpoint}` === path;
  };

  return (
    <div className="w-60 min-h-screen bg-white rounded-lg">
      <nav className="px-2 py-3">
        <ul className="">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-3">
              <Link
                href={`/dashboard/${item.redirectTo}`}
                className={`text-foreground flex items-center gap-4 px-5 py-2.5 transition-colors duration-200 rounded-sm ${isActive(item?.redirectTo) && 'bg-tertiary-sky-blue text-primary'}`}
                onClick={() => setActiveTab(item.redirectTo.replace('/', ''))}
              >
                <item.icon className={`w-5 h-5 `} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
