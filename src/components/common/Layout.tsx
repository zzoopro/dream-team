import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode[];
}

const BaseLayer = styled.div`
  display: flex;
  justify-content: center;
`;

const Scaffold = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 720px;
  border: 1px solid #333;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <BaseLayer>
      <Scaffold>{children}</Scaffold>
    </BaseLayer>
  );
};

export default Layout;
