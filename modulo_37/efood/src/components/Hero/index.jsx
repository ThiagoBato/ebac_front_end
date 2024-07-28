import * as S from './styles';

export const Hero = ({ bgImg, type, name }) => {
  return (
    <S.HeroImg $backgroundImage={bgImg}>
      <S.Container>
        <S.HeroImgInfo>
          <span>{type}</span>
          <h2>{name}</h2>
        </S.HeroImgInfo>
      </S.Container>
    </S.HeroImg>
  );
};
