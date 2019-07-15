import React from 'react';
import { connect } from 'react-redux';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './index.module.css';
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

  getComponentOnType = ({ key, data, index }) => {
    switch (key) {
      case 'title':
        return (
          <div key={index} className={styles.title}>
            {data.title}
          </div>
        );

      case 'subTitle':
        return (
          <div key={index} className={styles.subTitle}>
            {data.subTitle}
          </div>
        );

      case 'content':
        return (
          <div key={index} className={styles.content}>
            {data.content}
          </div>
        );

      case 'text':
        return (
          <div key={index} className={styles.text}>
            {data.text}
          </div>
        );

      case 'html':
        return data.html;

      case 'code':
        return (
          <div key={index} className={styles.code}>
            <Component data={data.code} />
          </div>
        );

      default:
        return null;
    }
  };

  render() {
    const { currentNote, fetchLoading } = this.props;
    return fetchLoading ? (
      <div className="center">
        <Loading />
      </div>
    ) : (
      <div className={styles.container}>
        {currentNote &&
        currentNote.hasOwnProperty('article') &&
        currentNote.article &&
        Array.isArray(currentNote.article)
          ? currentNote.article.map((data, index) => {
              return this.getComponentOnType({
                key: Object.keys(data)[0],
                data,
                index
              });
            })
          : null}
        {currentNote &&
          !currentNote.hasOwnProperty('article') && [
            <div key="title" className={styles.title}>
              {currentNote.title}
            </div>,
            <div key="sub-title" className={styles.subTitle}>
              {currentNote.subTitle}
            </div>,
            <article key="content" className={styles.content}>
              {currentNote.content}
            </article>,
            <div key="code" className={styles.code}>
              {currentNote && currentNote.code && (
                <Component data={currentNote.code} />
              )}
            </div>
          ]}
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
      style={atomDark}
      // atomDark
      // prism
      // twilight
      // tomorrow
      // solarizedlight
      // okaidia
      // funky
      // dark
      // coy
      showLineNumbers={false}
      wrapLines={true}
    >
      {data}
    </SyntaxHighlighter>
  );
};
