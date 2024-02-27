import React from 'react';

interface VideoComponentProps {
  videoId: string;
  width: number;
  height: number;
}

const YouTubeVideo = ({ videoId, width, height }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="m-5">
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        frameBorder="0"
        title="YouTube video player"
        style={{ borderRadius: '20px', border: '10px solid #f7d0f3' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
