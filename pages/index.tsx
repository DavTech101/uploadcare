import 'dayjs/locale/nl';
import Meta from '../components/Meta';
import tw, { styled } from 'twin.macro';
import { TextInput } from '@mantine/core';
import DocType from '../components/DocType';
import { DatePicker } from '@mantine/dates';
import Dropfile from '../components/Dropfile';
import { CalendarIcon } from '@modulz/radix-icons';

//######### Component Types ##################
import type { NextPage } from 'next';

//######### Component Styles #################

const Wrapper = tw.div`flex flex-col justify-center items-center content-center`;
const Widget = tw.div`bg-white rounded-lg w-96 max-w-lg drop-shadow-md shadow-2xl`;
const Upper = tw.div`bg-betcity-blue rounded-t-lg py-2 text-white flex justify-center items-center`;
const Lower = tw.div`px-5 pb-5`;

const Row = tw.div`flex gap-5 pt-5`;
const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

const Button = styled.button`
  ${tw`bg-betcity-cyan mx-auto flex justify-center items-center text-center content-center`}
  ${tw`px-10 py-1 rounded-full font-semibold text-xs text-[#24292a]`}

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
  }
`;

//######### Component ########################
const Home: NextPage = () => {
  return (
    <>
      <Meta title='Uploadcare' />
      <Wrapper>
        <Widget>
          <Upper>
            <Title>PERSOONGEGEVENS</Title>
            <hr />
          </Upper>
          <Lower>
            <Row>
              <TextInput placeholder='Voornaam' label='Voornaam' required />
              <TextInput placeholder='Achternaam' label='Achternaam' required />
            </Row>
            <Row>
              <DatePicker
                required
                allowFreeInput
                locale='nl'
                inputFormat='D MMM, YYYY'
                placeholder='Geboortedatum'
                label='Geboortedatum'
                icon={<CalendarIcon />}
              />
            </Row>
            <Row>
              <TextInput
                placeholder='Nationaliteit'
                label='Nationaliteit'
                required
              />
              <TextInput
                placeholder='Geboorteplaats'
                label='Geboorteplaats'
                required
              />
            </Row>
            <Row>
              <DocType />
              <DatePicker
                required
                allowFreeInput
                locale='nl'
                inputFormat='D MMM, YYYY'
                placeholder='Vervaldatum'
                label='Vervaldatum'
                icon={<CalendarIcon />}
              />
            </Row>
            <Row>
              <Dropfile />
            </Row>
            <Row>
              <Button>DOORGAAN</Button>
            </Row>
          </Lower>
        </Widget>
      </Wrapper>
    </>
  );
};

export default Home;
