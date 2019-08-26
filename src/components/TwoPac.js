import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import tupac2 from './images/tupac2.jpg'

export class TwoPac extends Component {
  render() {
    return (
      <div>
        <section className="two-pac-section">
          <article className="two-pac-article">
            <h1>2Pac</h1>
            <p> lLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          </article>
          <article className="record-article">

            <h1>previous record</h1>
            <p>Following his October 1995 release from prison, Tupac returned to California and began making music for Death Row. In August 1996, his The Don Killuminati: The 7 Day Theory album was recorded and mixed in seven days. The album, credited to Tupac's alter ego Makaveli, hit No. 1 when it was released after his death.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default TwoPac;
