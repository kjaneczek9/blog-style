import React from 'react';

interface ComponentProps {
  thumbnailPath: string;
  link: string;
}

const Component: React.FC<ComponentProps> = ({ thumbnailPath, link }) => {
  return (
    <div>
      <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
        {/* Anchor tag for clickable effect */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {/* Thumbnail image */}
          <img src={thumbnailPath} alt={link} style={{ maxWidth: '5%', height: 'auto' }} className="border-1 border-gray-300"/>
        </a>
      </div>
    </div>
  );
};

export default Component;
