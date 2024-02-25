"use client"
import React from 'react';
import GalleryImage from './gallery_index';

interface ComponentProps {
  images: { thumbnailPath: string; link: string; }[];
}

const Component: React.FC<ComponentProps> = ({ images }) => {
  return (
    <section>
      <div className='flex justify-center'>
        {images.map((image, index) => (
          <GalleryImage key={index} thumbnailPath={image.thumbnailPath} link={image.link} />
        ))}
      </div>
    </section>
  );
}

export default Component;
