import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
describe('<Button />', function () {
    it('should render without throwing an error', function () {
        expect(shallow(React.createElement(Button, null)).find('.btn')).toHaveLength(1);
    });
});
//# sourceMappingURL=Button.test.js.map