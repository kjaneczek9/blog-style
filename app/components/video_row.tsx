import React from 'react';
import Video from 'app/components/video_player'; // Assuming you have a Video component

interface ComponentProps {
  videos: { videoId: string, width: number, height: number }[];
}

const Component: React.FC<ComponentProps> = ({ videos }) => {
  return (
    <section>
      <div className='flex justify-center'>
        {videos.map((video, index) => (
          <Video key={index} videoId={video.videoId} width={video.width} height={video.height}/>
        ))}
      </div>
    </section>
  );
};

export default Component;
