import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import tupacOne from './images/tupac1.webp'
import biggieOne from './images/Biggie1.jpg'
import metallica1 from './images/metallica1.jpg'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <section id="two-pac-section">
          <article id="two-pac-article">
            <h1>All about 2Pac</h1>
            <p> lLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          </article>
          {/* <img src={tupacOne} ></img> */}
        </section>

        <section id="biggie-section">
          <article id="biggie-article">
            <h1>Biggie</h1>
            <p> Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring</p>
          </article>
          {/* <img src={biggieOne} ></img> */}
        </section>

        <section id="metallica-section">
          <article id="metallica-article">
            <h1>Metallica</h1>
            <p> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
          </article>

          {/* <img src={metallica1} ></img> */}
        </section>
      </div>
    );
  }
}

export default HomePage;
