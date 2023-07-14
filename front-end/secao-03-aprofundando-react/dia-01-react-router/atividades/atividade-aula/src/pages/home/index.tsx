import { Link, useLocation } from 'react-router-dom';

function Home() {
  return (
    <>

      <h1>Coffeeteria</h1>
      <Link to="coffees">
        <button>Conheça nossos produtos</button>
      </Link>
      <Link to="/coffees" state={ { name: 'Leonardo' } }>Teste</Link>
    </>
  );
}

export default Home;
