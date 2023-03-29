import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('modals-root');

const Portal = ({children}) => {
  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
