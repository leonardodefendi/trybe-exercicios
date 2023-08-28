import { useDispatch, useSelector } from 'react-redux'
import { Dispach, ReduxState} from './styles'
import { fetchDogImage } from './redux/actions';
import './App.css'

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispach = useDispatch();

  if(rootState.isFetching) return <p>Carregando...</p>
  return (
    <div>
      <button onClick = {() => dispatch(fetchDogImage())}>Novo Doguinho</button>
      {rootState.imageURL && <img src={rootState.imageURL}/>} 
    </div>
  )
}

export default App
