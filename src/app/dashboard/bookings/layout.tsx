import React, { ReactNode } from 'react';
import { Sidebar } from '@/components/core/sidebar';

const BookingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
};

export default BookingLayout;
