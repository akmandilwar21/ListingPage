import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch ,Route } from 'react-router-dom';

import BottomHeader from'./Components/BottomHeader.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          path="/"
          render={(props) => <BottomHeader {...props} />}
        />

        
      </Switch>
    </div>
  );
        }
export default App;
