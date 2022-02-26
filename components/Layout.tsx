import Meta from './Meta';
import tw from 'twin.macro';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { ReactNode } from 'react';

//######### Interfaces #################

type Props = {
  children?: ReactNode;
};

//######### Component Styles #################

const Wrapper = tw.div`font-helvetica`;

const MainContainer = tw.div`w-full py-0 px-0.5 justify-start items-center`;

const Main = tw.main`justify-start items-center`;

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
