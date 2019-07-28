import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { getListStyle, getItemStyle } from './util';

const Completed = ({ completed }) => {
  return (
    <Droppable droppableId="completed">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          className="TodoListDnD-Container"
        >
          <h3 className="TodoListDnD-Title">Completed:</h3>
          {completed.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="TodoListDnD-List TodoListDnD-Complete"
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                >
                  ✅ <div className="text">{item.content}</div>
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
export default Completed;
