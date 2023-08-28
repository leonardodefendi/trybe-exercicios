import { useSelector } from 'react-redux';
import { ReduxState } from '../../types';

function InforPerso() {
  const rootState = useSelector((state: ReduxState) => state);

  if (rootState.isFetching) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div>
      <p>
        Nome:
        {' '}
        {rootState.name}
      </p>
      <div>
        <p>Apelidos:</p>
        {rootState.aliases.map((aliase) => (
          <p key={ aliase }>{aliase}</p>
        ))}
      </div>
      <div>
        <p>Títulos:</p>
        {rootState.titles.map((title) => (
          <p key={ title }>{title}</p>
        ))}
      </div>
    </div>
  );
}
export default InforPerso;
