import React, { useRef, useEffect, useState, SyntheticEvent } from 'react';
import './index.scss';

interface SmokeTextProps {
  text: string;
  onClick: Function;
}
const SmokeText = ({ text, onClick }: SmokeTextProps): JSX.Element => {
  const [show, setShow] = useState(false);
  let videoRef: React.RefObject<HTMLVideoElement> | null = useRef(null);

  useEffect((): any => {
    let node: HTMLVideoElement | null;
    while (!node) {
      node = document.getElementById('video') as HTMLVideoElement;
      videoObject(node);
    }
    return (): void => {
      node && node.removeEventListener('canplay', handleShow);
    };
  });

  const videoObject = (node: HTMLVideoElement): void => {
    node.addEventListener('canplay', handleShow);
  };

  const handleShow = (event: Event) => {
    // if (show) setShow(false);
    if (!show) setShow(true);
    if (show && onClick) onClick();
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
