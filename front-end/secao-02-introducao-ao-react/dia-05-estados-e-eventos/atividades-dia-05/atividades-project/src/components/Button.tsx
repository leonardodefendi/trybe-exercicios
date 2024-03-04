type Teste = {
  onClick: () => void
};

function Button({ onClick }: Teste) {
  return (
    <button onClick={ onClick }>Clique em mim!</button>
  );
}

export default Button;
