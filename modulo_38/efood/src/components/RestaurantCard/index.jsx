import * as S from './styles';
import star from '../../assets/images/star-favorite.svg';

export const RestaurantCard = ({ id, backgroundImage, featured, type, title, stars, description }) => {
  return (
    <S.RestaurandCard>
      <S.ImageContainer>
        <S.Image src={backgroundImage} alt="" />
        <S.ImageTextContainer>
          {featured && <S.ImageText>Destaque da Semana</S.ImageText>}
          <S.ImageText>{type}</S.ImageText>
        </S.ImageTextContainer>
      </S.ImageContainer>
      <S.InfoContainer>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <S.Title>
            {stars}
            <img src={star} alt="Estrela" />
          </S.Title>
        </S.TitleContainer>
        <S.Description className={description.length > 272 ? 'ellipsis' : ''}>{description}</S.Description>
        <S.Button to={`/restaurante/${id}`}>Saiba Mais</S.Button>
      </S.InfoContainer>
    </S.RestaurandCard>
  );
};
