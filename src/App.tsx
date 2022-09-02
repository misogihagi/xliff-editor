import type { Component } from 'solid-js';

import {HopeProvider,Container,IconButton,Box,HStack,Text} from '@hope-ui/solid'
import { UploadIcon, DownloadIcon } from './icons';
import TransUnit from './TransUnit';


const App: Component = () => {
  const index=1
  const id='112357'
  const source=(<>Hello, world!</>)
  const target=(<>Hola, mundo!</>)
  return (
    <HopeProvider>
      <Container>
      <Box>
        <HStack spacing="24px">
        <Text size="5xl">
        file1
        </Text>
        <IconButton variant="outline" aria-label="Upload" icon={<UploadIcon />} />
        <IconButton variant="outline" aria-label="Download" icon={<DownloadIcon />} />
        </HStack>
        <Box bg="$primary6">
        <TransUnit
        index={index}
        id={id}
        source={source}
        target={target}
        ></TransUnit>
      </Box>
      </Box>
      </Container>
    </HopeProvider>
  );
};

export default App;
