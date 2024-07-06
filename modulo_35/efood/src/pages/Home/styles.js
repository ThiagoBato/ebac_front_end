import styled from 'styled-components';

export const Main = styled.main`
  background-color: #fff8f2;
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
