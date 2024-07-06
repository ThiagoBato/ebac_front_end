import styled from 'styled-components';

export const Header = styled.header`
  background-image: url('../../../public/images/bg-top.svg');
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 138px;
  justify-content: space-between;
  padding: 40px 0;

  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  img {
    max-width: 125px;
  }

  p {
    color: #e66767;
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    max-width: 540px;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
