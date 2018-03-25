import { store } from './index.js';
import { expect } from 'chai';

describe('store', () => {
  subject('store', () => store($state));

  context('when no initial state is given', function() {
    def('state', () => undefined);

    it('does not throw an error', function() {
      expect(() => $store).not.to.throw();
    });
  });
});
