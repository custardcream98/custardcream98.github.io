import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled, { useTheme } from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { isDarkAtom } from "../lib/atoms";
import BlogIcon from "./BlogIcon";

const NavContainer = styled.div`
  height: 50px;
  width: 100vw;
  box-shadow: ${(props) => props.theme.navLineShadow};
  position: sticky;
  top: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Nav = styled.nav`
  width: 85vw;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-left: 20px;
  }
`;

const DarkmodeSwitch = styled.div`
  width: 50px;
  height: 30px;
  background-color: rgb(138, 138, 138);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 3px;
  margin-left: 20px;
  cursor: pointer;
  &[data-ison="true"] {
    justify-content: flex-end;
  }
`;

const DarkmodeSwitchHandle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 40px;
`;

const Title = styled.span`
  /* background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${(props) => props.theme.mainGradient}; */
  color: ${(props) => props.theme.textColor};
  font: 800 23px ${(props) => props.theme.codingFont};
`;

const LogoTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-left: 7px;
  }
`;
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Navigation = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleSwitch = () => setDarkAtom((prev) => !prev);

  const router = useRouter();

  const theme = useTheme();

  return (
    <NavContainer>
      <Nav>
        <LogoTitle>
          <BlogIcon color={theme.textColor} size={1} />
          <Title>Custardcream</Title>
        </LogoTitle>
        <NavMenu>
          {router.route !== "/" ? <Link href="/">?????????</Link> : null}
          <DarkmodeSwitch data-ison={isDark} onClick={toggleSwitch}>
            <DarkmodeSwitchHandle layout transition={spring} />
          </DarkmodeSwitch>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
