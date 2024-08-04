import { useEffect, useState } from 'react';
import { HomeHeader } from '../../components/HomeHeader';
import { Restaurants } from '../../components/Restaurants';
import * as S from './styles';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setRestaurants(response));
  }, []);

  return (
    <>
      <HomeHeader />
      <S.Main>
        <S.Container>
          {restaurants.map((restaurant) => {
            return (
              <Restaurants key={restaurant.id} id={restaurant.id} backgroundImage={restaurant.capa} featured={restaurant.destacado} type={restaurant.tipo} title={restaurant.titulo} stars={restaurant.avaliacao} description={restaurant.descricao} />
            );
          })}
        </S.Container>
      </S.Main>
    </>
  );
};

export default Home;
