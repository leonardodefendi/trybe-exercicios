import { Link, useNavigate } from 'react-router-dom';
import { coffeeList } from '../../data';

function CoffeeList() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(-1);
  // };
  return (
    <div>
      <h1>Nossos Cafés</h1>
      <main>
        <ul>

          {' '}
          {coffeeList.map((coffee) => (<Link
            to={ `/coffees/${coffee.slug}` }
            key={ coffee.id }
          >
            <li>{coffee.title}</li>
          </Link>))}

        </ul>
      </main>
    </div>
  );
}

export default CoffeeList;
