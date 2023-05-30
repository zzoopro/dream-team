import styled, { ThemeProps } from "styled-components";

interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
  bgColor?: string;
}

const BaseLayer = styled.div`
  display: flex;
  justify-content: center;
`;

const Scaffold = styled.div<{ background?: string }>`
  min-height: 100vh;
  max-width: 690px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #999;
  overflow: hidden;
  background-color: ${(props) => props.background ?? "transparent"};
`;

const Layout = ({ children, bgColor }: LayoutProps) => {
  return (
    <BaseLayer>
      <Scaffold background={bgColor}>{children}</Scaffold>
    </BaseLayer>
  );
};

export default Layout;
