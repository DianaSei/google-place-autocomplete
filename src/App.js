import './App.css';
import MainPage from './views/main-page.js';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="google-place-automoplete-app">
        <MainPage/>
      </div>
    </Provider>
  );
}

export default App;