import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import styles from './app.module.scss';

function App(): JSX.Element {
  return (
      <div className={`${styles.app}`}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
  );
}

export default App;
