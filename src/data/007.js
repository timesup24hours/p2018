import React from 'react';

const code = `// reducer.js
import React from 'react';
import { fromJS } from "immutable";
import memoize from "fast-memoize";
import uuid from 'uuid'

const initialData = { child: "One" };

const initialState = fromJS({
  data: { potentially: { deep: initialData } },
  unrelatedData: { nothing: "yet" },
  list: []
});

const CONSTANTS = {
  setData: "SET_DATA",
  setUnrelatedData: "SET_UNRELATED_DATA",
  updateList: 'UPDATE_LIST'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.setData:
    return state.setIn(
        ["data", "potentially", "deep"],
        fromJS(action.payload.data)
      );

    case CONSTANTS.setUnrelatedData:
    return state.update('list', list => list.push(fromJS({ id: uuid(), content: 'some value'})))
    .set("unrelatedData", fromJS(action.payload.data));

    case CONSTANTS.updateList:
    const indexOfListingToUpdate = state.get('list').findIndex(listing => {
      return listing.get('id') === action.payload.data.id
    });
    return state.setIn(['list', indexOfListingToUpdate, 'content'], action.payload.data.content);
      
    default:
      return state;
  }
};

export const setUnrelatedData = () => ({
  type: CONSTANTS.setUnrelatedData,
  payload: { data: { something: "totally unrelated data" } }
});

export const setData = newData => ({
  type: CONSTANTS.setData,
  payload: { data: newData }
});

export const updateList = newData => ({
  type: CONSTANTS.updateList,
  payload: { data: newData }
});

// Our actual getData call
const getDataSlow = localState => {
  console.log("getData called");
  return localState.toJS();
};
// Our memoized version
const memoizedGetData = memoize(getDataSlow);
// Our exported function, that reduces our memoization input to just this reducer
export const getData = state => memoizedGetData(state.get("child"));

export default reducer;
`;

const code1 = `// Child.js
import React from 'react';import React from "react";
import { connect } from "react-redux";

import { getData, setData, updateList } from "./module";

class Child extends React.Component {
  changeData = () => {
    if (this.props.isAsync) {
      window.setTimeout(() => {
        this.props.setData({ child: this.props.name });
      }, 1500);
    } else {
      this.props.setData({ child: this.props.name });
    }
  };

  updateListInStore = (d) => {
    this.props.updateList({ id: d.id, content: 'updated'})
  }
  render() {
    return (
      <div>
        <p>Child {this.props.name}!</p>
        <p>{JSON.stringify(this.props.data, undefined, 4)}</p>
        <button onClick={this.changeData}>Change</button>
        {
          this.props.data.list.map((d, i) => {
            return <li style={{ cursor: 'pointer'}} key={i} onClick={() => this.updateListInStore(d)}>{d.content}</li>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: getData(state) });
export default connect(mapStateToProps, { setData, updateList })(Child);
`;

const code2 = ` // parent.js
import React from "react";
import { connect } from "react-redux";

import Child from "./child";
import { setUnrelatedData } from "./module";

class Parent extends React.Component {
  setUnrelatedData = () => this.props.setUnrelatedData();
  render() {
    return (
      <div>
        Parent
        <Child name="One" isAsync />
        <Child name="Two" />
        <button onClick={this.setUnrelatedData}>Set Unrelated Data</button>
      </div>
    );
  }
}

export default connect(null, { setUnrelatedData })(Parent);
`;

const code3 = `
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers } from "redux-immutable";
import { createStore } from "redux";
import Immutable from "immutable";

import "./styles.css";

import Parent from "./parent";
import childReducer from "./reducer";

const initialState = Immutable.Map();
const rootReducer = combineReducers({ child: childReducer });
const store = createStore(rootReducer, initialState);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Parent />
  </Provider>,
  rootElement
);
`;

export default {
  id: 'd537de96-5abc-47e9-8b75-96672cd6501a',
  title: 'Update immutable.js data',
  subTitle: '',
  article: [
    { title: 'Update immutable.js data' },
    { code: code },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code1 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code2 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code3 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> }
  ],
  createdAt: '2017-11-14T19:26:43.398Z'
};
