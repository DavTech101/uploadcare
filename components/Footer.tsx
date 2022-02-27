import React from 'react';
import tw from 'twin.macro';

//######### Component Styles #################
const OuterWrapper = tw.div`bg-betcity-blue flex justify-center font-extralight text-gray-100 text-xs  `;

//######### Component ########################
const Footer = () => {
  return (
    <OuterWrapper>
      <p>
        Copyright &copy; {new Date().getFullYear()} DavTech. All rights
        reserved.
      </p>
    </OuterWrapper>
  );
};

export default Footer;
