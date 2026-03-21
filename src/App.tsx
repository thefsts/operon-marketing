import { Routes, Route } from 'react-router-dom';
import MarketingHome from './pages/MarketingHome';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingHome />} />
      <Route path="*" element={<MarketingHome />} />
    </Routes>
  );
}