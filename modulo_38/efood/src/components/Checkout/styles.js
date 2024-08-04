import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const CheckoutContainer = styled.div`
  h3 {
    color: ${colors.tertiary};
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 16px;
  }
  .input-group {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 16px;
    gap: 0 34px;

    &.input-group--nowrap {
      flex-flow: nowrap;
    }
  }
  .input-group:last-child {
    margin: 24px 0 0;
  }

  .input--flex-grow {
    flex-grow: 1;
  }

  .input--flex-basis87 {
    flex-basis: 87px;
  }

  label {
    color: ${colors.tertiary};
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    color: ${colors.quinary};
    background-color: ${colors.tertiary};
    border: 1px solid ${colors.tertiary};
    height: 32px;
    padding: 8px;
  }

  p {
    color: ${colors.tertiary};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
  }

  button {
    background-color: ${colors.tertiary};
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: 8px;
    padding: 4px;
    border: none;
    color: ${colors.primary};
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    transition: 0.5s ease;

    &:hover {
      color: #ffebd9;
      background-color: #e66767;
    }
  }
`;
