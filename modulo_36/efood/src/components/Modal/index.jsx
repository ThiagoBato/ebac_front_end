import * as S from './styles';
import close from '../../assets/images/close-modal.svg';
import { useParams } from 'react-router-dom';

export const Modal = ({ className, handleCloseModal, productImgUrl, productTitle, productDescription, productSize, productPrice }) => {
  const { id } = useParams();
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
              <a>Adicionar ao carrinho - R$ {productPrice.toFixed(2)}</a>
            </div>
          </S.ModalContent>
        </S.ModalContainer>
        <S.ModalOverlay onClick={handleCloseModal} />
      </S.Modal>
    </>
  );
};
