import Meta from './Meta';
import tw, { styled } from 'twin.macro';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { ReactNode } from 'react';

//######### Interfaces #################

type Props = {
  children?: ReactNode;
};

//######### Component Styles #################

const Wrapper = styled.div`
  ${tw`grid font-sans min-h-screen`};
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const MainContainer = tw.div`bg-gray-200 flex w-full py-0 px-0.5`;

const Main = tw.main`m-auto`;

//######### Components #################

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Meta />
      <Navbar />
      <MainContainer>
        <Main>{children}</Main>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
