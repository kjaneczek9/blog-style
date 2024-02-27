import GalleryImage from './gallery_index'

export default function Page() {
  return (
    <section>
        <div className='flex'>
            <GalleryImage thumbnailPath='/image1.png' link='/image1.png'/>
            <GalleryImage thumbnailPath='/image2.png' link='/image1.png'/>
            <GalleryImage thumbnailPath='/image3.png' link='/image1.png'/>
        </div>
    </section>
  );
}