import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const OrderContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 2;

  &.order-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`;

export const Aside = styled.aside`
  background-color: ${colors.primary};
  padding: 32px 8px;
  position: relative;
  max-width: 360px;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px 8px;
    width: 100%;
    margin-bottom: 40px;
  }

  li {
    color: ${colors.primary};
    background-color: ${colors.tertiary};
    display: flex;
    gap: 8px;
    padding: 8px;
    position: relative;
  }
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 20px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const RemoveOrderButton = styled.a`
  width: 16px;
  height: 16px;
  display: block;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  color: ${colors.tertiary};
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;

export const CheckoutButton = styled.button`
  background-color: ${colors.tertiary};
  width: 100%;
  display: block;
  text-align: center;
  margin: 16px 0;
  padding: 4px;
  border: none;
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    color: ${colors.tertiary};
    background-color: ${colors.primary};
  }
`;
