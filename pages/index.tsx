import tw from 'twin.macro';
import Meta from '../components/Meta';

//######### Component Types ##################
import type { NextPage } from 'next';

//######### Component Styles #################

const Wrapper = tw.div`flex flex-col justify-center items-center content-center`;
const Title = tw.div`flex justify-center items-center py-5`;

const Widget = tw.div`rounded-lg p-5`;

//######### Component ########################
const Home: NextPage = () => {
  return (
    <>
      <Meta title='Uploadcare' />
      <Wrapper>
        <Widget>
          <Title></Title>
        </Widget>
      </Wrapper>
    </>
  );
};

export default Home;
