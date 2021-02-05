import React from 'react';
import { DefaultTheme, ThemeProvider} from 'styled-components'
import usePersitedState from './utils/usePersistedState'

import GlobalStyle from './styles/global';
import Header from './components/Header'
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App = () => {
  const [theme, setTheme] = usePersitedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
