import { keyframes } from "styled-components";

export const backgroundPan = keyframes`
 from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
`;

export const scale = keyframes`
  from, to {
    transform: scale(0);
  }
  
  50% {
    transform: scale(1);
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(180deg);
  }
`;
