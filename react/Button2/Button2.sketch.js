import React from 'react';
import Button2 from './Button2';

export const symbols = {
  'Primary button red (default button)': (
    <Button2 kind={'primary'} color={'red'}>
      Button
    </Button2>
  ),
  'Secondary button red reversed': (
    <Button2 kind={'secondary'} color={'red'} reverseColor={true}>
      Button
    </Button2>
  ),
  'Primary button grey': (
    <Button2 kind={'primary'} color={'grey'}>
      Button
    </Button2>
  ),
  'Primary button red reversed': (
    <Button2 kind={'primary'} color={'red'} reverseColor={true}>
      Button
    </Button2>
  ),
  'Primary button grey reversed': (
    <Button2 kind={'primary'} color={'grey'} reverseColor={true}>
      Button
    </Button2>
  ),
  'Secondary button red': (
    <Button2 kind={'secondary'} color={'red'}>
      Button
    </Button2>
  ),
  'Secondary button grey': (
    <Button2 kind={'secondary'} color={'grey'}>
      Button
    </Button2>
  ),
  'Secondary button grey reversed': (
    <Button2 kind={'secondary'} color={'grey'} reverseColor={true}>
      Button
    </Button2>
  )
};
