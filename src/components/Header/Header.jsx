import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Button from "../../shared/common/Button";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.25rem 3rem;
  background-color: var(--container-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Logo = styled.div`
  width: fit-content;
  color: var(--primary-color);
  font-size: 2rem;
  font-family: "Poppins-Medium";
  cursor: pointer;
`;

const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  cursor: pointer;

  & li {
    list-style: none;
  }
`;

const MenuLi = styled.li`
  color: white;
  position: relative;
  font-size: 0.95rem;
  font-family: "Poppins-Regular";

  &::after {
    content: "";
    width: ${(props) => (props.$current === props.children ? "100%" : "0%")};
    height: 2px;
    background-color: var(--primary-color);
    position: absolute;
    bottom: -9px;
    left: 0;
    transition: width 0.3s var(--transition-default);
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => (props.avatar ? `url(${props.avatar})` : "")};
`;

export default function Header() {
  // States
  const [current, setCurrent] = useState("");
  const [isLogined, setIsLogined] = useState(false);

  // Hooks
  const navi = useNavigate();

  const handleCurrent = (e) => {
    const { innerText } = e.target;
    innerText ? setCurrent(innerText) : setCurrent("");
  };

  const navTo = (p = "") => {
    navi(`/${p}`);
  };

  const menus = ["Community", "Recommend", "Workout", "About Us"];
  const menuList = menus.map((menu, i) => (
    <MenuLi
      key={i}
      $current={current}
      onClick={(e) => {
        handleCurrent(e);
        navTo(menu);
      }}>
      {menu}
    </MenuLi>
  ));

  return (
    <HeaderContainer>
      <Logo onClick={() => navTo()}>AbEx</Logo>
      <MenuUl>{menuList}</MenuUl>
      <UserBox>
        <ButtonBox>
          {isLogined === false && (
            <Button text={"Login"} location={"login"}>
              Login
            </Button>
          )}
        </ButtonBox>
        {isLogined && <UserIcon avatar={""} />}
      </UserBox>
    </HeaderContainer>
  );
}
