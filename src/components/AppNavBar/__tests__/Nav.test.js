import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../Nav.tsx';

describe('Nav', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Nav debug />);

    expect(component).toMatchSnapshot();
  });

  it('should be able to call the fn when click', () => {
    const customhandleOnClick = jest.fn();
    const component = shallow(
      <Nav customhandleOnClick={customhandleOnClick} />
    );
    // console.log(component.find('[data-testid="my_notes"]').debug());
    const link = component.find('[data-testid="my_notes"]');
    link.simulate('click');

    expect(customhandleOnClick).toHaveBeenCalled();

    // expect(component.find('.active').length).toBe(1);
    // console.log(component.find('.active').debug());
    // console.log(link.debug());
    // expect(component).toMatchSnapshot();
    // component.unmount();

    // expect(link.hasClass('active')).toBe(true);
  });

  it('should be able to call the fn when click', () => {
    const customhandleOnClick = jest.fn();
    const component = mount(
      <Router>
        <Nav customhandleOnClick={customhandleOnClick} />
      </Router>
    );
    const link = component.find('[data-testid="my_notes"]').at(0);
    link.simulate('click');

    // console.log(component.find('.active').debug());
    // expect(link.hasClass('active')).toBeTruthy();
    expect(link.text()).toBe('NOTES');
    expect(component.find('.active').length).toBe(2);
  });
});
