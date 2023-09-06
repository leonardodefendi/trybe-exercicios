import './App.css';
import { useSelector } from 'react-redux';
import Form from './components/Form/index';
import InforPerso from './components/InforPerso';
import NotFetch from './components/NotFetch';
import { ReduxState } from './types';

function App() {
  const rootState = useSelector((state: ReduxState) => state.error);
  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        {rootState === 'Teste' ? <NotFetch /> : <InforPerso />}

      </div>
    </>
  );
}

export default App;
