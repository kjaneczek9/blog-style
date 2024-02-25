"use client"
import React from 'react';
import Icon from './social_icon'; // assuming Icon component is in the same directory

const Component: React.FC = () => {
  return (
    <div style={{ width: '300px' }}>
      {/* Container for icons with flexbox */}
      <div className="flex items-center">
      <Icon thumbnailPath='/linkedin.png' link='https://www.linkedin.com'/>
      <Icon thumbnailPath='/email.png' link='https://www.google.com' />
      <Icon thumbnailPath='/linkedin.png' link='https://www.linkedin.com' />
      </div>
    </div>
  );
};

export default Component;
