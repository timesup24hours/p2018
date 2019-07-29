import React, { useRef, useEffect, useState } from 'react';
import './index.scss';

interface SmokeTextProps {
  text: string;
}
const SmokeText = ({ text }: SmokeTextProps): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(0);
  const [show, setShow] = useState(false);
  let videoRef: React.RefObject<HTMLVideoElement> | null = useRef(null);
  let id: any = undefined;

  useEffect((): any => {
    videoObject();
    return (): void => {
      clearInterval(id);
    };
  });

  const videoObject = (): void => {
    if (!videoRef || !videoRef.current) return;
    if (id) return;
    id = setInterval((): void => {
      let sec = videoRef!.current.currentTime;
      if (sec > 7 && show) {
        setShow(false);
      } else if (sec > 0 && sec < 1 && !show) {
        setShow(true);
      }
    }, 500);
  };

  return (
    <div className="SmokeText">
      <video
        id="video"
        ref={videoRef}
        autoPlay
        muted
        loop
        src={require('./smoke.mp4')}
      ></video>
      {text ? (
        <div className={`text ${show ? '' : 'displayNone'}`}>
          {text.split('').map((c, index) => (
            <span>{c}</span>
          ))}
        </div>
      ) : (
        <div className={`text ${show ? '' : 'displayNone'}`}>
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
        </div>
      )}
    </div>
  );
};

export default SmokeText;
