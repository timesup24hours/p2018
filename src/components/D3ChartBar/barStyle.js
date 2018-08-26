export default `
  @keyframes rectAnimate {
    0% {
      y: var(--maxVal);
    }
    100% {
      y: var(--y);
    }
  }
  
  rect {
    animation-name: rectAnimate;
    transition: 1s;
    animation-duration: var(--delay);
    // animation-delay: var(--delay);
    animation-timing-function: cubic-bezier(1, -1.07, 0, 1.42);
    animation-fill-mode: forwards;
    z-index: 10;
  }
`;
