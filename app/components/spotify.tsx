import React from 'react';

const SpotifyProfile = ({ profileUrl }) => {
  return (
    <div>
      <iframe 
        src={profileUrl}
        width="400" 
        height="380" 
        frameBorder="0" 
        allow="encrypted-media"
        title="Spotify Profile"
      ></iframe>
    </div>
  );
};

export default SpotifyProfile;