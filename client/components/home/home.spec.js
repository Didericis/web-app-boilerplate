import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from './home.jsx';

describe('<Home/>', () => {
  def('props', () => ({
  }));
  def('wrapper', () => shallow(<Home {...$props}/>));

  describe('#render', () => {
    it('does not raise any errors', () => {
      expect(() => { $wrapper }).not.to.throw();
    });
  });
});

