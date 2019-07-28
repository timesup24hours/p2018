import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getItems, reorder, move, getItemStyle, getListStyle } from './util';
import './index.scss';
import uuid from 'uuid';

import Completed from './Completed';
import Todos from './Todos';

class TodoList extends React.Component {
  state = {
    todos: getItems(10),
    completed: getItems(5, 10),
    item: [{ id: uuid() }, { id: uuid() }],
    isDraggingContainer: false
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
    if (source.droppableId === 'container') {
      console.log(source, destination);
      const item = reorder(
        this.state.item,
        result.source.index,
        result.destination.index
      );

      this.setState({
        item
      });

      return;
    }
    if (
      source &&
      source.droppableId !== 'container' &&
      destination &&
      destination.droppableId === 'container'
    ) {
      return;
    }
    if (
      source &&
      destination &&
      source.droppableId === destination.droppableId
    ) {
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

  onDragStart = ({ source }) => {
    if (source && source.droppableId === 'container') {
      // this.setState({ isDraggingContainer: true });
    } else {
      // this.setState({ isDraggingContainer: false });
    }
  };

  onDragUpdate = ({ source, destination }) => {
    if (
      source.droppableId === 'container' &&
      destination.droppableId !== 'container'
    ) {
      return false;
    }
    if (
      (source &&
        destination &&
        source.droppableId !== 'container' &&
        destination.droppableId === 'container') ||
      (source.droppableId !== 'container' && destination === null)
    ) {
      return false;
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className="TodoListDnD-Container">
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
        >
          <Droppable
            droppableId="container"
            direction="horizontal"
            // isDropDisabled={this.state.isDraggingContainer}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="TodoListDnD"
              >
                <Draggable
                  key={this.state.item[0].id}
                  draggableId={this.state.item[0].id}
                  index={0}
                  onDragStart={event => {
                    console.log('onDragStart: event : ', event);
                  }}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Todos
                        todos={this.state.todos}
                        isDropDisabled={this.state.isDraggingContainer}
                      />
                    </div>
                  )}
                </Draggable>
                <Draggable
                  key={this.state.item[1].id}
                  draggableId={this.state.item[1].id}
                  index={1}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Completed
                        completed={this.state.completed}
                        isDropDisabled={this.state.isDraggingContainer}
                      />
                    </div>
                  )}
                </Draggable>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
export default TodoList;
