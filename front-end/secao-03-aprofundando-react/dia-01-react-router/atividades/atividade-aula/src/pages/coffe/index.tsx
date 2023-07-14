import { Link, useParams, useLocation } from 'react-router-dom';
import { coffeeList } from '../../data';

function Coffee() {
  const params = useParams();
  const currentCoffe = coffeeList.find((coffee) => coffee.slug === params.coffee);
  const location = useLocation();
  console.log(location);
  if (!currentCoffe) {
    return (
      <div>
        <h1>Oops! café não encontrado</h1>
        <h2>
          Acesse a
          {' '}
          <Link to="/coffees">página de cafés</Link>
          {' '}
          e selecione um de nossos produtos
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {' '}
        {currentCoffe.title}
      </h1>
      <p>{currentCoffe?.description}</p>
      <h2>Ingredientes</h2>
      <ul>
        {currentCoffe.ingredients
          .map((ingredient) => <li key={ ingredient }>{ingredient}</li>)}
      </ul>
      <img src={ currentCoffe?.image } alt="" />
    </div>
  );
}

export default Coffee;
