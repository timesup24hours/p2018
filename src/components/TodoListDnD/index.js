import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getItems, reorder, move, getItemStyle, getListStyle } from './util';
import './index.scss';

import Completed from './Completed';
import Todos from './Todos';

class TodoList extends React.Component {
  state = {
    todos: getItems(10),
    completed: getItems(5, 10)
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    todos: 'todos',
    completed: 'completed'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'completed') {
        state = { completed: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        todos: result.todos,
        completed: result.completed
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className="TodoListDnD">
        <div className="desc">Drag from 💪Todo to ✅Completed</div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div>
            <Todos todos={this.state.todos} />
          </div>
          <div>
            <Completed completed={this.state.completed} />
          </div>
        </DragDropContext>
      </div>
    );
  }
}
export default TodoList;
