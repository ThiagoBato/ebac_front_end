import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import NoPage from '../NoPage';
import { InnerHeader } from '../../components/InnerHeader';
import { Hero } from '../../components/Hero';
import { Products } from '../../components/Products';
import { useGetRestaurantQuery } from '../../services/api';
import { add, open } from '../../store/reducers/order';
import { Loader } from '../../components/Loader';

const Profile = () => {
  const { id } = useParams();
  const { data: restaurant, error: restaurantError, isLoading: restaurantLoading } = useGetRestaurantQuery(id);
  const dispatch = useDispatch();
  const addToOrder = (menuItem) => {
    dispatch(add(menuItem));
    dispatch(open());
  };

  if (restaurantLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (!restaurant || restaurantError) {
    return (
      <>
        <NoPage />
      </>
    );
  }

  const { cardapio: menu } = restaurant;

  return (
    <>
      <InnerHeader />
      <Hero bgImg={restaurant.capa} type={restaurant.tipo} name={restaurant.titulo} />
      <S.Main>
        <S.Container>
          <S.MenuContainer>
            {menu.map((item) => (
              <S.MenuItem key={item.id}>
                <Products productId={item.id} productImg={item.foto} productTitle={item.nome} productDescription={item.descricao} productSize={item.porcao} productPrice={item.preco} handleAddToOrder={() => addToOrder(item)} />
              </S.MenuItem>
            ))}
          </S.MenuContainer>
        </S.Container>
      </S.Main>
    </>
  );
};

export default Profile;
