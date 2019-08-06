import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('should render without throwing an error', function () {
      expect(shallow(<Button />).find('.btn')).toHaveLength(1);
  });
});