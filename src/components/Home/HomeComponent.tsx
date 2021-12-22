import React, { useRef, useEffect, useLayoutEffect } from 'react';
import Video from "../../assets/cute_bird.mp4";
import "./HomeComponent.scss"
const HomeComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useLayoutEffect(() => {
    if(!videoRef.current) return;
    videoRef.current.src = Video;
    // videoRef.current.addEventListener('canplay', (e) => {
    //   if(!videoRef.current) return;
    //   videoRef.current.play();
    // })
  }, [])

  return (
    <div className='home-wrapper'>
      <video ref={videoRef} height={"100%"} width={"100%"} muted autoPlay loop></video>
    </div>
  );
}

export default HomeComponent;