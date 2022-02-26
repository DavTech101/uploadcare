import React from 'react';
import tw from 'twin.macro';

//######### Interfaces #################

//######### Component Styles #################

const Wrapper = tw.nav`bg-[#060322] font-sans py-2 px-4 flex justify-center items-center`;
const Logo = tw.div`py-2 text-white text-lg font-bold`;

//######### Components #################

const Navbar = () => {
  return <Wrapper>
    <Logo>
      SAFELY UPLOAD DOCUMENTS WIDGET
    </Logo>
  </Wrapper>;
};

export default Navbar;
