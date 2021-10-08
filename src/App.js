// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import Blogs from './Components/Blogs';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { selectSignedIn } from './features/userSlice';

function App() {

  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
      {isSignedIn && <Blogs/>}
    </div>
  );
}

export default App;
