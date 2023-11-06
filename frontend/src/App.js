import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import TenantLogin from './pages/Tenant/tenantLogin';
import TenantRegister from './pages/Tenant/tenantRegister';
import PropertyDetail from './pages/Property/propertyDetail';
import OwnerDashboard from './pages/Owner/ownerDashboard';
import OwnerLogin from './pages/Owner/ownerLogin';
import OwnerRegister from './pages/Owner/ownerResigter';
import PorpertyList from './pages/Property/porpertyList';

function App() {
  return (
    <Router>
      
      <Routes>        
        <Route path="/" exact element={<Home />} />
        <Route path="/propertyDetails/:property_id" element={<PropertyDetail />} />
        <Route path="/propertyList" element={<PorpertyList/>} />

        {/* Tenant */}
        <Route path="/tenant-login" element={<TenantLogin />} />
        <Route path="/tenant-register" element={<TenantRegister />} />

        {/* Owner */}
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner-register" element={<OwnerRegister/>} />
        <Route path="/owner-dashboard" element={<OwnerDashboard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;