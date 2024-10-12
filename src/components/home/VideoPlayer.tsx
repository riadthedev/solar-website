'use client'
import React, { useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper';

const VideoPlayer: React.FC<HomePageProps> = ({hide = false}) => {

    const videoRef = useRef(null);  // Reference to the video element
    const [isPlaying, setIsPlaying] = useState(false); // Control video state
  
    const handlePlayPause = () => {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    };

  return (
    <>
      {!hide && <SectionWrapper>
          <div className="relative w-full flex flex-col justify-center items-center mx-auto" data-aos='zoom-in-up'>
          <video ref={videoRef} controls={isPlaying}
           style={{ maxWidth: '1483px', maxHeight: '569.19px', width: '100%', height: 'auto' }}
          poster="/assets/images/video-one.png">
            <source src="/assets/videos/video-one.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && <div className='absolute text-[3.2rem] cursor-pointer' onClick={handlePlayPause}><img src="/assets/icons/play-button.svg" className='size-[10rem] ' alt="absolute top-1/2" /></div>}
            </div>
      </SectionWrapper>}
    </>
  )
}

export default VideoPlayer