import React from 'react';
import { shallow, mount } from 'enzyme';
import MaterialDesignBurgerMenu from '../MaterialDesignBurgerMenu';
import sinon from 'sinon';

describe('MobileMenuButton', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MaterialDesignBurgerMenu debug />);

    expect(component).toMatchSnapshot();
  });

  it('passes function to the component', () => {
    const customhandleOnClick = jest.fn();
    const shallowWrapper = shallow(
      <MaterialDesignBurgerMenu customhandleOnClick={customhandleOnClick} />
    );
    const cmptProps = shallowWrapper.instance().props;

    expect(cmptProps.customhandleOnClick).toBe(customhandleOnClick);
  });

  it('onclick should work when passe function to the component', () => {
    const customhandleOnClick = jest.fn();
    const shallowWrapper = mount(
      <MaterialDesignBurgerMenu customhandleOnClick={customhandleOnClick} />
    );
    shallowWrapper.find('.wrapper').simulate('click');

    expect(customhandleOnClick).toBeCalledTimes(1);
  });

  it('onclick should have been called 2 times', () => {
    const customhandleOnClick = jest.fn();
    const shallowWrapper = mount(
      <MaterialDesignBurgerMenu customhandleOnClick={customhandleOnClick} />
    );
    shallowWrapper.find('.wrapper').simulate('click');
    shallowWrapper.find('.wrapper').simulate('click');

    expect(customhandleOnClick).toBeCalledTimes(2);
  });

  it('passes boolean to the component', () => {
    const open = true;
    const shallowWrapper = shallow(<MaterialDesignBurgerMenu open={open} />);
    const cmptProps = shallowWrapper.instance().props;

    expect(cmptProps.open).toBe(open);
  });

  it('componentDidUpdate should be called when click', () => {
    const customhandleOnClick = jest.fn();
    const component = mount(<MaterialDesignBurgerMenu />);

    const spy = sinon.spy(
      MaterialDesignBurgerMenu.prototype,
      'componentDidUpdate'
    );

    expect(spy).toHaveProperty('callCount', 0);

    component.setProps({ customhandleOnClick: customhandleOnClick });

    expect(spy).toHaveProperty('callCount', 1);

    component.setProps({ open: true });

    expect(spy).toHaveProperty('callCount', 2);
  });

  it('class length and class should be toggle when open props change ', () => {
    const component = mount(<MaterialDesignBurgerMenu />);

    const triggerClassName = component.find('.trigger');

    expect(triggerClassName).toHaveLength(0);
    // const spyPrev = jest.spyOn(component.instance().spanRef.classList, 'add');
    // expect(spyPrev).toHaveBeenCalled();

    expect(component.instance().spanRef.classList.length).toBe(1);
    expect(
      component.instance().spanRef.classList.contains('trigger')
    ).toBeFalsy();

    component.setProps({ open: true });

    expect(component.instance().spanRef.classList.length).toBe(2);
    expect(
      component.instance().spanRef.classList.contains('trigger')
    ).toBeTruthy();

    component.setProps({ open: false });

    expect(component.instance().spanRef.classList.length).toBe(1);
    expect(
      component.instance().spanRef.classList.contains('trigger')
    ).toBeFalsy();
  });

  it('class length and class should be toggle when props customhandleOnClick click  ', () => {
    const customhandleOnClick = jest.fn();
    const component = mount(<MaterialDesignBurgerMenu />);
    component.setProps({ customhandleOnClick: customhandleOnClick });

    expect(component.instance().spanRef.classList.length).toBe(1);
    expect(
      component.instance().spanRef.classList.contains('trigger')
    ).toBeFalsy();

    component.find('.wrapper').simulate('click');

    expect(component.instance().spanRef.classList.length).toBe(2);
    expect(
      component.instance().spanRef.classList.contains('trigger')
    ).toBeTruthy();
  });
});
