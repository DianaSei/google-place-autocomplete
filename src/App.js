import './App.css';
import MainPage from './views/main-page.js';
require('dotenv').config();

function App() {
  return (
    <div className="google-place-automoplete-app">
      <MainPage/>
    </div>
  );
}

export default App;
