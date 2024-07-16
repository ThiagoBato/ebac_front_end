import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styles';
import { InnerHeader } from '../../components/InnerHeader';
import { Hero } from '../../components/Hero';
import { Products } from '../../components/Products';

const Profile = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
        setMenu(data.cardapio);
      });
  }, [id]);

  return (
    <>
      <InnerHeader />
      <Hero bgImg={restaurant.capa} type={restaurant.tipo} name={restaurant.titulo} />
      <S.Main>
        <S.Container>
          <S.MenuContainer>
            {menu.map((item) => {
              return (
                <S.MenuItem key={item.id}>
                  <Products productId={item.id} productImg={item.foto} productTitle={item.nome} productDescription={item.descricao} productSize={item.porcao} productPrice={item.preco}></Products>
                </S.MenuItem>
              );
            })}
          </S.MenuContainer>
          {menu.id}
        </S.Container>
      </S.Main>
    </>
  );
};

export default Profile;
