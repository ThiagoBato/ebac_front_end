import * as S from './styles';
import logo from '../../assets/images/logo.svg';

export const HomeHeader = () => {
  return (
    <S.Header>
      <img src={logo} alt="Logo" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </S.Header>
  );
};
