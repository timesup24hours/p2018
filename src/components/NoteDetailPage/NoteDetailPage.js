import React from 'react';
import { connect } from 'react-redux';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

import styles from './index.css';
import Loading from '../Loading';
import { noteGetOne, noteFetchRequested } from '../../actions/notes';

class NoteDetailPage extends React.Component {
  state = {
    title: '',
    id: ''
  };
  componentDidMount() {
    this.setState({ title: this.props.match.params.title.replace(/-/g, ' ') });
    const id = this.props.location.hash.slice(1);
    this.setState({ id });
    if (this.props.notes.length) {
      const note = this.props.notes.some(note => note.id === id);
      if (note) {
        this.props.noteGetOne(id);
      } else {
        this.props.noteFetchRequested(id);
      }
    } else {
      this.props.noteFetchRequested(id);
    }
  }

  render() {
    const { title } = this.state;
    const { currentNote, fetchLoading } = this.props;
    return fetchLoading ? (
      <div className="center">
        <Loading />
      </div>
    ) : (
      <div className={styles.container}>
        {currentNote
          ? [
              <div key="title" className={styles.title}>
                {currentNote.title}
              </div>,
              <div key="sub-title" className={styles.subTitle}>
                {currentNote.subTitle}
              </div>,
              <article key="content" className={styles.content}>
                {currentNote.content}
              </article>
            ]
          : null}
        {currentNote && currentNote.code && (
          <div style={{ width: 'auto' }}>
            {currentNote && <Component data={currentNote.code} />}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.notes,
  currentNote: state.notes.currentNote,
  fetchLoading: state.notes.fetchLoading
});

const mapDispatchToProps = dispatch => ({
  noteGetOne: data => dispatch(noteGetOne(data)),
  noteFetchRequested: data => dispatch(noteFetchRequested(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetailPage);

const Component = ({ data }) => {
  return (
    <SyntaxHighlighter
      customStyle={{ width: '100%' }}
      language="javascript"
      // style={docco}
      style={prism}
      // style={dark}
      showLineNumbers={true}
      wrapLines={true}
    >
      {data}
    </SyntaxHighlighter>
  );
};
