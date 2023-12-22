import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ButtonTemp = styled.button.attrs({
  type: "button",
})`
  width: ${(props) => (props.width ? `${props.width}px` : "100px")};
  height: ${(props) => (props.height ? `${props.height}px` : "fit-content")};
  padding: 0.6rem 0;
  border: 1px solid var(--primary-color);
  border-radius: 9px;

  background-color: ${(props) =>
    props.$isBackground ? `var(--primary-color)` : "transparent"};

  color: ${(props) => (props.$isBackground ? `white` : `var(--primary-color)`)};

  cursor: pointer;
  transition: all 0.3s var(--transition-default);

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export default function Button({
  width,
  height,
  isBackground,
  text,
  location,
}) {
  const navi = useNavigate();

  const naviTo = (p) => {
    navi(`/${p}`);
  };

  return (
    <ButtonTemp
      onClick={() => naviTo(location)}
      width={width}
      height={height}
      $isBackground={isBackground}>
      {text}
    </ButtonTemp>
  );
}
