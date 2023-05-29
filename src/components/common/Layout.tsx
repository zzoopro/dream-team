import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
  styles?: any;
}

const BaseLayer = styled.div`
  display: flex;
  justify-content: center;
`;

const Scaffold = styled.div`
  min-height: 100vh;
  max-width: 590px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #333;
  overflow: hidden;
`;

const Layout = ({ children, styles }: LayoutProps) => {
  return (
    <BaseLayer>
      <Scaffold {...styles}>{children}</Scaffold>
    </BaseLayer>
  );
};

export default Layout;
