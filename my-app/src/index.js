import * as ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Shell from './Shell';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const colors = {
  brand: {
    bodyText:'#1A202C',
    bodyBackground:'#FFFFFF',
    borderColor:'#E2E8F0',
    blue:'blue',
    gray:'#EDF2F7',
    cardBackground:'#718096',
    navBg:'#2B6CB0',
    h2 :'#171923',  
    h4:'#4A5568', 
    highlightColor:'#EBF8FF',
    button1:'#2D3748',
    highlighted:'#3182CE'
  },
}
const theme = extendTheme({ colors })
root.render(
  <ChakraProvider theme={theme}>
    <Shell/>
  </ChakraProvider>
);

