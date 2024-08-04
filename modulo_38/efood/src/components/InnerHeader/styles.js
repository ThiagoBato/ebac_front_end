import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgTop from '../../assets/images/bg-top.svg';
import { colors } from '../../GlobalStyle';

export const Header = styled.header`
  background-image: url(${bgTop});
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 64px 0;

  font-size: 18px;
  font-weight: 900;
  line-height: 20px;
  color: ${colors.primary};

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 20px;
    flex-flow: column wrap;
    gap: 8px;
    justify-content: center;
  }

  a {
    cursor: pointer;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  transition: 0.5s ease-in-out;
  min-width: 200px;

  &:hover {
    color: ${colors.secondary};
  }

  @media screen and (max-width: 1024px) {
    min-width: 0;
  }
`;

export const HeaderImage = styled.div`
  color: ${colors.secondary};
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-position: center;
`;
export const HeaderImageInfo = styled.div`
  display: flex;
  gap: 32px 0;
  align-items: start;
  justify-content: space-around;
  flex-flow: column wrap;
  min-height: 280px;

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
