"use client"
import React from 'react';

interface ComponentProps {
  thumbnailPath: string;
  link: string;
}

const Component: React.FC<ComponentProps> = ({ thumbnailPath, link }) => {
  return (
    <div style={{ width: '400px', height: '400px', overflow: 'hidden', borderRadius: '10px', margin: '5px' }}>
        <a href={thumbnailPath} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
            <div style={{ backgroundImage: `url(${thumbnailPath})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
        </a>
    </div>
  );
};

export default Component;