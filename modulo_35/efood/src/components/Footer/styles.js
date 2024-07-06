import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #ffebd9;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  padding: 40px 0;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  ul {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;

    li {
      line-height: 1;
      a {
        display: block;
        line-height: 1;
        transition: opacity 0.5s ease-in-out;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  p {
    color: #e66767;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    max-width: 480px;
    text-align: center;
  }
`;
