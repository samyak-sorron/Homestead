import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import TenantLogin from './pages/Tenant/tenantLogin';
import TenantRegister from './pages/Tenant/tenantRegister';

function App() {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/tenant-login" element={<TenantLogin />} />
        <Route path="/tenant-register" element={<TenantRegister />} />
      </Routes>
    </Router>
  );
}

export default App;