import { BarLoader } from 'react-spinners';

import * as S from './styles';
import { colors } from '../../GlobalStyle';

export const Loader = () => {
  return (
    <>
      <S.LoaderContainer>
        <BarLoader color={colors.primary} />
      </S.LoaderContainer>
    </>
  );
};
