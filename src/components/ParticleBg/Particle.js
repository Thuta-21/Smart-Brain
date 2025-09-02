import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class ParticleBg extends Component {

  render () {
    return (
      <>
        <ParticlesBg type="cobweb" num={25} bg={true} />
      </>
    )
  }
}

export default ParticleBg;