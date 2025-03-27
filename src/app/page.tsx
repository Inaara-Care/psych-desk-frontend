'use client';
import { Checkbox } from '@/components';
import React from 'react';
const page = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      Landing page
      <Checkbox  label={'hi'} checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
};

export default page;
