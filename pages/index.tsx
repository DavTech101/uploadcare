import 'dayjs/locale/nl';
import tw from 'twin.macro';
import { useRef } from 'react';
import Meta from '../components/Meta';
import { DatePicker } from '@mantine/dates';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import {
  CalendarIcon,
  ImageIcon,
  UploadIcon,
  CrossCircledIcon,
} from '@modulz/radix-icons';
import {
  TextInput,
  Group,
  Text,
  useMantineTheme,
  Select,
  MantineTheme,
} from '@mantine/core';

//######### Component Types ##################
import type { NextPage } from 'next';

//######### Component Styles #################

const Wrapper = tw.div`flex flex-col justify-center items-center content-center`;
const Widget = tw.div`bg-white rounded-lg p-5 w-96 max-w-lg`;

const Row = tw.div`flex gap-5 pt-5`;
const Title = tw.div`flex flex-col justify-center items-center py-3 text-sm font-bold`;

//######### Component ########################
const Home: NextPage = () => {
  const openRef = useRef();
  const theme = useMantineTheme();

  return (
    <>
      <Meta title='Uploadcare' />
      <Wrapper>
        <Widget>
          <Title>PERSOONGEGEVENS</Title>
          <hr />
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
              label='Geboortatum'
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
            <Select
              label='Document type'
              placeholder='Selecteer één'
              data={[
                { value: 'ID', label: 'ID' },
                { value: 'Paspoort', label: 'Paspoort' },
                { value: 'Rijbewijs', label: 'Rijbewijs' },
                { value: 'Verblijfsvergunning', label: 'Verblijfsvergunning' },
              ]}
            />
          </Row>
          <Row> </Row>
          <Dropzone
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={3 * 1024 ** 2}
            accept={['horra']}
          >
            {(status) => (
              <Group
                position='center'
                spacing='md'
                style={{ minHeight: 100, pointerEvents: 'none' }}
              >
                <ImageUploadIcon
                  status={status}
                  style={{
                    width: 30,
                    height: 30,
                    color: getIconColor(status, theme),
                  }}
                />

                <div>
                  <Text size='sm' inline>
                    Sleep uw document naar hier toe.
                  </Text>
                  <Text size='xs' color='dimmed' inline mt={7}>
                    Het document mag niet groter zijn dan 5mb.
                  </Text>
                </div>
              </Group>
            )}
          </Dropzone>
        </Widget>
      </Wrapper>
    </>
  );
};

export default Home;

type Props = {
  status: any;
  style?: any;
};

function ImageUploadIcon({ status, ...props }: Props) {
  if (status.accepted) {
    return <UploadIcon {...props} />;
  }

  if (status.rejected) {
    return <CrossCircledIcon {...props} />;
  }

  return <ImageIcon {...props} />;
}

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.black;
}
