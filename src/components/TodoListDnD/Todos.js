import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { getListStyle, getItemStyle } from './util';

const Todos = ({ todos }) => {
  return (
    <Droppable droppableId="todos">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          className="TodoListDnD-Container"
        >
          <h3 className="TodoListDnD-Title">Todo(s):</h3>
          {todos.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="TodoListDnD-List"
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                >
                  {item.content}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default Todos;
