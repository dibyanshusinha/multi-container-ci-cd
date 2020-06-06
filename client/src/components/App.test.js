/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import App from '../App';

import Dash from '../pages/dashboard';


configure({ adapter: new Adapter() });

// Renders whole page
test('renders content on home page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});


// Renders just specific component and child

describe('Dashboard Page', () => {
  const wrapper = shallow(<Dash />);
  test('has h2 listed', () => {
    expect(wrapper.contains(<h2 className="auto p15">Hello</h2>)).toEqual(true);
  });
});


describe('NavBar Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('has menu listed', () => {
    // wrapper.setProps({to: ''});
    expect(wrapper.find('.menu')).toHaveLength(1);
    expect(wrapper.find('.menu').children()).toHaveLength(2);
  });
});


// Test all these things
// Rendering
// Interactions
// Lifecycles
