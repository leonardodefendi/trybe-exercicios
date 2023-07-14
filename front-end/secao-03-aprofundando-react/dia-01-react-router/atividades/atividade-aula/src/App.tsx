import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffe-list';
import Coffee from './pages/coffe';
import Layout from './components/Layout';
import NotFound from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="" element={ <Home /> } />
        <Route path="coffees" element={ <CoffeeList /> } />
        <Route path="coffees/:coffee" element={ <Coffee /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
