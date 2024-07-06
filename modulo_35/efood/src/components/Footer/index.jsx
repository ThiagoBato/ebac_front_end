import * as Styled from './styles';
import logo from '../../../public/images/logo.svg';
import instagramLogo from '../../../public/images/instagram-round.svg';
import facebookLogo from '../../../public/images/facebook-round.svg';
import twitterLogo from '../../../public/images/twitter-round.svg';

export const Footer = () => {
  return (
    <Styled.Footer>
      <img src={logo} alt="Logo efood" />
      <ul>
        <li>
          <a href="#">
            <img src={instagramLogo} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebookLogo} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterLogo} alt="Twitter" />
          </a>
        </li>
      </ul>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
    </Styled.Footer>
  );
};
