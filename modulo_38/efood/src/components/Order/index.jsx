import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { Checkout } from '../Checkout';

import { formatPrice } from '../../App';
import { close, remove } from '../../store/reducers/order';

import * as S from './styles';
import orderCloseBtn from '../../assets/images/close-order.png';

export const Order = () => {
  const { isOpen, items } = useSelector((state) => state.order);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrder, setShowOrder] = useState(true);
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

  const handleShowDelivery = () => {
    setShowCheckout(true);
    setShowOrder(false);
  };
  const handleShowOrder = () => {
    setShowCheckout(false);
    setShowOrder(true);
  };

  return (
    <S.OrderContainer className={isOpen ? 'order-open' : ''}>
      <S.Overlay onClick={closeOrder} />
      <S.Aside>
        {showOrder && (
          <>
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
              Valor Total <span>{formatPrice(getTotalPrice())}</span>
            </S.TotalPrice>
            <S.CheckoutButton title="Continuar com a entrega?" type="button" onClick={handleShowDelivery}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}

        {showCheckout && <Checkout handleCloseOrder={closeOrder} totalPrice={getTotalPrice()} handleShowOrder={handleShowOrder} />}
      </S.Aside>
    </S.OrderContainer>
  );
};
