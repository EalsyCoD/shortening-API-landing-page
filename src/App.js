import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'




import GlobalStyle from './styles/global'
import Header from './components/Header';
import Main from './components/Main';

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
  </ThemeProvider>
 
  
  
)  
 
}



      

export default App;
