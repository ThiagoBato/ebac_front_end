import * as Styled from './styles';
import logo from '../../../public/images/logo.svg';
import headerImg from '../../../public/images/bg-header-la-dolce-vita-trattoria.jpg';

export const InnerHeader = () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.HeaderInfo>
          <span>Restaurantes</span>
          <img src={logo} alt="Logo efood" />
          <span>0 produto(s) no carrinho</span>
        </Styled.HeaderInfo>
      </Styled.Container>

      <Styled.HeaderImage $backgroundImage={headerImg}>
        <Styled.Container>
          <Styled.HeaderImageInfo>
            <span>Italiana</span>
            <h2>La Dolce Vita Trattoria</h2>
          </Styled.HeaderImageInfo>
        </Styled.Container>
      </Styled.HeaderImage>
    </Styled.Header>
  );
};
