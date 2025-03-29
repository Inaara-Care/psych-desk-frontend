import React, { ReactNode } from 'react';

const BookingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen">
            {children}
        </div>
    );
};

export default BookingLayout;
