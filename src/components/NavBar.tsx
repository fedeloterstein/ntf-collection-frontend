import { Button, Flex, IconButton, Link, Spacer, Tooltip, useColorMode, VStack } from '@chakra-ui/react';
import { FaSun, FaMoon, FaTwitter, FaGithub, FaEthereum } from 'react-icons/fa'
import { useConnectWallet } from '../hooks/useConnectWallet';

export const NavBar = () => {
  const connectWallet = useConnectWallet();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w={'100%'}>

        <Spacer></Spacer>
        <Link href='https://twitter.com/fedef_dev' isExternal>
          <Tooltip label='Follow me on twitter' placement='auto'>
            <IconButton icon={<FaTwitter />} isRound={true} aria-label='FaTwitter'></IconButton>
          </Tooltip>
        </Link>
        <Link href='https://rinkeby.rarible.com/collection/0xbd200be88d9dfc4c50e837b1bfd417cf5ec5a032/items?filter[filter][sort]=latest' isExternal>
        <Tooltip label='Check your nft on opensea' placement='auto'>
          <IconButton ml={2} icon={<FaEthereum />} isRound={true} aria-label='FaEthereum'></IconButton>
        </Tooltip>
        </Link>
        <Link href='https://github.com/fedeloterstein/ntf-collection-frontend' isExternal>
        <Tooltip label='See the code on Github' placement='auto'>
          <IconButton ml={2} icon={<FaGithub />} isRound={true} aria-label='FaGithub'></IconButton>
        </Tooltip>
        </Link>
        <IconButton ml={4} icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode} aria-label='FaSun'></IconButton>
        <Button
          ml={8}
          onClick={connectWallet}
        >Connect Wallet</Button>
      </Flex>
    </VStack>
  )
};
