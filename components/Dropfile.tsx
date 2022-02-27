import React, { FunctionComponent, useRef } from 'react';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { Group, Text, MantineTheme, useMantineTheme } from '@mantine/core';
import { ImageIcon, UploadIcon, CrossCircledIcon } from '@modulz/radix-icons';

//######### Component Types ##################

type Props = {
  status: any;
  style?: any;
};

//######### Component Styles #################

//######### Component ########################
const Dropfile: FunctionComponent = () => {
  const openRef = useRef();
  const theme = useMantineTheme();

  return (
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
              Klik hier of sleep uw document hiernaartoe.
            </Text>
            <Text size='xs' color='dimmed' inline mt={7}>
              Het document mag niet groter zijn dan 5mb.
            </Text>
          </div>
        </Group>
      )}
    </Dropzone>
  );
};

export default Dropfile;

//######### Component Functions ########################
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
