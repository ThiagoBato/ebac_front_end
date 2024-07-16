import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../GlobalStyle';

export const RestaurandCard = styled.div`
  max-width: 472px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 216px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageTextContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  flex-flow: row wrap;
`;

export const ImageText = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  padding: 6px 4px;
`;

export const InfoContainer = styled.div`
  background-color: ${colors.secondary};
  border: 1px solid #e66767;
  border-top: none;
  padding: 8px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  gap: 10px;
`;
export const Title = styled.span`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`;
export const Description = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  margin: 16px 0;

  &.ellipsis {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Button = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  display: inline-block;
  padding: 6px 4px;
  text-decoration: none;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }
`;
