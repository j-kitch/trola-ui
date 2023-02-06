import { FC, useState } from 'react';
import { DraggableProps, DraggableProvided } from 'react-beautiful-dnd';
import useClickOutside from '../../hooks/useClickOutside';
import ModalBackground from '../ModalBackground';
import TicketModal from '../TicketModal';
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
      <ModalBackground visible={modal} />
      <div className={classes.fill} ref={ref} onClick={openModal}>
        Ticket {i}
        <TicketModal visible={modal} onClose={closeModal}/>
      </div>
    </div>
  );
};

export default Ticket;
