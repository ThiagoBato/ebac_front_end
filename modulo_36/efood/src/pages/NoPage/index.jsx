import * as S from './styles';
import { HomeHeader } from '../../components/HomeHeader';

const NoPage = () => {
  return (
    <>
      <HomeHeader />
      <S.Main>
        <h2>Oops!</h2>
        <p>Página não encontrada!</p>
        <a href="/">Voltar para a página inicial</a>
      </S.Main>
    </>
  );
};

export default NoPage;
