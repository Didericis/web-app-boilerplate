import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Form from './form.jsx';

describe('<Form/>', () => {
  def('props', () => ({
  }));
  def('wrapper', () => <Form {...$props}/>);

  describe('#render', () => {
    it('does not raise any errors', () => {
      expect(() => { $wrapper }).not.to.throw();
    });
  });
});

