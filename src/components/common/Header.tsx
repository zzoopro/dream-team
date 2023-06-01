import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled, { ThemeProps } from "styled-components";
import { Theme } from "../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
`;

const IconBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  cursor: pointer;
`;

const BackIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 30px;
  color: ${({ theme }: ThemeProps<Theme>) => theme.white200};
`;

const MenuIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 30px;
  color: ${({ theme }: ThemeProps<Theme>) => theme.white200};
`;

export enum Pages {
  home = "home",
  auth = "auth",
}
interface HeaderProps {
  page: Pages;
}

const Header = ({ page }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const initKey = useRef<string>();

  const [isFirst, setIsFirst] = useState<boolean>(true);

  useEffect(() => {
    if (!initKey.current) initKey.current = location.key;
    if (initKey.current === location.key) setIsFirst(true);
    if (initKey.current !== location.key) setIsFirst(false);
  }, [location.pathname]);

  const historyBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <StyledHeader>
      {!isFirst && page === Pages.auth && (
        <IconBox whileTap={{ scale: 1.5 }} onClick={historyBack}>
          <BackIcon icon={faChevronLeft} />
        </IconBox>
      )}
      {page === Pages.home && (
        <IconBox>
          <MenuIcon icon={faBars} />
        </IconBox>
      )}
    </StyledHeader>
  );
};

export default Header;
