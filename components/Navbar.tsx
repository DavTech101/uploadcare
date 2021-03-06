import React from 'react';
import tw from 'twin.macro';

//######### Interfaces #################

//######### Component Styles #################

const Wrapper = tw.nav`relative bg-betcity-blue font-sans py-2 px-4 flex justify-center items-center`;
const Image = tw.img`absolute left-0 top-0 w-10 py-2 ml-2 md:ml-4`;
const Logo = tw.div`py-2 text-white text-sm font-semibold md:(text-lg font-bold) `;

//######### Components #################

const Navbar = () => {
  return (
    <Wrapper>
      <Image src='betcity.png' />
      <Logo>VEILIG DOCUMENTEN UPLOADEN WIDGETS</Logo>
    </Wrapper>
  );
};

export default Navbar;
