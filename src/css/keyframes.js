import { keyframes } from 'styled-components'

export const rakishRotation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-15deg);
  }
`

export const fadePopIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.8);
  }
  50% {
    opacity: .8;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
