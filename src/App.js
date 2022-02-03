import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'




import GlobalStyle from './styles/global'
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Api from './components/Api';
import Advanced from './components/Advenced-Statistics';
import { Shortens } from './components/Shortens/index'
import Boost from './components/Boost';


import color from './styles/themes/color'

const App = () => {
  const [theme, setTheme] = useState(color)


  const toggleTheme = () => {
    setTheme(theme.title === color)
  }

return (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <Header toggleTheme={toggleTheme} />
  <Main />
  <Form />
  <Api />
  <Shortens />
  <Advanced />
  <Boost />
  </ThemeProvider>
 
  
  
)  
 
}



      

export default App;
