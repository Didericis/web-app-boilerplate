import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import NotFound from 'components/not_found';

describe('<NotFound />', () => {
  def('wrapper', () => shallow(<NotFound />));

  describe('#render', () => {
    it('does not raise any errors', () => {
      expect(() => { $wrapper }).not.to.throw();
    });

    it('says "Not Found"', () => {
      expect($wrapper.text()).to.include('Not Found');
    });
  });
});

