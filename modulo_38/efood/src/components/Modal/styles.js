import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Modal = styled.div`
  color: ${colors.primary};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    position: absolute;
  }
`;
export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 0;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.primary};
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
  position: relative;
  z-index: 1;
`;
export const ModalCloseBtn = styled.a`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const ModalContent = styled.div`
  color: ${colors.secondary};
  display: flex;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
    gap: 16px;
    text-align: center;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 20px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    &:last-of-type {
      margin-top: 20px;
    }
  }

  a {
    background-color: ${colors.tertiary};
    color: ${colors.primary};
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 16px;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    transition: 0.5s ease;

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.tertiary};
    }
  }
`;
