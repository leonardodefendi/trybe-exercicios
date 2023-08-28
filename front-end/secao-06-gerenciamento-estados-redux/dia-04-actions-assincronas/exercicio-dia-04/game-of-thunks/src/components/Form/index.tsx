import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPeronagem } from '../../redux/actions';
import { Dispatch } from '../../types';

function Form() {
  const [personagem, setPersonagem] = useState<string>('');
  const dispatch: Dispatch = useDispatch();
  const handleChange = (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setPersonagem(value);
  };

  const handleClick = () => {
    dispatch(fetchPeronagem(personagem));
    setPersonagem('');
  };
  return (
    <div>
      <label htmlFor="">
        Digite um nome de um personagem:
        <input type="text" value={ personagem } onChange={ handleChange } />
      </label>
      <button onClick={ handleClick }>Enviar</button>
    </div>
  );
}
export default Form;
