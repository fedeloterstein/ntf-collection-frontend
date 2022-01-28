import { Box, Button, Container, Flex, Skeleton, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { useContext, useEffect } from "react";
import { AuthContext } from '../context/AuthProvider';
import { useAskContractToMintNft } from '../hooks/useAskContractToMintNft';
import { useCheckIfWalletIsConnected } from '../hooks/useCheckIfWalletIsConnected';


export const Body = () => {
  const checkIfWalletIsConnected = useCheckIfWalletIsConnected();
  const { askContractToMintNft, message } = useAskContractToMintNft()
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { loading } = useContext(AuthContext);


  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <Container maxW='container.xl'>
      <Stack>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          spacing='200px'
          p={isNotSmallerScreen ? '32' : '0'}
          alignSelf={'flex-start'}
        >
          <Box
            mt={isNotSmallerScreen ? '0' : 16}
            align='flex-start'
          >
            <Text fontSize={'7xl'} fontWeight={'bold'} bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'} bgClip={'text'}>NFT Collection</Text>
            <Text
              fontSize={'5xl'}
              fontWeight={'semibold'}
              color={isDark ? 'gray.200' : 'gray.500'}
            >
              Each unique. Each beautiful. Discover your NFT today.
            </Text>
            {loading ? (
              <Skeleton startColor='cyan.400' endColor='purple.600' height='20px' />
            ) : (
              <Button
                mt={8}
                mb={8}
                bgGradient={'linear(to-r, cyan.400, blue.500, purple.600)'}
                color={isDark ? 'white' : 'white'}
                onClick={askContractToMintNft}
              >
                Mint NFT
              </Button>
            )}
            {message !== null && (
              <Text
                fontSize={'1xl'}
                fontWeight={'semibold'}
                color={isDark ? 'gray.200' : 'gray.500'}
              >
                {message}
              </Text>
            )}
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
};
