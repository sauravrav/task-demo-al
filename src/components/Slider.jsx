import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Example = () => {
  return (
    <section className="hero" id="home">
      <AwesomeSlider
      style={{height: '80vh'}}
      media={[
        {
          source: '/images/al.jpg',
        },
        {
          source: '/images/bl.jpeg',
        },
        {
          source: '/images/cl.jpeg',
        },
      ]}
      />
    </section>
  );
};

export default Example;
