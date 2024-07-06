import * as Styled from './styles';
import { HomeHeader } from '../../components/HomeHeader';

const NoPage = () => {
  return (
    <>
      <HomeHeader />
      <Styled.Main>
        <h2>Oops!</h2>
        <p>Página não encontrada!</p>
        <a href="/">Voltar para a página inicial</a>
      </Styled.Main>
    </>
  );
};

export default NoPage;
