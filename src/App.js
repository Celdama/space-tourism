import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './app.style';
import { Navbar } from './layout/Navbar';
import { Home } from './components/Home';
import { Main } from './layout/Main';
import { Destination } from './components/Destination';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology';

function App() {
  return (
    <Wrapper className='App'>
      <BrowserRouter>
        <Navbar />
        <Main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<Technology />} />
          </Routes>
        </Main>
        <GlobalStyle />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
