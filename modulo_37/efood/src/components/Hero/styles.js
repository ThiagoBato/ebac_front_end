import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const HeroImg = styled.div`
  color: ${colors.secondary};
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const HeroImgInfo = styled.div`
  display: flex;
  gap: 32px 0;
  align-items: start;
  justify-content: space-around;
  flex-flow: column wrap;
  min-height: 280px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    min-height: auto;
    padding: 20px;
  }

  span {
    font-size: 32px;
    font-weight: 100;
    line-height: 36px;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    line-height: 36px;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }
`;
