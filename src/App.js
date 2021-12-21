import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MiddleComponent from './components/MiddleComponent/MiddleComponent';

function App() {
  return (
    <div className="App" style={{background: "radial-gradient(calc(45vw + 100px) at bottom right, rgba(241, 67, 63, 0.15) 0%, rgba(241, 67, 63, 0) 100%), radial-gradient(calc(70vw + 100px) at top left, rgba(77, 195, 220, 0.25) 0%, rgba(77, 195, 220, 0) 100%), #ECF0F1",minHeight:"891px"}}>
        <Navbar/>
       <MiddleComponent/>
    </div>
  );
}

export default App;
