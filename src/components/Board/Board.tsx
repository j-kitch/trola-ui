import { FC, ReactNode } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Breadcrumb, Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
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
                {[0, 1, 2, 3, 4]
                  .filter((i) => i < index + 2)
                  .map((i) => (
                    <Draggable
                      draggableId={`ticket-${id}-${i}`}
                      index={i}
                      key={i}
                    >
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
                <div className={classes.ticket}>Add Ticket</div>
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
    <div className={classes.container}>
      <Breadcrumbs>
        <Breadcrumb title="Projects"/>
        <Breadcrumb title="Foo Project"/>
      </Breadcrumbs>
      <div className={classes.title}>
        Foo Project
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1" type="list" direction="horizontal">
          {(drop) => (
            <div
              ref={drop.innerRef}
              {...drop.droppableProps}
              className={classes.board}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <List id={String(i)} index={i} key={i} />
              ))}
              {drop.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;
