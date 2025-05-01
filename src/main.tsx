
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './assets/PrivacyPolicy';
import TermsOfService from './assets/TermsOfService';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            +     <Route path="/terms" element={<TermsOfService />} />
        </Routes>
    </BrowserRouter>
);
