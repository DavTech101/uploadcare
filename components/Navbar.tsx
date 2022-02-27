import React from 'react';
import tw from 'twin.macro';

//######### Interfaces #################

//######### Component Styles #################

const Wrapper = tw.nav`relative bg-betcity-blue font-sans py-2 px-4 flex justify-center items-center`;
const Image = tw.img`absolute left-0 top-0 w-10 mt-2 ml-4`;
const Logo = tw.div`py-2 text-white text-lg font-bold`;

//######### Components #################

const Navbar = () => {
  return (
    <Wrapper>
      <Image src='betcity.png' />
      <Logo>SAFELY UPLOAD DOCUMENTS WIDGET</Logo>
    </Wrapper>
  );
};

export default Navbar;
