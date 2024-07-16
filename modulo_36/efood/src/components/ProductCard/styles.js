import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const ProductCardContainer = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  max-width: 320px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

export const ProductCardInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const ProductCardTitle = styled.h4`
  color: ${colors.secondary};
  font-size: 16px;
  font-weight: 900;
  line-height: 16px;
  margin: 8px 0 0;
`;

export const ProductCardDescription = styled.p`
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductCardButton = styled.a`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;

  padding: 4px 0;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }
`;
