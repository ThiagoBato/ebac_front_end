import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Main = styled.main`
  background-color: ${colors.secondary}8f2;
  padding: 80px 0 120px;

  @media screen and (max-width: 1024px) {
    padding: 40px 20px;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-flow: row wrap;

  justify-content: center;
  gap: 48px 80px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

export const MenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 32px;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  flex: 0 0 320px;
`;
