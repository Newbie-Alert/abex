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