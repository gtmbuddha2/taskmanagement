import React from 'react';

export enum headingType {
  information = 'information',
  warning = 'warning',
}

export interface AlertProp {
  type?: headingType;
  heading: string;
  children: React.ReactNode; // both string and JSX elements is accepted.
  closable?: boolean;
  onClose?: () => void;
}
