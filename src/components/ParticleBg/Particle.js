import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class ParticleBg extends Component {

  render () {
    return (
      <>
        <ParticlesBg type="polygon" bg={true} />
      </>
    )
  }
}

export default ParticleBg;