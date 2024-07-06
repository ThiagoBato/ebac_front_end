import * as Styled from './styles';
import { InnerHeader } from '../../components/InnerHeader';
import { Products } from '../../components/Products';

const Profile = () => {
  return (
    <>
      <InnerHeader />
      <Styled.Main>
        <Styled.Container>
          <Products></Products>
        </Styled.Container>
      </Styled.Main>
    </>
  );
};

export default Profile;
