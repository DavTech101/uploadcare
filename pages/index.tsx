import 'dayjs/locale/nl';
import Meta from '../components/Meta';
import tw, { styled } from 'twin.macro';
import PrimaryWidget, { SecondaryWidget } from '../components/Widgets';

//######### Component Types ##################
import type { NextPage } from 'next';

//######### Component Styles #################

const Wrapper = tw.div`flex flex-col gap-5 md:(flex flex-row gap-5) justify-center items-center content-center py-5`;

//######### Component ########################
const Home: NextPage = () => {
  return (
    <>
      <Meta title='Uploadcare' />
      <Wrapper>
        <PrimaryWidget />
        <SecondaryWidget />
      </Wrapper>
    </>
  );
};

export default Home;
