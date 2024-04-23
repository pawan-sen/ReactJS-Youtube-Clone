import './App.css';
import Header from './Component/Header/Header';
import MainPage from './Component/MainPage/MainPage';
import {useState} from 'react'

function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  function handleToggleMenu() {
    setMenuClicked(!menuClicked);
  }

  return (
    <div className="Main-Container">
      <Header handleToggleMenu={handleToggleMenu} /> 
      <MainPage menuClicked={menuClicked} />
    </div>
  );
}

export default App;
