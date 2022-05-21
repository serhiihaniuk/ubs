import ReactDom from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';

const root = ReactDom.createRoot(document.querySelector('#root') as Element);
root.render(<App />);
