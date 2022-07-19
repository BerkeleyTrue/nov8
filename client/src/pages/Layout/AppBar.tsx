import { FC } from 'react';
import { Box, Button, Container, Flex } from '@chakra-ui/react';

import { AppLink } from '../../components/Links';

interface Props {
  h: number;
}

export const AppBar: FC<Props> = ({ h }) => {
  return (
    <Flex h={h} bg='darker.700' justifyContent='center'>
      <Box h='100%' maxW='container.xl' w='100%'>
        <Flex h='100%' alignItems='center' w='100%'>
          <AppLink href='/' h='100%'>
            <Button h='100%' bg='darker.700'>
              NOV8
            </Button>
          </AppLink>
        </Flex>
      </Box>
    </Flex>
  );
};
