import { FC, PropsWithChildren } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { AppBar } from './AppBar';

const headerSize = 12;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex width='100vw' height='100vh'>
      <Flex
        flexGrow={1}
        h='100%'
        maxH='100vh'
        w='100%'
        flexDir='column'
        width='100%'
      >
        <AppBar h={headerSize} />

        <Flex
          h={`calc(100% - var(--chakra-sizes-${headerSize}))`}
          w='100%'
          px='4'
          overflowX='hidden'
          overflowY='auto'
        >
          <Box
            mx='auto'
            w='100%'
            maxW='container.xl'
            pt={{ base: '4', md: '16' }}
          >
            {children}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
