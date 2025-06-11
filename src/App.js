import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css'
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from './components/Header'
import { HomePage } from "./pages/HomePage";
import { TermsPage } from "./pages/TermsPage";
import { ReservationPage } from "./pages/ReservationPage";
import { TakeAwayPage } from './pages/TakeAwayPage'
import { BarPage } from "./pages/BarPage";
import { VoucherPage } from "./pages/VoucherPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { MenuPage } from "./pages/MenuPage";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-privacy-policy" element={<TermsPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/take-away" element={<TakeAwayPage />} />
        <Route path="/bar" element={<BarPage />} />
        <Route path="/e-voucher" element={<VoucherPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;