import { FC, useState } from 'react';
import { DraggableProps, DraggableProvided } from 'react-beautiful-dnd';
import useClickOutside from '../../hooks/useClickOutside';
import classes from './Board.module.css';

interface Props {
  provided: DraggableProvided;
  i: number;
}

const Ticket: FC<Props> = ({ provided: drag, i }) => {
  const [modal, setModal] = useState(false);
  const ref = useClickOutside<HTMLDivElement>('ticket', () => setModal(false));
  const openModal = () => {
    if (!modal) {
      setModal(true);
    }
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div
      ref={drag.innerRef}
      {...drag.draggableProps}
      {...drag.dragHandleProps}
      className={classes.ticket}
    >
      <div className={`${modal && classes.show} ${classes.background}`} />
      <div className={classes.fill} ref={ref} onClick={openModal}>
        Ticket {i}
        <div className={`${modal && classes.show} ${classes.modal}`}>
          <div className={classes.main}>
            <input
              className={classes.modalTitle}
              type="text"
              value="Foo Ticket 0"
              onChange={() => {}}
            />
            <textarea
              rows={5}
              className={classes.description}
              onChange={() => {}}
              value="Here is the body of the text"
            />
          </div>
          <div className={classes.sidebar}>
            <div className={classes.buttons}>
              <button className={classes.exit} onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
