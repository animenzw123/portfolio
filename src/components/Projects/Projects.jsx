import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Individual Projects" />
         <div>

         <Row >
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{'Code Pencil'}</h3>
                      <div>
                        <p dangerouslySetInnerHTML={{__html: 'Code Pencil is an online Javascript editor based on <Strong>React, TypeScipt</Strong>.'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'It uses <Strong>ESbuild</Strong> to achieve <Strong>compiling</Strong> and <Strong>bundling</Strong> in the browser environment. It enable the browser to understand advanced JS syntax such as ES6.'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'It uses <Strong>UNPKG</Strong> CDN service to ensure that users can import any <Strong>npm</Strong> package to their code'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'It contains Markdown editor, which supports users to make notes'}}/>
                      </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/animenzw123/CodePencil'}
                        >
                          Source Code
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://code-pencil.netlify.app/'}
                        >
                          View Demo
                        </a>
                    </div>
                  </Fade>
                </Col>
                
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                      
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={'Invalid Pic Resource'} filename={'codepencil.png'} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
              <hr/>
              <br/>
              <br/>
              <Row >
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{'Data Vision'}</h3>
                      <div>
                        <p dangerouslySetInnerHTML={{__html: 'Data Vision is a business management tool. It provides a variety of <Strong>data visualization</Strong> features, which helps the managers to identify the financial trend and project schedule of their business.'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'The UI layout is developed with <Strong>React, sass</Strong> and <Strong>bootstrap</Strong>. It uses <Strong>react-router</Strong> to navigate between components, and uses <Strong>Loadable</Strong> to apply dynamic import to improve performance.'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'It uses <Strong>NVD3</Strong> and <Strong>Devextreme</Strong> to draw the complex charts and tables.'}}/>

                      </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/animenzw123/DataVision'}
                        >
                          Source Code
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://data-vision-noah.netlify.app/'}
                        >
                          View Demo
                        </a>
                    </div>
                  </Fade>
                </Col>
                
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                      
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={'Invalid Pic Resource'} filename={'datavision.png'} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
              <hr/>
              <br/>
              <br/>
              <Row >
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{'Creation'}</h3>
                      <div>
                        <p>
                          {'Creation is a blog website demo.'}
                        </p>
                        <p dangerouslySetInnerHTML={{__html: 'It is a front-end project which based on <Strong>React</Strong>. It applied <Strong>Redux-thunk, Styled-components, CSS-transition, React-router-dom</Strong> etc technologies inside the project.'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'It is a scalable project with elegant code structure. <Strong>Modular programming</Strong> has been strictly applied in this project'}}/>
                        

                      </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/animenzw123/Creation'}
                        >
                          Source Code
                        </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                      
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={'Invalid Pic Resource'} filename={'Creation.png'} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
              <hr/>
              <br/>
              <br/>
              <Row >
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{'SaveCoral'}</h3>
                      <div>
                      <p dangerouslySetInnerHTML={{__html: 'SaveCoral is a web application built by a team of 4 members. It is based on <Strong>Bootstrap</Strong> and <Strong>node.js</Strong>.'}}/>
                      <p dangerouslySetInnerHTML={{__html: 'It is committed to providing <Strong>primary school students</Strong> in Australia with knowledge of coral protection. So designing an <Strong>attractive</Strong> and <Strong>kids-friendly UI</Strong> is the biggest challenge'}}/>
                      <p dangerouslySetInnerHTML={{__html: 'I have not only built the project, but also made a lot effort on UI/UX design'}}/>

                      

                     
                        <p className="mb-4">{''}</p>
                      </div>
   
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/animenzw123/savecoral'}
                        >
                          Source Code
                        </a>
                      
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                    
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={'title'} filename={'SaveCoral.png'} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
              </div>

              
        </div>
      </Container>
    </section>
  );
};

export default Projects;
