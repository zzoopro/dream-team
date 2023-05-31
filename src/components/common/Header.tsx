import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HomeIcon = styled(FontAwesomeIcon)`
  color: red;
  :hover {
    color: blue;
  }
`;

const Header = () => {
  return (
    <header>
      <HomeIcon icon={faHouse} /> Header
    </header>
  );
};

export default Header;
