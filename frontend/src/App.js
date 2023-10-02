import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import TenantLogin from './pages/Tenant/tenantLogin';
import TenantRegister from './pages/Tenant/tenantRegister';
import PropertyDetail from './pages/propertyDetail';

function App() {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/tenant-login" element={<TenantLogin />} />
        <Route path="/tenant-register" element={<TenantRegister />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;