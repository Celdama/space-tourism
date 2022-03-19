import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './app.style';
import { Navbar } from './layout/Navbar';
import backgroundHome from './assets/home/background-home-desktop.jpg';

function App() {
  return (
    <Wrapper bg={backgroundHome} className='App'>
      <Navbar />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
