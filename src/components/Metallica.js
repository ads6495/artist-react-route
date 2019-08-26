import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Metallica extends Component {
  render() {
    return (
      <div>
        <section className="metallica-section">
          <article className="metallica-article">
            <h1>Metallica</h1>
            <p> Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
          </article>

          <article className="metallica-record-article">
            <h1>previous record</h1>
            <p>Hardwired... to Self-Destruct is the tenth studio album by American heavy metal band Metallica, released as a double album on November 18, 2016 by their vanity label Blackened Recordings. It is their first studio album in eight years following Death Magnetic (2008), marking the longest gap between two studio albums in the band's career. It is also their first studio album released through Blackened. Hardwired... to Self-Destruct was produced by Greg Fidelman, who engineered and mixed Death Magnetic.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default Metallica;
