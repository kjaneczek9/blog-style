import { useState, useEffect } from 'react';
import Link from 'next/link';
import GalleryGrid from 'app/components/GalleryGrid';

const GalleryPage = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Perform asynchronous operations here if needed
    setIsLoading(false); // For demonstration purposes, marking loading as false after component mounts
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href='/'>
        <button className='absolute mt-[26px] ml-10 hover:shadow-form rounded-md py-3 px-8 text-base font-semibold border border-mediumstone'>back</button>
      </Link>
      <h2 className='text-center text-[26px] mx-[50px] pb-[20px] pt-[40px] sm:invisible xs:invisible'>{name}</h2>
      <GalleryGrid folder={name}/>
    </div>
  );
};

export default GalleryPage;
