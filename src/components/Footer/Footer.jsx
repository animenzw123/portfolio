import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          
                <a
                 
                  href={'https://www.linkedin.com/in/wei-zhang-047b891b9/'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label='linkedin'
                >
                  <i className={`fa fa-linkedin`} />
                </a>
                <a
                 
                  href={'https://github.com/animenzw123'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label='github'
                >
                  <i className={`fa fa-github`} />
                </a>

         
        </div>
        <hr />
        <p className="footer__text">
          Noah Zhang's portfolio
        </p>

        {/* {isEnabled && <GithubButtons />} */}
      </Container>
    </footer>
  );
};

export default Footer;
