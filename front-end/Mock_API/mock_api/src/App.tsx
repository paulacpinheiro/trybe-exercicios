import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout /> } />
      <Route index element={ <Home /> } />
      <Route path='/About' element={ <About /> } />
    </Routes>
    <Route path='*' element={ <NotFound /> } />
    </>
  );
}


export default App;