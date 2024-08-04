import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Main = styled.main`
  background-color: ${colors.secondary};
  padding: 80px 0 120px;

  @media screen and (max-width: 1024px) {
    padding: 20px;
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
