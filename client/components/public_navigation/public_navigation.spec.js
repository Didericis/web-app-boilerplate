import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link }  from 'react-router-dom';

import { PUBLIC } from 'constants/routes';
import PublicNavigation from './public_navigation.jsx';

describe('<PublicNavigation/>', () => {
  def('props', () => ({
  }));
  def('wrapper', () => shallow(<PublicNavigation {...$props}/>));

  describe('#render', () => {
    it('does not raise any errors', () => {
      expect(() => { $wrapper }).not.to.throw();
    });

    it('displays a login link', () => {
      expect(
        $wrapper.find(Link).find({ to: PUBLIC.login }).exists()
      ).to.be.true;
    });
    
    it('displays a sign up link', () => {
      expect(
        $wrapper.find(Link).find({ to: PUBLIC.signUp }).exists()
      ).to.be.true;
    });
  });
});

