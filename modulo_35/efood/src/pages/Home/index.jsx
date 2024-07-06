import { HomeHeader } from '../../components/HomeHeader';
import { Restaurants } from '../../components/Restaurants';
import * as Styled from './styles';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Styled.Main>
        <Styled.Container>
          <Restaurants />
        </Styled.Container>
      </Styled.Main>
    </>
  );
};

export default Home;
