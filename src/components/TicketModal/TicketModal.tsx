import {
  Dispatch,
  FC,
  LegacyRef,
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import classes from './TicketModal.module.css';

interface Props {
  visible: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const TicketModal: FC<Props> = ({ visible, onClose }) => {
  return (
    <div className={`${classes.modal} ${visible ? '' : 'hidden'}`}>
      <div className={classes.main}>
        <input
          className={classes.title}
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
          <button className={classes.exit} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
