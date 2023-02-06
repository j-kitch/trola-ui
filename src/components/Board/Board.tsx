import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useClickOutside from '../../hooks/useClickOutside';
import { Breadcrumb, Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import TicketModal from '../TicketModal';
import classes from './Board.module.css';
import Ticket from './Ticket';

interface Props {
  index: number;
  id: string;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const List: FC<Props> = ({ index, id, setModalVisible }) => {
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
                        <Ticket provided={drag} i={i} />
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
  const [modalVisible, setModalVisible] = useState(false);

  const onDragEnd = () => {
  };

  return (
    <div className={classes.container}>
      <Breadcrumbs>
        <Breadcrumb key={1} title="Projects" />
        <Breadcrumb key={2} title="Foo Project" />
      </Breadcrumbs>
      <div className={classes.title}>Foo Project</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1" type="list" direction="horizontal">
          {(drop) => (
            <div
              ref={drop.innerRef}
              {...drop.droppableProps}
              className={classes.board}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <List
                  id={String(i)}
                  index={i}
                  key={i}
                  setModalVisible={setModalVisible}
                />
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
