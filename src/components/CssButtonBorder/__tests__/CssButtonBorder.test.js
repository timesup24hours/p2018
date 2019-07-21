import React from 'react';
import { shallow, mount } from 'enzyme';

import { CssButtonBorder } from '../CssButtonBorder';

describe('MyNotes.test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CssButtonBorder />);

    expect(component).toMatchSnapshot();
  });

  it('should be rendered Looding component', () => {
    const wrapper = shallow(<CssButtonBorder />);
    expect(wrapper.contains('Mortgage')).toBeTruthy();
  });

  it('should be click the button', () => {
    const push = jest.fn();
    const wrapper = mount(<CssButtonBorder />);
    wrapper.setProps({ history: { push } });

    wrapper.find('[data-testid="click"]').simulate('click');
    expect(push).toBeCalled();
  });
});
