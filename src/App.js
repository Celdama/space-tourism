import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './app.style';
import { Navbar } from './layout/Navbar';
import { Home } from './components/Home';
import { Main } from './layout/Main';
import backgroundHome from './assets/home/background-home-desktop.jpg';

function App() {
  return (
    <Wrapper bg={backgroundHome} className='App'>
      <Navbar />
      <Main>
        <Home />
      </Main>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
