import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Wrapper, Header, Content } from '../components';
import { Link } from '@reach/router';
import formatDistance from 'date-fns/formatDistance';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

function calculateAge(birthdate: Date) {
  return formatDistance(birthdate, Date.now());
}
export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`About Me | ${config.siteTitle}`} />
        <Header />
        <Wrapper>
          <Content>
            <article>
              <section id="me">
                <h3>Hi! It's me! Jesús</h3>
                <p>
                  I am a citizen of planet earth, with {calculateAge(new Date(1987, 0, 19))} old I have had the pleassure to live in{' '}
                  <strong>Caracas</strong> for 25 years, <strong>Barcelona (Spain)</strong> for 6 years and now in <strong>Sydney</strong>.
                </p>
                <p>
                  I was born in Caracas, where I graduated as Software Engineer at Simón Bolívar University, free and high quality education
                  I have to say (•̀ᴗ•́)و ̑̑, I have been working as Software Engineer since then. Starting in a small company in Venezuela,
                  moving to a couple of startups in Barcelona and finally start working in a big company as Atlassian,{' '}
                  <Link to="/resume">read more</Link>.
                </p>
              </section>
              <section id="hobbies">
                <h4>Hobbies</h4>
                <p>
                  I really like stay at home and watch some random TV Shows, play my video games or just read a book. It so relaxing having
                  time with myself (I am getting old I know 😔). When I am not too lazy, I like to go outside and do some excercise or
                  sport.
                </p>
                <p>
                  I use to play a lot of Volleyball back in the University and I really liked it. However, I am not what I used to be. I
                  dont play as much as I liked, but I am always looking for ways to hit some ball.
                </p>
                <p>
                  In addition to sports, I aim to exercise at least 4 times a week, I have tried everything where Crossfit has been the most
                  successful. This change since I move to Australia, here the Crossfit is too expensive and I am not in the best shape, so I
                  choose to do normal gym. When this doesn`t work, I bought a Tacx indoor trainer and has been my best partner since then.
                  Dont take me wrong I am keen to start Crossfit again.
                </p>
                <p>
                  Finally, I got into the business of boardgames {calculateAge(new Date(2016, 8, 8))} ago, I totally blame Pandemic and
                  Catan. I left my small collection in Spain, but I have started another collection in Australia, where Arkham Horror LCG is
                  the main game.
                </p>
              </section>
            </article>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
