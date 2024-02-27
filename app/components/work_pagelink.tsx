import React from 'react';

interface ComponentProps {
  thumbnailPath: string;
  title: string;
  pageLink: string;
}

const Component: React.FC<ComponentProps> = ({ thumbnailPath, title, pageLink }) => {
  return (
    <div className="w-full max-w-sm m-5 relative">
      {/* Anchor tag for clickable effect */}
      <a href={pageLink} rel="noopener noreferrer" className="flex inset-0 flex items-center justify-center">
        {/* Thumbnail image with title */}
        <div className="relative" style={{ width: '700px', height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
          <img src={thumbnailPath} alt="Thumbnail" className="rounded-lg object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Circular overlay */}
            <div className="absolute w-40 h-40 bg-pink opacity-60 rounded-full"></div>
            <h2 className="text-white text-xl font-bold z-10 pointer-events-none">{title}</h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Component;

