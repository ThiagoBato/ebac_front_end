import * as S from './styles';
import close from '../../assets/images/close-modal.svg';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../App';

export const Modal = ({ className, handleCloseModal, productImgUrl, productTitle, productDescription, productSize, productPrice, handleAddToOrder }) => {
  const { id } = useParams();
  const handleAddToOrderAndClose = () => {
    handleAddToOrder();
    handleCloseModal();
  };

  return (
    <>
      <S.Modal className={className}>
        <S.ModalContainer>
          <S.ModalCloseBtn onClick={handleCloseModal}>
            <img src={close} alt="Fechar" />
          </S.ModalCloseBtn>
          <S.ModalContent>
            <div>
              <img src={productImgUrl} alt={id} />
            </div>
            <div>
              <h3>{productTitle}</h3>
              <p>{productDescription}</p>
              <p>Serve: {productSize}</p>
              <a onClick={handleAddToOrderAndClose}>Adicionar ao carrinho - R$ {formatPrice(productPrice)}</a>
            </div>
          </S.ModalContent>
        </S.ModalContainer>
        <S.ModalOverlay onClick={handleCloseModal} />
      </S.Modal>
    </>
  );
};
