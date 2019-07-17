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
    const link = component.find('[data-testid="my_notes"]');
    link.simulate('click');

    expect(customhandleOnClick).toHaveBeenCalled();
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

    expect(link.text()).toBe('NOTES');
    expect(component.find('.active').length).toBe(2);
  });
});
