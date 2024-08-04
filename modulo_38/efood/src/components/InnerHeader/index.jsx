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
          <S.HeaderLink to="/" title="Clique para voltar para a página de Restaurantes">
            Restaurantes
          </S.HeaderLink>
          <img src={logo} alt="Logo efood" />
          {items.length <= 0 ? (
            <>{items.length} produto(s) no carrinho</>
          ) : (
            <a onClick={openOrder} title="Clique para acessar o carrinho">
              {items.length} produto(s) no carrinho
            </a>
          )}
        </S.HeaderInfo>
      </S.Container>
    </S.Header>
  );
};
