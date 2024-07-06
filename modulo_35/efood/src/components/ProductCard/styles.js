import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  background-color: #e66767;
  padding: 8px;
  max-width: 320px;
`;

export const ProductCardInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const ProductCardTitle = styled.h4`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 900;
  line-height: 16px;
  margin: 8px 0 0;
`;

export const ProductCardDescription = styled.p`
  color: #ffebd9;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0;
`;

export const ProductCardButton = styled.a`
  background-color: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;

  padding: 4px 0;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #e66767;
    color: #ffebd9;
  }
`;
