import React, { Component } from 'react';

import Note from '../Note';
import Loading from '../Loading';

import styles from './index.css';

import fakeData from './fakeDate';

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

class MyNotes extends Component {
  state = {
    notes: [],
    hasMoreNotesToLoad: true,
    cursor: 0,
    loadAmount: 20,
    loading: true,
    fetchLoading: false
  };

  componentDidMount() {
    this.mounted = true;
    if (this.state.notes.length === 0 && this.mounted) this.getNotes(0);
  }

  componentWillUnmount() {
    if (this.fetching) clearTimeout(this.fetching);
    this.mounted = false;
    this.getNotes = null;
    this.fetching = null;
  }

  getNotes = start => {
    this.setState({ fetchLoading: true });
    const buffer = fakeData.slice(start, start + this.state.loadAmount);
    this.fetching = sleep(2000).then(() => {
      if (this.mounted) {
        this.setState({
          notes: this.state.notes.concat(buffer),
          loading: false,
          fetchLoading: false,
          hasMoreNotesToLoad: buffer.length === this.state.loadAmount
        });
        this.setState({
          cursor: this.state.notes.length - 1
        });
      }
    });
  };

  loadingBottomArea = (range, div) =>
    div.scrollTop + div.clientHeight >= div.scrollHeight - range;

  handleScroll = e => {
    if (this.scrollerDiv) {
      if (
        this.loadingBottomArea(100, this.scrollerDiv) &&
        this.state.hasMoreNotesToLoad
      ) {
        if (!this.state.fetchLoading) {
          this.getNotes(this.state.cursor);
        }
      }
    }
  };

  render() {
    const { notes, loading } = this.state;

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
        {this.state.fetchLoading ? (
          <div>
            <Loading />
          </div>
        ) : null}
        {this.state.hasMoreNotesToLoad ? null : (
          <div className={styles.lastNote}>Last Note</div>
        )}
      </div>
    );
  }
}
export default MyNotes;
