import * as S from './styles';
import logo from '../../assets/images/logo.svg';

export const InnerHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <S.HeaderInfo>
          <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
          <img src={logo} alt="Logo efood" />
          <span>0 produto(s) no carrinho</span>
        </S.HeaderInfo>
      </S.Container>
    </S.Header>
  );
};
