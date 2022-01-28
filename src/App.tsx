import React, {useEffect} from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { NavBar } from './components/NavBar';
import { Body } from './components/Body';
import AuthProvider from './context/AuthProvider';
import { useCheckIfWalletIsConnected } from './hooks/useCheckIfWalletIsConnected';

function App() {
    
  // 2. Use at the root of your app
  return (
    <AuthProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode='light'></ColorModeScript>
        <NavBar />
        <Body />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App;
