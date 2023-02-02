import { FC, ReactNode } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import classes from './Board.module.css';

interface Props {
  index: number;
  id: string;
}

const List: FC<Props> = ({ index, id }) => {
  return (
    <Draggable draggableId={`list-${id}`} index={index} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={classes.list}
        >
          <div {...provided.dragHandleProps} className={classes.listHeader}>
            Foo
          </div>
          <Droppable
            droppableId={`list-${id}`}
            type="ticket"
            direction="vertical"
          >
            {(drop) => (
              <div
                ref={drop.innerRef}
                {...drop.droppableProps}
                className={classes.ticketContainer}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Draggable draggableId={`ticket-${id}-${i}`} index={i} key={i}>
                    {(drag) => (
                      <div
                        ref={drag.innerRef}
                        {...drag.draggableProps}
                        {...drag.dragHandleProps}
                        className={classes.ticket}
                      >
                        Ticket {i}
                      </div>
                    )}
                  </Draggable>
                ))}
                {drop.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

const Board: FC = () => {
  const onDragEnd = () => {
    console.log('onDragEnd');
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1" type="list" direction="horizontal">
        {(drop) => (
          <div
            ref={drop.innerRef}
            {...drop.droppableProps}
            className={classes.container}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <List id={String(i)} index={i} key={i} />
            ))}
            {drop.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
