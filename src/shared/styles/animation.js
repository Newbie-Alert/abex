import { keyframes } from "styled-components";

export const FadeMount = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`
export const FadeMountText = keyframes`
from {
  opacity: 0;
  transform: translate(-10%, -50%);
}

to {
  opacity: 1;
  transform: translate(0%, -50%);
}
`


export const listMount = keyframes`
from {
  opacity: 0;
  transform: translateX(-10%);
}

to {
  opacity: 1;
  transform: translateX(0%);
}
`

export const slideDown = keyframes`
from {
  opacity: 0;
  transform: translateY(-10%);
}

to {
  opacity: 1;
  transform: translateY(0%);
}
`

export const slideLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(10%);
}

to {
  opacity: 1;
  transform: translateX(0%);
}
`
export const slideUp = keyframes`
from {
  opacity: 0;
  transform: translateY(-10%);
}

to {
  opacity: 1;
  transform: translateY(0%);
}
`