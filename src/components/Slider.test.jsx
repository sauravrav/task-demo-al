import React from 'react';
import { render } from '@testing-library/react';
import Slider from './Slider';

describe('Slider', () => {
  it('should render the component without errors', () => {
    const { getByTestId } = render(<Slider />);
    const component = getByTestId('Slider-component');
    expect(component).toBeInTheDocument();
  });

  it('should render the AwesomeSlider component with the correct media sources', () => {
    const { getByTestId } = render(<Slider />);
    const slider = getByTestId('awesome-slider');
    expect(slider).toBeInTheDocument();
    
    const mediaSources = [
      { source: '/images/al.jpg' },
      { source: '/images/bl.jpeg' },
      { source: '/images/cl.jpeg' },
    ];
    const sliderMedia = slider.querySelectorAll('.awssld__content > img');
    expect(sliderMedia).toHaveLength(mediaSources.length);

    sliderMedia.forEach((img, i) => {
      expect(img).toHaveAttribute('src', mediaSources[i].source);
    });
  });
});
