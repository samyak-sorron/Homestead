import './App.css';
import { Navbar } from './components';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;