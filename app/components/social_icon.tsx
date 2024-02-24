import React from 'react';

interface ComponentProps {
  thumbnailPath: string;
  link: string;
}

const Component: React.FC<ComponentProps> = ({ thumbnailPath, link }) => {
  return (
    <div>
      <div className="relative w-full aspect-video rounded-t-lg">
        {/* Anchor tag for clickable effect */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {/* Thumbnail image */}
          <img src={thumbnailPath} alt={link} style={{ maxWidth: '20px', maxHeight: '30px' }} className="ml-5"/>
        </a>
      </div>
    </div>
  );
};

export default Component;
