import React, { Component } from 'react';
import { connect } from 'react-redux';

import { notes } from '../../actions';

import Note from '../Note';
import Loading from '../Loading';

import styles from './index.css';

class MyNotes extends Component {
  componentDidMount() {
    this.mounted = true;
    if (this.props.notes && this.props.notes.length === 0 && this.mounted)
      this.getNotes({ start: 0, loadAmount: 20 });
  }

  componentWillUnmount() {
    this.mounted = false;
    this.getNotes = null;
    this.props.notesFetchCancelled();
  }

  getNotes = data => {
    this.props.notesFetchRequested(data);
  };

  loadingBottomArea = (range, div) =>
    div.scrollTop + div.clientHeight >= div.scrollHeight - range;

  handleScroll = e => {
    if (this.scrollerDiv) {
      if (
        this.loadingBottomArea(100, this.scrollerDiv) &&
        this.props.hasMoreNotesToLoad
      ) {
        if (!this.props.fetchLoading) {
          this.getNotes({
            start: this.props.cursor,
            loadAmount: this.props.loadAmount
          });
        }
      }
    }
  };

  render() {
    const {
      notes,
      hasMoreNotesToLoad,
      loading,
      fetchLoading
      // message
    } = this.props;

    return loading ? (
      <div className="center">
        <Loading />
      </div>
    ) : (
      <div
        className={styles.container}
        onScroll={this.handleScroll}
        ref={scrollerDiv => {
          this.scrollerDiv = scrollerDiv;
        }}
      >
        {notes.map((note, i) => <Note key={i} note={note} />)}
        {fetchLoading ? (
          <div>
            <Loading />
          </div>
        ) : null}
        {hasMoreNotesToLoad ? null : (
          <div className={styles.lastNote}>Last Note</div>
        )}
      </div>
    );
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
)(MyNotes);
