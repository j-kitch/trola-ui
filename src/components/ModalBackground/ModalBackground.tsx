import { FC } from 'react';
import classes from './ModalBackground.module.css';

interface Props {
  visible: boolean;
}

const ModalBackground: FC<Props> = ({ visible }) => (
  <div className={`${classes.background} ${visible ? '' : 'hidden'}`} />
);

export default ModalBackground;