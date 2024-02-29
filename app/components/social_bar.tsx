import React from 'react';
import Icon from './social_icon'; // assuming Icon component is in the same directory

const clientEmail = "gotoceleste@gmail.com";
const subject = "Ur mom";
const body = "Ur mom gae";

const mailtoLink = `mailto:${clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const Component: React.FC = () => {
  return (
    <div style={{ width: '300px' }}>
      {/* Container for icons with flexbox */}
      <div className="flex items-center">
      <Icon thumbnailPath='/linkedin.png' link='https://www.linkedin.com/in/celeste-bernstein-1756a71b0/'/>
      <Icon thumbnailPath='/email.png' link={mailtoLink} />
      <Icon thumbnailPath='/linkedin.png' link='https://www.linkedin.com' />
      </div>
    </div>
  );
};

export default Component;
