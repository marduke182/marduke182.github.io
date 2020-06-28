import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Wrapper, Header, Content } from '../components';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`About Me | ${config.siteTitle}`} />
        <Header />
        <Wrapper>
          <Content>
            <div className="Resume">
              {/*https://www.thebalancecareers.com/guidelines-for-what-to-include-in-a-resume-2061035*/}
              <section className="Resume-identification" style={{ textAlign: 'right' }}>
                <p>
                  <b>Jesús Quintana</b>
                  <br />
                  <span>Barcelona, Spain</span>
                  <br />
                  <span className="only-print">+34 666 348 158</span>
                  <br />
                  <span className="only-print">jrqb182@gmail.com</span>
                  <br />
                  <span className="only-print">jquintanab.com</span>
                </p>
              </section>
              <section className="Resume-objective">
                <h3>Summary overview</h3>
                <p>
                  Software Engineer looking for a position at an innovative company, where I can apply my seven years of developer
                  experience to improve the experience of users.
                </p>
                <p>
                  My passion is building software with cutting-edge technologies, TDD,.. in the company of an amazing team of like-minded
                  people, who love to learn and grow professionally together
                </p>
              </section>
              <section className="Resume-experience">
                <h3>Work History</h3>
                <article>
                  <header>
                    <h4>
                      <b>Senior Software Engineer</b>, Atlassian, January 2019 - present.
                    </h4>
                  </header>
                  <section>
                    <ul>
                      <li>
                        Working on the Editor Team. This is the WYSWYG text editor used by Jira and Confluence.{' '}
                        <a href="https://bitbucket.org/atlassian/atlaskit-mk-2/src/master/" target="_bitbucket">
                          Atlaskit Bitbucket
                        </a>
                      </li>
                    </ul>
                  </section>
                </article>
                <article>
                  <header>
                    <h4>
                      <b>Senior Software Engineer</b>, Digital Origin, Fenbruary 2016 - October 2018.
                    </h4>
                  </header>
                  <section>
                    <ul>
                      <li>Developed TDD guidelines and create architecture to develop isolate frontend E2E tests.</li>
                      <li>Develop our internal shared component libraries.</li>
                      <li>Promote and implement docker in all company projects.</li>
                      <li>Bring new front-end architecture to all our projects, migrating old apps and builds to React and Webpack.</li>
                    </ul>
                  </section>
                </article>
                <article>
                  <header>
                    <h4>
                      <b>Senior Software Engineer</b>, Freelancer, October 2013 - January 2017.
                    </h4>
                  </header>
                  <section>
                    <ul>
                      <li>Improve technical skills working on interesting projects.</li>
                      <li>Use and learn cutting-edge technologies to develop high-quality products</li>
                      <li>Develop soft skill talking with the client and taking his priorities into account.</li>
                    </ul>
                  </section>
                </article>
                <article>
                  <h4>
                    <b>Senior Software Engineer</b>, Tiqueteo Spain S.L, November 2013 - February 2016.
                  </h4>
                  <section>
                    <ul>
                      <li>Communicate new ideas and technologies to improve code quality and maintenance.</li>
                      <li>Worked collaboratively with a cross-functional team to deliver value in a timely and accurate manner.</li>
                      <li>Promote and start the migration of our backend to our "microservice" architecture.</li>
                    </ul>
                  </section>
                </article>
                <article>
                  <h4>
                    <b>Functional Manager</b>, Synergy Global Business, January 2012 - September 2013.
                  </h4>
                  <section>
                    <ul>
                      <li>Lead team of 4 web developers building modern applications for ~50k concurrent users.</li>
                      <li>Estimated, planned and made final proposal to end client hand to hand with CTO.</li>
                    </ul>
                  </section>
                </article>
                <article>
                  <h4>
                    <b>Software Engineer</b>, Synergy Global Business, June 2011 - January 2012.
                  </h4>
                  <section>
                    <ul>
                      <li>Developed and delivered multiple web and android applications</li>
                    </ul>
                  </section>
                </article>
              </section>
              <section className="Resume-education">
                <h3>Education</h3>
                <article>
                  <p>
                    <b>Master on project management</b>, EAE Business School, 2014.
                  </p>
                </article>
                <article>
                  <p>
                    <b>Engineer's degree in Computer Science</b>, Universidad Experimental Simón Bolívar, 2010.
                  </p>
                </article>
              </section>
              <section className="Resume-skills">
                <h3>Technical Skills</h3>
                <sub>Strong skills*</sub>
                <dl>
                  <dt>Languages:</dt>
                  <dd>JavaScript/Node, Java, Bash</dd>
                  <dt>JS Tools/Frameworks:</dt>
                  <dd>React, Webpack, Gulp</dd>
                  <dt>Others:</dt>
                  <dd>Docker, TDD, CircleCi</dd>
                </dl>
                <p>
                  {' '}
                  Experienced in finding the right tool for the job, quickly learning the essentials and becoming proficient in it, no
                  matter the domain area, eg. frontend/ backend/mobile, etc.
                </p>
              </section>
            </div>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
