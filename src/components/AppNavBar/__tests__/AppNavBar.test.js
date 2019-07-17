import React from 'react';
import { shallow, mount } from 'enzyme';
import AppNavBar from '../AppNavBar';

describe('AppNavBar', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AppNavBar debug />);

    expect(component).toMatchSnapshot();
  });

  it('should be contain active className when route clicked', () => {
    const wrapper = mount(<AppNavBar />);
    expect(wrapper.state().isOpen).toBeTruthy();

    const instance = wrapper.instance();
    instance.toggle();
    expect(wrapper.state().isOpen).toBeFalsy();

    // console.log(component.find('[data-testid="my_notes"]').debug());
    // const link = component.find('[data-testid="my_notes"]').at(0);

    // link.simulate('click');

    // expect(component.find('.active').length).toBe(1);
    // console.log(component.find('.active').debug());
    // // console.log(link.debug());
    // // expect(component).toMatchSnapshot();
    // // component.unmount();
    // expect(link.hasClass('a')).toBe(true);
  });

  it('toggle method should change the state', () => {
    const wrapper = mount(<AppNavBar />);

    const instance = wrapper.instance();
    instance.toggle();
    expect(wrapper.state().isOpen).toBeFalsy();
  });
});
