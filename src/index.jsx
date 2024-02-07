import { createRoot } from 'react-dom/client';
import './global.css';
import './components/inbox/Inbox.css'
import './components/header/Header.css'

import Header from './components/header/Header';
import Inbox from './components/inbox/Inbox';

const App = () => {
  return (
    <>
    <Header user="Radovan Holátko"></Header>
    <Inbox account="radovan.holatko@mejlik.cz" messages={0}></Inbox>
    </>
  )
}


createRoot(
  document.querySelector('#app'),
).render(<App />);
