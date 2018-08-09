import React, { Component } from 'react';
import Projects from './projects';
import Hero from './hero/hero.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Projects />
      </div>
    );
  }
}
