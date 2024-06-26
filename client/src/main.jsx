import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/theme-utils'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
// import './index.css'

const styles = {
  global:(props) => ({
    body:{
      color:mode('gray.800' , 'whiteAlpha.900')(props), //lightModeColor , darkModeColor
      bg:mode('gray.100' , '#101010')(props),//lightMode, darkMode
    }
  })
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode:true,
}

const colors = {
  gray: {
    light: '#616161',
    dark: "#1e1e1e",
  }
}

const theme = extendTheme({config, styles, colors});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App/>
    </ChakraProvider>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
