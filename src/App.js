import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './app.style';
import backgroundHome from './assets/home/background-home-desktop.jpg';

function App() {
  return (
    <Wrapper bg={backgroundHome} className='App'>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
