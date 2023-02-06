import { Dispatch, FC, LegacyRef, SetStateAction, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import classes from './TicketModal.module.css';

interface Props {
  visible: boolean;
}

const TicketModal: FC<Props> = ({ visible }) => {
  
  return (
   <div className={`${classes.background} ${visible && classes.show}`}>
      <div ref={ref} className={classes.modal}>
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
            <button className={classes.exit} onClick={setThingy}>
              X
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default TicketModal;
