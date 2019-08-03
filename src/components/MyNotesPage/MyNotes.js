import React from 'react';

// import styles from './index.module.css';
import './index.scss';

import Loading from '../Loading';
import ScrollIndicator from '../ScrollIndicator';
import Note from '../Note';

const MyNotes = (props, ref) => {
  const {
    notes,
    hasMoreNotesToLoad,
    loading,
    fetchLoading,
    scrolled,
    handleScroll
  } = props;

  return loading ? (
    <div className="center">
      <Loading />
    </div>
  ) : (
    <div
      className={`MyNotesContainer-container`}
      onScroll={handleScroll}
      ref={ref}
    >
      {scrolled ? <ScrollIndicator scrolled={scrolled} /> : null}
      {notes.length
        ? notes.map((note, i) => <Note key={i} note={note} index={i} />)
        : null}
      {fetchLoading ? (
        <div className={`MyNotesContainer-loading`}>
          <Loading />
        </div>
      ) : null}
      {hasMoreNotesToLoad ? null : (
        <div className={`MyNotesContainer-lastNote`}>Last Note</div>
      )}
    </div>
  );
};

export default React.forwardRef(MyNotes);
