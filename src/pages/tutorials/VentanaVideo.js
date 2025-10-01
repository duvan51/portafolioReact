import React, { useState, useEffect } from 'react';
import './VentanaVideo.css'
import YouTube from 'react-youtube';




const VentanaVideo = (props) => {
  const { videoSelect } = props;
  const idVideo = videoSelect ? videoSelect.link : '';

  const ObtenerIdDeLink = (link) => {
    if (link) {
      return link.substring(32);
    }
    return '';
  };

  const opts = {
    height: '190',
    width: '380',
    playerVars: {
      autoplay: 10,
      startSeconds: 250,
    },
  };

  const VideoId = idVideo ? ObtenerIdDeLink(idVideo) : '';

  return (
    <div className='ventanaVideo'>
      <div className='ventanaVideoY'>
        <YouTube videoId={VideoId} opts={opts} />
      </div>
    </div>
  );
};


export default VentanaVideo