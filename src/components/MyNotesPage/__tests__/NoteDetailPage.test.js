import React from 'react';
import { shallow, mount } from 'enzyme';

import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import ConnectedMyNotesContainer, {
  MyNotesContainer
} from '../MyNotesContainer';

describe('NoteDetailPage', () => {
  const initialState = {
    notes: {
      notes: [],
      currentNote: undefined,
      hasMoreNotesToLoad: true,
      cursor: 0,
      loadAmount: 20,
      loading: false,
      fetchLoading: false,
      message: ''
    }
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const store = mockStore(initialState);

  const props = {
    notes: [],
    cursor: 0,
    loading: false,
    hasMoreNotesToLoad: true,
    fetchLoading: false,
    message: '',
    loadAmount: 10,
    notesFetchRequested: jest.fn()
  };

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyNotesContainer debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render without redux', () => {
    const scrolled = 0;
    const handleScroll = jest.fn();

    const wrapper = mount(
      <MyNotesContainer
        {...props}
        scrolled={scrolled}
        handleScroll={handleScroll}
      />
    );
    expect(wrapper).toMatchSnapshot();

    expect(props.notesFetchRequested).toHaveBeenCalled();
  });

  it('should render with redux', () => {
    const wrapper = mount(<ConnectedMyNotesContainer store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the change profile request pending', () => {
    const wrapper = mount(
      <ConnectedMyNotesContainer store={store} {...props} />
    );

    return Promise.resolve(resolve => {
      expect(props.loading).toBeTruthy();
      expect(props.fetchLoading).toBeTruthy();
      resolve(wrapper);
    }).then(() => {
      expect(props.notesFetchRequested).toHaveBeenCalledTimes(1);
      expect(props.notesFetchRequested).toBeCalledWith({
        start: 0,
        loadAmount: 20
      });
      expect(props.loading).toBeFalsy();
      expect(props.fetchLoading).toBeFalsy();
    });
  });
});
