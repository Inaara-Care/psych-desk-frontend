import React, { ReactNode } from 'react';

const CalendarLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen">
            {children}
        </div>
    );
};

export default CalendarLayout;
