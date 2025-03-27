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

const menuItems = [
  { icon: MdAnalytics, label: 'Dashboard', isActive: true },
  { icon: PiLinkBold, label: 'Event types' },
  { icon: MdOutlineCalendarViewDay, label: 'Bookings' },
  { icon: MdOutlineCalendarMonth, label: 'Calendar' },
  { icon: MdOutlineInbox, label: 'Inbox' },
  { icon: MdOutlineReceipt, label: 'Billings' },
  { icon: MdGroup, label: 'Clients' },
  { icon: MdOutlineContactPage, label: 'Contacts' },
  { icon: MdOutlineDescription, label: 'Resources' },
  { icon: MdOutlineSettings, label: 'Settings' },
];

export const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-white rounded-lg">
      <nav className="px-2 py-3">
        <ul className="">
          {menuItems.map((item, index) => (
            <li key={index} className='mb-3'>
              <a
                href="#"
                className={`text-foreground flex items-center gap-4 px-5 py-2.5 transition-colors duration-200 rounded-sm ${item?.isActive && 'bg-tertiary-sky-blue text-primary'}`}
              >
                <item.icon className={`w-5 h-5 `} />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
