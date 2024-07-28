import * as S from './styles';
import orderCloseBtn from '../../assets/images/close-order.png';
import { useDispatch, useSelector } from 'react-redux';
import { close, remove } from '../../store/reducers/order';
import { formatPrice } from '../../App';

export const Order = () => {
  const { isOpen, items } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const closeOrder = () => dispatch(close());

  const getTotalPrice = () => {
    return items.reduce((acc, current) => {
      return (acc += current.preco);
    }, 0);
  };

  const removeOrder = (id) => {
    dispatch(remove(id));
  };

  return (
    <S.OrderContainer className={isOpen ? 'order-open' : ''}>
      <S.Overlay onClick={closeOrder} />
      <S.Aside>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <S.ImageContainer>
                <img src={item.foto} alt={item.nome} />
              </S.ImageContainer>
              <S.InfoContainer>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </S.InfoContainer>
              <S.RemoveOrderButton
                title="Remover Pedido"
                onClick={() => {
                  removeOrder(item.id);
                }}
              >
                <img src={orderCloseBtn} alt="Remover Pedido" />
              </S.RemoveOrderButton>
            </li>
          ))}
        </ul>
        <S.TotalPrice>
          Valor Total <span>R$ {formatPrice(getTotalPrice())}</span>
        </S.TotalPrice>
        <S.CheckoutButton title="Continuar com a entrega?" type="button">
          Continuar com a entrega
        </S.CheckoutButton>
      </S.Aside>
    </S.OrderContainer>
  );
};
