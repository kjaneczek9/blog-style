"use client"
interface ComponentProps {
    thumbnailPath: string;
    title: string;
    pdfPath: string;
  }
  
  const Component: React.FC<ComponentProps> = ({ thumbnailPath, title, pdfPath }) => {
    return (
      <div className="border border-gray-200 rounded-lg w-full max-w-sm dark:border-gray-800 m-5">
        <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
          {/* Thumbnail image */}
          <img src={thumbnailPath} alt="English Resume" />
  
          {/* Gray overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-10 rounded-md"></div>
  
          {/* Anchor tag for clickable effect */}
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
            {/* Content inside the anchor tag */}
            <span className="sr-only">{title}</span>
          </a>
        </div>
        <div className="p-5 grid gap-2 pdf-component-background-color rounded-lg">
          {/* Title */}
          <h3 className="text-base font-medium leading-none">{title}</h3>
          {/* Path */}
          {/* <p className="text-sm text-gray-500 dark:text-gray-400">Click image to open</p> */}
        </div>
      </div>
    );
  };
  
  export default Component;
  