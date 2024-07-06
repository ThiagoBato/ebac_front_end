import * as Styled from './styles';
import logo from '../../../public/images/logo.svg';

export const HomeHeader = () => {
  return (
    <Styled.Header>
      <img src={logo} alt="Logo" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </Styled.Header>
  );
};
