import { Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Anime from './components/Anime';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Link path='/' component={Anime}/>
      </Switch>
    </div>
  );
}

export default App;
