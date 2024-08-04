import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../App';
import { useCheckoutOrderMutation } from '../../services/api';
import { clear } from '../../store/reducers/order';

import * as S from './styles';

// eslint-disable-next-line react/prop-types
export const Checkout = ({ handleCloseOrder, handleShowOrder, totalPrice }) => {
  const [deliveryIsActive, setdeliveryIsActive] = useState(true);
  const [paymentIsActive, setPaymentIsActive] = useState(false);
  const [orderCompletedIsActive, setOrderCompletedIsActive] = useState(false);
  const [deliveryData, setDeliveryData] = useState(null);
  const [checkoutOrder, { data, isLoading, isSuccess }] = useCheckoutOrderMutation();
  const { items } = useSelector((state) => state.order);
  console.log('Items from Redux:', items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  const deliveryForm = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O nome é obrigatório'),
      address: Yup.string().min(5, 'O endereço precisa ter pelo menos 5 caracteres').required('O endereço é obrigatório'),
      city: Yup.string().required('A cidade é obrigatória'),
      zipCode: Yup.string().min(8, 'O CEP precisa ter 8 caracteres').max(9, 'O CEP precisa ter 8 caracteres').required('O CEP é obrigatório'),
      number: Yup.number().required('O número é obrigatório'),
      complement: Yup.string(),
    }),
    onSubmit: (values) => {
      setDeliveryData(values);
      handledeliveryToPayment();
    },
  });

  const paymentForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCVV: '',
      cardExpireMonth: '',
      cardExpireYear: '',
    },
    validationSchema: Yup.object({
      cardName: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O nome do cartão é obrigatório'),
      cardNumber: Yup.string().min(19, 'O número do cartão precisa ter 16 caracteres').max(19, 'O número do cartão precisa ter 16 caracteres').required('O número do cartão é obrigatório'),
      cardCVV: Yup.string().min(3, 'O código do cartão precisa ter 3 caracteres').max(3, 'O código do cartão precisa ter 3 caracteres').required('O CVV é obrigatório'),
      cardExpireMonth: Yup.string().min(2, 'O mês de validade do cartão precisa ter 2 caracteres').max(2, 'O mês de validade do cartão precisa ter 2 caracteres').required('O mês de expiração é obrigatório'),
      cardExpireYear: Yup.string().min(2, 'O ano de validade do cartão precisa ter 2 caracteres').max(2, 'O ano de validade do cartão precisa ter 2 caracteres').required('O ano de expiração'),
    }),
    onSubmit: (values) => {
      const finalOrderData = {
        delivery: {
          receiver: deliveryData.name,
          address: {
            description: deliveryData.address,
            city: deliveryData.city,
            zipCode: deliveryData.zipCode,
            number: Number(deliveryData.number),
            complement: deliveryData.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCVV),
            expires: {
              month: Number(values.cardExpireMonth),
              year: Number(values.cardExpireYear),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
      };
      console.log('Final Order Data:', finalOrderData);
      checkoutOrder(finalOrderData);
      handleOrderCompleted();
    },
  });

  const getErrorMessage = (fieldName, message) => {
    const touchedField = fieldName in deliveryForm.touched || fieldName in paymentForm.touched;
    const invalidField = fieldName in deliveryForm.errors || fieldName in paymentForm.errors;

    if (touchedField && invalidField) {
      return message;
    }
    return null;
  };

  const handledeliveryToPayment = () => {
    setdeliveryIsActive(false);
    setPaymentIsActive(true);
  };

  const handlePaymentTodelivery = () => {
    setPaymentIsActive(false);
    setdeliveryIsActive(true);
  };

  const handleOrderCompleted = () => {
    setOrderCompletedIsActive(true);
    setPaymentIsActive(false);
  };

  return (
    <S.CheckoutContainer>
      {deliveryIsActive && (
        <>
          <h3>Entrega</h3>
          <form onSubmit={deliveryForm.handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Quem irá receber</label>
              <input type="text" name="name" id="name" value={deliveryForm.values.name} onChange={deliveryForm.handleChange} onBlur={deliveryForm.handleBlur} />
              <small>{getErrorMessage('name', deliveryForm.errors.name)}</small>
            </div>
            <div className="input-group">
              <label htmlFor="address">Endereço</label>
              <input type="text" name="address" id="address" value={deliveryForm.values.address} onChange={deliveryForm.handleChange} onBlur={deliveryForm.handleBlur} />
              <small>{getErrorMessage('address', deliveryForm.errors.address)}</small>
            </div>
            <div className="input-group">
              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" id="city" value={deliveryForm.values.city} onChange={deliveryForm.handleChange} onBlur={deliveryForm.handleBlur} />
              <small>{getErrorMessage('city', deliveryForm.errors.city)}</small>
            </div>
            <div className="input-group input-group--nowrap">
              <div>
                <label htmlFor="zipCode">CEP</label>
                <InputMask type="text" name="zipCode" id="zipCode" value={deliveryForm.values.zipCode} onChange={deliveryForm.handleChange} onBlur={deliveryForm.handleBlur} mask="99999-999" />
                <small>{getErrorMessage('zipCode', deliveryForm.errors.zipCode)}</small>
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input type="text" name="number" id="number" value={deliveryForm.values.number} onChange={deliveryForm.handleChange} onBlur={deliveryForm.handleBlur} />
                <small>{getErrorMessage('number', deliveryForm.errors.number)}</small>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="text" name="complement" id="complement" value={deliveryForm.values.complement} onChange={deliveryForm.handleChange} onBlur={deliveryForm.handleBlur} />
            </div>
            <div className="input-group">
              <button type="submit">Continuar com o pagamento</button>
              <button type="button" onClick={handleShowOrder}>
                Voltar para o carrinho
              </button>
            </div>
          </form>
        </>
      )}
      {paymentIsActive && (
        <>
          <h3>Pagamento - Valor a pagar {formatPrice(totalPrice)}</h3>
          <form onSubmit={paymentForm.handleSubmit}>
            <div className="input-group">
              <label htmlFor="cardName">Nome no cartão</label>
              <input type="text" name="cardName" id="cardName" value={paymentForm.values.cardName} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} />
              <small>{getErrorMessage('cardName', paymentForm.errors.cardName)}</small>
            </div>
            <div className="input-group input-group--nowrap">
              <div className="input--flex-grow">
                <label htmlFor="cardNumber">Número no cartão</label>
                <InputMask type="text" name="cardNumber" id="cardNumber" value={paymentForm.values.cardNumber} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} mask="9999-9999-9999-9999" />
                <small>{getErrorMessage('cardNumber', paymentForm.errors.cardNumber)}</small>
              </div>
              <div className="input--flex-basis87">
                <label htmlFor="cardCVV">CVV</label>
                <InputMask type="text" name="cardCVV" id="cardCVV" value={paymentForm.values.cardCVV} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} mask="999" />
                <small>{getErrorMessage('cardCVV', paymentForm.errors.cardCVV)}</small>
              </div>
            </div>
            <div className="input-group input-group--nowrap">
              <div>
                <label htmlFor="cardExpireMonth">Mês de expiração</label>
                <InputMask type="text" name="cardExpireMonth" id="cardExpireMonth" value={paymentForm.values.cardExpireMonth} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} mask="99" />
                <small>{getErrorMessage('cardExpireMonth', paymentForm.errors.cardExpireMonth)}</small>
              </div>
              <div>
                <label htmlFor="cardExpireYear">Ano de expiração</label>
                <InputMask type="text" name="cardExpireYear" id="cardExpireYear" value={paymentForm.values.cardExpireYear} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} mask="99" />
                <small>{getErrorMessage('cardExpireYear', paymentForm.errors.cardExpireYear)}</small>
              </div>
            </div>
            <div className="input-group">
              <button type="submit"> Finalizar pagamento</button>
              <button type="button" onClick={handlePaymentTodelivery}>
                Voltar para a entrega
              </button>
            </div>
          </form>
        </>
      )}
      {orderCompletedIsActive && isSuccess && (
        <>
          {isLoading ? (
            <p>Finalizando o pagamento</p>
          ) : (
            <>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
              <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </p>
              <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
              <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
              <button type="button" onClick={handleCloseOrder}>
                Concluir
              </button>
            </>
          )}
        </>
      )}
    </S.CheckoutContainer>
  );
};
