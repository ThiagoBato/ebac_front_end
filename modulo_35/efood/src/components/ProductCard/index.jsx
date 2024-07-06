import * as Styled from './styles';

export const ProductCard = ({ imageSrc, title, description }) => {
  return (
    <Styled.ProductCardContainer>
      <img src={imageSrc} alt="" />
      <Styled.ProductCardInfoContainer>
        <Styled.ProductCardTitle>{title}</Styled.ProductCardTitle>
        <Styled.ProductCardDescription>{description}</Styled.ProductCardDescription>
        <Styled.ProductCardButton>Adicionar ao carrinho</Styled.ProductCardButton>
      </Styled.ProductCardInfoContainer>
    </Styled.ProductCardContainer>
  );
};
