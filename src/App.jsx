import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Settings from './pages/Settings';
import SettingsOpSec from './pages/SettingsOpSec';
import Contracts from './pages/Contracts';
import ContractContent from './components/ContractContent';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/contracts/:id" element={<ContractContent />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/changePassword" element={<SettingsOpSec />} />
    </Routes>
  );
}

export default App;
