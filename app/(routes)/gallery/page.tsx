import GalleryRow from '../../components/gallery_row'

const imagesRow1 = [
  { thumbnailPath: '/image1.png', link: 'link1' },
  { thumbnailPath: '/image2.png', link: 'link2' },
  { thumbnailPath: '/image3.png', link: 'link3' }
];

const imagesRow2 = [
  { thumbnailPath: '/image4.png', link: 'link1' },
  { thumbnailPath: '/image1.png', link: 'link2' },
  { thumbnailPath: '/image5.png', link: 'link3' }
];


export default function Page() {
  return (
    <section className="flex-col justify-center items-center mt-20 mb-20">
      <GalleryRow  images={imagesRow1}/>
      <GalleryRow  images={imagesRow2}/>
      <GalleryRow images={imagesRow1} />
    </section>
  );
}
