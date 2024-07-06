import * as Styled from './styles';
import star from '../../../public/images/star-favorite.svg';

export const RestaurantCard = ({ backgroundImage, featured = null, type, title, stars, description }) => {
  return (
    <Styled.RestaurandCard>
      <Styled.ImageContainer>
        <Styled.Image src={backgroundImage} alt="" />
        <Styled.ImageTextContainer>
          {featured && <Styled.ImageText>{featured}</Styled.ImageText>}
          <Styled.ImageText>{type}</Styled.ImageText>
        </Styled.ImageTextContainer>
      </Styled.ImageContainer>
      <Styled.InfoContainer>
        <Styled.TitleContainer>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Title>
            {stars}
            <img src={star} alt="Estrela" />
          </Styled.Title>
        </Styled.TitleContainer>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Button to="/Perfil">Saiba Mais</Styled.Button>
      </Styled.InfoContainer>
    </Styled.RestaurandCard>
  );
};

import PropTypes from 'prop-types';

RestaurantCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  featured: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
