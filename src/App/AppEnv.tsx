import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const AppEnv: FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppEnv;
