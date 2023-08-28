import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import {actionCreator} from './redux/actions'

type RootState = {
  counterReducer: {
    count: number;
  }
}
function App() {
  const rootState = useSelector((state: RootState) => state)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Teste</h1>
      <h2>{rootState.counterReducer.count}</h2>
      <h2>Numero de click {}</h2>
      <button onClick={() => dispatch(actionCreator('INCREMENT_COUNTER', 1))}>Incrementar 1</button>
      <button onClick={() => dispatch(actionCreator('INCREMENT_COUNTER', 5))}>Incrementar 5</button>
      <button onClick={() => dispatch(actionCreator('DECREMENT_COUNTER',1))}>Decrementar 1</button>
    </div>
  )
}

export default App
