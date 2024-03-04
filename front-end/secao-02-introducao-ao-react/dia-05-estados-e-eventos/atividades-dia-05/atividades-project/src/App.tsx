import { useState } from 'react';
// import Button from './components/Button';

function App() {
  // function handleClick1(messageText: string) {
  //   alert(messageText);
  // }
  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  // }
  // const [showImg, setShowImg] = useState(true);
  // function handleClick() {
  //   setShowImg(!showImg);
  // }
  const [index, setIndex] = useState(0);
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [toolList, setToolList] = useState(toolKit);
  const [input, setInputValue] = useState('');
  function handleClick() {
    if (input) {
      setToolList([...toolList, input]);
    }
  }
  function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o primeiro elemento
    }
  }
  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1); // Vai para o último elemento
    }
  }
  return (
    <>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={ (event) => setInputValue(event.target.value) } />
        <button onClick={ handleClick }>Adicionar</button>
      </section>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <button onClick={ handlePreviousClick }>Anterior</button>
      <button onClick={ handleNextClick }>Próximo</button>
      <ul>
        {toolList.map((tool) => (
          <li key={ tool }>{tool}</li>
        ))}
      </ul>
      {/* {showImg && <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=826&t=st=1688646583~exp=1688647183~hmac=a7fb320a22344280d31745a1fd21457a6a9826cc43ea2ccc66200d763f3fb070" alt="teste" />}
      <button onClick={ handleClick }>
        {showImg ? 'Esconder imagem' : 'Mostrar imagem'}
      </button> */}
      {/* <Button
        onClick={ () => handleClick1('Botão1') }
      />
      <Button
        onClick={ () => handleClick1('Botão2') }
      />
      <input
        type="text"
        onChange={ (event) => handleChange(event) }
      /> */}
    </>
  );
}

export default App;
