import React from 'react';
import { Select } from '@mantine/core';

const DocType = () => {
  return (
    <Select
      label='Document type'
      placeholder='Selecteer één'
      data={[
        { value: 'ID', label: 'ID' },
        { value: 'Paspoort', label: 'Paspoort' },
        { value: 'Rijbewijs', label: 'Rijbewijs' },
        { value: 'Verblijfsvergunning', label: 'Verblijfsvergunning' },
      ]}
    />
  );
};

export default DocType;
