import React from 'react';

import styles from './index.css';

import Loading from '../Loading';
import ScrollIndicator from '../ScrollIndicator';
import Note from '../Note';

export default React.forwardRef((props, ref) => {
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
    <div className={styles.container} onScroll={handleScroll} ref={ref}>
      {scrolled ? <ScrollIndicator scrolled={scrolled} /> : null}
      {notes.length
        ? notes.map((note, i) => <Note key={i} note={note} />)
        : null}
      {fetchLoading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : null}
      {hasMoreNotesToLoad ? null : (
        <div className={styles.lastNote}>Last Note</div>
      )}
    </div>
  );
});
