import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Wrapper, Header, Content } from '../components';
import { Link } from '@reach/router';
import formatDistance from 'date-fns/formatDistance'

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
            <article >
              <section id='me'>
                <h3>Hi! It's me! Jesús</h3>
                <p>
                I am a citizen of planet earth, with {calculateAge(new Date(1987,0,19))} old 
                I have had the pleassure to live in <strong>Caracas</strong> for 25 years,{' '} 
                <strong>Barcelona (Spain)</strong> for 6 years and now in <strong>Sydney</strong>.
                </p>
                <p>
                  I was born in Caracas, where I graduated as Software Engineer at Simón Bolívar University,
                  free and high quality education I have to say (•̀ᴗ•́)و ̑̑, I have been working as Software Engineer
                  since then. Starting in a small company in Venezuela, moving to a couple of startups in Barcelona 
                  and finally start working in a big company as Atlassian, <Link to="/resume">read more</Link>.
                </p>
                
              </section>
              <section id='inmigration'>
                <h4>My inmigration journey</h4>
                <blockquote>TLDR: Hugo Chavez govemernt, socialism politics and insecurity in my country forces me to leave.</blockquote>
                <p>
                  As many Venezuelan people nowadays, I had to inmigrate, looking for a better opportunity in other countries,
                  I always liked Australia as a country, I dont know why to be honest, but I invest a lot of time looking for
                  ways to come. Short story, to expensive and I use to have a low english level so it makes everything hard. 
                </p>

                <p>
                  My second option was Spain, I had a lot of friends living there and the options to work as a foreign student was promising.
                  I ends doing a master on Project Management in Barcelona and I was working on my first week. I got two jobs there and the second
                  one helps me a lot to improve my english, this helping a lot to got a job at Sydney.
                </p>
                <p>
                  Finally, after 6 years since I left Venezuela I arrived to Sydney. It is funny how the life helps you in misterious ways.
                  I got my job at Atlassian for series of non common events. <strong>TLDR; Never stays in the confort zone.</strong> 
                </p>
              </section>
              <section id='hobbies'>
                <h4>Hobbies</h4>
                <p>
                  I really like stay at home and watch some random TV Shows, or play my video games or just read a book. It so relaxing having
                  time with myself (I am getting old I know 😔). When I am not too lazy, I like to go outside and do some excercise or sport.
                </p>
                <p>
                  I use to play a lot of Volleyball back in the University, I had my skills, but I lost it 😢. However, I can enjoy playing 
                  social from time to time.
                </p>
                <p>
                  I do excercise most of my afternoon, I have tried a lot of routines, Although, Crossfit has been the most sucessfull, now I am more focused 
                  on cardio (running or ciclyng) and sometimes add weights to my training, I am keen to start crossfit again, but it's too expensive and 
                  I dont have a Box close to my house 😔.
                </p>
                <p>
                  Finally, I got in love of boardgames like {calculateAge(new Date(2016,8,8))} ago, I blame Pandemic and Catan, after
                  playing those games I got addict and started having my own collection, right now my favorite boardgames are: Terraforming Mars,
                  Gloomhaven and Spirit Island. 
                </p>
              </section>
            </article>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
