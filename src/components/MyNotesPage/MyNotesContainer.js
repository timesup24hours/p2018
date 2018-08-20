import React, { Component } from 'react';
import { connect } from 'react-redux';

import { notes } from '../../actions';

import MyNotes from './MyNotes';
import fetchingBottomArea from './fetchingBottomArea';

class MyNotesContainer extends Component {
  state = {
    scrolled: 0,
    scrollHeight: 0
  };
  scrollerDiv = React.createRef();

  // fecthing notes when the first entry
  componentDidMount() {
    this.mounted = true;
    if (this.props.notes && this.props.notes.length === 0 && this.mounted)
      this.getNotes({ start: 0, loadAmount: 20 });
  }

  // update the percent of the scroll indicator bar when finishing fetch
  componentDidUpdate(prevProps, prevStates) {
    if (
      this.scrollerDiv.current &&
      this.scrollerDiv.current.scrollHeight !== prevStates.scrollHeight
    ) {
      this.setScrolled();
    }
  }

  // fetching data
  getNotes = data => {
    this.props.notesFetchRequested(data);
  };

  // set state
  setScrolled = e => {
    // scrolled is for the percent of the scroll bar
    this.setState({
      scrolled:
        (this.scrollerDiv.current.scrollTop /
          (this.scrollerDiv.current.scrollHeight - window.innerHeight)) *
        100
    });
    // scrollHeight is for the comparison of componentDidUpdate
    this.setState({ scrollHeight: this.scrollerDiv.current.scrollHeight });
  };

  // fetching data when reach the bottom area
  handleScroll = e => {
    this.setScrolled();
    if (
      this.scrollerDiv.current &&
      fetchingBottomArea(100, this.scrollerDiv.current) &&
      this.props.hasMoreNotesToLoad &&
      !this.props.fetchLoading
    ) {
      this.getNotes({
        start: this.props.cursor,
        loadAmount: this.props.loadAmount
      });
    }
  };

  render() {
    const { scrolled } = this.state;

    return (
      <MyNotes
        {...this.props}
        ref={this.scrollerDiv}
        scrolled={scrolled}
        handleScroll={this.handleScroll}
      />
    );
  }

  // cancel fethcing when changing component
  componentWillUnmount() {
    this.mounted = false;
    this.getNotes = null;
    this.props.notesFetchCancelled();
  }
}

const mapStateToProps = state => ({
  notes: state.notes.notes,
  cursor: state.notes.cursor,
  loading: state.notes.loading,
  hasMoreNotesToLoad: state.notes.hasMoreNotesToLoad,
  fetchLoading: state.notes.fetchLoading,
  message: state.notes.message,
  loadAmount: state.notes.loadAmount
});

const mapDispatchToProps = dispatch => ({
  notesFetchRequested: data => dispatch(notes.notesFetchRequested(data)),
  notesFetchCancelled: () => dispatch(notes.notesFetchCancelled())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNotesContainer);
