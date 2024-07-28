import * as S from './styles';
import logo from '../../assets/images/logo.svg';

import { open } from '../../store/reducers/order';
import { useDispatch, useSelector } from 'react-redux';

export const InnerHeader = () => {
  const dispatch = useDispatch();
  const openOrder = () => dispatch(open());
  const { items } = useSelector((state) => state.order);

  return (
    <S.Header>
      <S.Container>
        <S.HeaderInfo>
          <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
          <img src={logo} alt="Logo efood" />
          <a onClick={openOrder}>{items.length} produto(s) no carrinho</a>
        </S.HeaderInfo>
      </S.Container>
    </S.Header>
  );
};
