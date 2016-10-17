import React from 'react';
import {isCompositeComponent, renderIntoDocument} from 'react-addons-test-utils';

import AppRoot from './app__root';

describe('AppRoot', () => {
  it('Should be component', () => {
    isCompositeComponent(renderIntoDocument(<AppRoot />)).should.be.true;
  });
});