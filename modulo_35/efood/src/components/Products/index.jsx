import * as Styled from './styles';
import { ProductCard } from '../ProductCard';
import pizzaMarguerita from '../../../public/images/pizza-marguerita.jpg';

export const Products = () => {
  return (
    <Styled.ProductsContainer>
      <ProductCard imageSrc={pizzaMarguerita} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
      <ProductCard imageSrc={pizzaMarguerita} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
      <ProductCard imageSrc={pizzaMarguerita} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
      <ProductCard imageSrc={pizzaMarguerita} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
      <ProductCard imageSrc={pizzaMarguerita} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
      <ProductCard imageSrc={pizzaMarguerita} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
    </Styled.ProductsContainer>
  );
};
