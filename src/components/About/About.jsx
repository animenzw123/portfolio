import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={600} delay={500} distance="30px">
              <div className="about-wrapper__info">
                
                <p className="about-wrapper__info-text" dangerouslySetInnerHTML={{__html: 'I have just got my Master of IT degree from <Strong>Monash University</Strong>, and I am currently working as a <Strong>front-end developer</Strong> in Melbourne'}}/>
                <p className="about-wrapper__info-text" dangerouslySetInnerHTML={{__html: 'I am interested in <Strong>Web Development</Strong>, especially front-end development. Although I know <Strong>UI/UX designer</Strong> is a different position with <Strong>web developer</Strong>, I find it attractive to feel the needs of users. So I have done some research on UI/UX and implemented it on my web development.'}}/>
                <p className="about-wrapper__info-text">
                  {'On the other hand, I enjoy teamwork and I have experience in agile development. I believe that in the modern IT industry, not only the technical skills, but also the ability to communicate effectively are crucial to achieve excellent product delivery.'}
                </p>
                <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href='https://webdevnotes.netlify.app/'
                    >
                      My personal technical blog
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href='https://github.com/animenzw123'
                    >
                      Github
                    </a>
                  </span>
               
                  
                
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
