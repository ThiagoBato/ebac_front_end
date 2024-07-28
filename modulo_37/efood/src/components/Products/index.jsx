import * as S from './styles';
import { ProductCard } from '../ProductCard';

export const Products = ({ productId, productImg, productTitle, productDescription, productSize, productPrice, handleAddToOrder }) => {
  return (
    <S.ProductsContainer>
      <ProductCard productId={productId} productImg={productImg} productTitle={productTitle} productDescription={productDescription} productSize={productSize} productPrice={productPrice} handleAddToOrder={handleAddToOrder} />
    </S.ProductsContainer>
  );
};
