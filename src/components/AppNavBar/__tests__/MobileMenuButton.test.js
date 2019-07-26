import React from 'react';
import { shallow, mount } from 'enzyme';
import MobileMenuButton from '../MobileMenuButton';
import ReactDOM from 'react-dom';
import { MaterialDesignBurgerMenu } from '../../MaterialDesignBurgerMenu';

describe('MobileMenuButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MobileMenuButton debug />);

    expect(component).toMatchSnapshot();
    // console.log(component.debug());
  });

  it('passes refs to the container component', () => {
    const ref = React.createRef();
    const div = document.createElement('div');
    ReactDOM.render(<MobileMenuButton ref={ref} />, div);

    const element = div.querySelector('div');
    expect(element).toBe(ref.current);
  });

  // it('toggle method should change the state', () => {
  //   const customhandleOnClick = jest.fn();
  //   const open = true;
  //   const ref = React.createRef();
  //   const wrapper = mount(
  //     <MobileMenuButton
  //       customhandleOnClick={customhandleOnClick}
  //       open={open}
  //       ref={ref}
  //     />
  //   );
  //   const shallowWrapper = shallow(
  //     <MobileMenuButton
  //       customhandleOnClick={customhandleOnClick}
  //       open={open}
  //       ref={ref}
  //     />
  //   );

  //   const instance = wrapper.instance();
  //   console.log('instance: ', instance);
  //   console.log('mount: ', wrapper.debug());
  //   console.log('shallowWrapper: ', shallowWrapper.debug());
  //   // instance.toggle();
  //   // expect(wrapper.state().isOpen).toBeFalsy();

  //   const shallowWrapperProps = shallow(
  //     <MobileMenuButton
  //       customhandleOnClick={customhandleOnClick}
  //       open={open}
  //       ref={ref}
  //     />
  //   )
  //     .find(MaterialDesignBurgerMenu)
  //     .renderProp('customhandleOnClick');
  //   // console.log('shallowWrapperProps: ', shallowWrapperProps);
  // });

  it('pass prop function into the child component', () => {
    const customhandleOnClick = jest.fn();
    const ref = React.createRef();

    const child = shallow(
      <MobileMenuButton customhandleOnClick={customhandleOnClick} ref={ref} />
    ).find(MaterialDesignBurgerMenu);

    const childProps = child.props();
    // console.log('childProps: ', childProps);

    expect(childProps.customhandleOnClick).toBe(customhandleOnClick);
    expect(childProps.open).toBe(undefined);
  });

  it('pass prop boolean into the child component', () => {
    const open = true;
    const ref = React.createRef();

    const child = shallow(<MobileMenuButton open={open} ref={ref} />).find(
      MaterialDesignBurgerMenu
    );
    const childProps = child.props();
    expect(childProps.open).toBe(open);
    expect(childProps.customhandleOnClick).toBe(undefined);
  });
});
