import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './styles/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <App />
      </AnimatePresence> 
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);