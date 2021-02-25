import logo from './logo.svg';
import './App.css';

import Slogan from './components/Slogan';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Slogan/>
        <Rodape/>
      </header>
    </div>
  );
}

export default App;
