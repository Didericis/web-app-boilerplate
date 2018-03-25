import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PublicLayout from './public_layout.jsx';

describe('<PublicLayout/>', () => {
  def('props', () => ({
  }));
  def('wrapper', () => <PublicLayout {...$props}/>);

  describe('#render', () => {
    it('does not raise any errors', () => {
      expect(() => { $wrapper }).not.to.throw();
    });
  });
});

