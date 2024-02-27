import GalleryRow from '../../components/gallery_row'

const imagesRow1 = [
  { thumbnailPath: '/Headshot.jpg', link: '/Headshot.jpg' },
  { thumbnailPath: '/seagull2.png', link: '/seagull2.png' },
  { thumbnailPath: '/image5.png', link: '/image5.png' }
];

const imagesRow2 = [
  { thumbnailPath: '/seagull3.png', link: '/seagull3.png' },
  { thumbnailPath: '/image3.png', link: '/image5.png' },
  { thumbnailPath: '/image1.png', link: '/image5.png' }
];

const imagesRow3 = [
  { thumbnailPath: '/image2.png', link: '/image2.png' },
  { thumbnailPath: '/image4.png', link: '/image4.png' },
  { thumbnailPath: '/seagull.png', link: '/seagull.png' }
];

export default function Page() {
  return (
    <section className="flex-col justify-center mt-20 items-center page-wrapper-gallery">
      <div>
        <GalleryRow  images={imagesRow1}/>
        <GalleryRow  images={imagesRow2}/>
        <GalleryRow images={imagesRow3} />
        <GalleryRow images={imagesRow1} />
        <GalleryRow  images={imagesRow2}/>
      </div>
    </section>
  );
}
