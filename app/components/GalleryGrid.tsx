import { CloudinaryImage } from "@/components/cloudinary/CloudinaryImage";
import cloudinary from '@/utils/cloudinary';
import PhotoModal from "@/components/Modal";

const GalleryGrid = async({ folder }) => {  
  const results = await cloudinary.v2.search
    .expression(`folder:${folder}`)
    .sort_by('public_id', 'desc')
    .max_results(50)
    .execute();

  return (
    <div className='columns-3 gap-x-1 xs:columns-2 sm:columns-2 xl:columns-3 2xl:columns-4'>
      {results.resources.map((result, index) => (
        <div key={result.public_id}>
          <a href={`#img-${index}`} className="modal-open">
            <CloudinaryImage
              style={{'paddingBottom': "4px"}}	
              src={result.public_id}
              width={1300}
              height={600}
              quality={100}
              sizes="100%"
              alt="gallery image"
            />
          </a>
          <PhotoModal id={`img-${index}`} public_id={result.public_id}/>
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;