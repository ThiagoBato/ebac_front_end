import * as S from './styles';
import { Modal } from '../Modal';
import { useState } from 'react';

export const ProductCard = ({ productId, productImg, productTitle, productDescription, productSize, productPrice, handleAddToOrder }) => {
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <S.ProductCardContainer>
        <img src={productImg} alt={productTitle} />
        <S.ProductCardInfoContainer>
          <S.ProductCardTitle>{productTitle}</S.ProductCardTitle>
          <S.ProductCardDescription>{productDescription}</S.ProductCardDescription>
          <S.ProductCardButton onClick={() => handleModal(productId)}>Adicionar ao carrinho</S.ProductCardButton>
        </S.ProductCardInfoContainer>
      </S.ProductCardContainer>
      {modal && selectedProduct && (
        <Modal
          className={modal ? 'visible' : ''}
          handleCloseModal={handleCloseModal}
          productImgUrl={productImg}
          productTitle={productTitle}
          productDescription={productDescription}
          productSize={productSize}
          productPrice={productPrice}
          handleAddToOrder={handleAddToOrder}
        />
      )}
    </>
  );
};
