'use client';

import React from 'react';
import { Table } from '@/components/core/table';
import { format } from 'date-fns';

// Define the session data type
interface SessionData {
  id: string;
  duration: string;
  date: Date;
  clientName: string;
  platform: string;
  status: 'Paid' | 'Unpaid' | 'Cancelled';
  assessment: boolean;
}

const SessionDetailsPage = () => {
  // Dummy data for the sessions
  const sessions: SessionData[] = [
    {
      id: 'S-001',
      duration: '45 min',
      date: new Date(2023, 5, 15, 10, 30),
      clientName: 'John Doe',
      platform: 'In-person',
      status: 'Paid',
      assessment: true,
    },
    {
      id: 'S-002',
      duration: '60 min',
      date: new Date(2023, 5, 16, 14, 0),
      clientName: 'Jane Smith',
      platform: 'Video call',
      status: 'Unpaid',
      assessment: false,
    },
    {
      id: 'S-003',
      duration: '30 min',
      date: new Date(2023, 5, 17, 9, 0),
      clientName: 'Michael Johnson',
      platform: 'Phone call',
      status: 'Cancelled',
      assessment: false,
    },
    {
      id: 'S-004',
      duration: '45 min',
      date: new Date(2023, 5, 18, 11, 15),
      clientName: 'Emily Williams',
      platform: 'In-person',
      status: 'Paid',
      assessment: true,
    },
    {
      id: 'S-005',
      duration: '60 min',
      date: new Date(2023, 5, 19, 16, 30),
      clientName: 'Robert Brown',
      platform: 'Video call',
      status: 'Paid',
      assessment: true,
    },
  ];

  // Define the columns for the table
  const columns = [
    {
      header: 'ID',
      accessor: 'id',
    },
    {
      header: 'Duration',
      accessor: (row: SessionData) => (
        <div>
          <div>{row.duration}</div>
          <div className="text-xs text-gray-500">{format(row.date, 'MMM dd, yyyy - h:mm a')}</div>
        </div>
      ),
    },
    {
      header: 'Client name',
      accessor: 'clientName',
    },
    {
      header: 'Platform',
      accessor: 'platform',
    },
    {
      header: 'Status',
      accessor: (row: SessionData) => {
        const statusColors = {
          Paid: 'bg-green-100 text-green-800',
          Unpaid: 'bg-yellow-100 text-yellow-800',
          Cancelled: 'bg-red-100 text-red-800',
        };
        
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[row.status]}`}>
            {row.status}
          </span>
        );
      },
    },
    {
      header: 'Assessment',
      accessor: (row: SessionData) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.assessment ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
          {row.assessment ? 'Yes' : 'No'}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Session Details</h2>
        <p className="text-gray-500 mt-1">View and manage all your therapy sessions</p>
      </div>
      
      <Table 
        columns={columns} 
        data={sessions} 
        selectable={true}
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
    </div>
  );
};

export default SessionDetailsPage;