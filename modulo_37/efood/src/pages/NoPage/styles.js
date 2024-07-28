import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  justify-content: space-between;
  margin: 50px auto;
  text-align: center;

  h2 {
    color: ${colors.primary};
  }

  a {
    color: ${colors.primary};
  }
`;
