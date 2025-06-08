import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css'
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from './components/Header'
import { HomePage } from "./pages/HomePage";
import { TermsPage } from "./pages/TermsPage";
import { ReservationPage } from "./pages/ReservationPage";
import { TakeAwayPage } from './pages/TakeAwayPage'
import { BarPage } from "./pages/BarPage";

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
      </Routes>
    </Router>
  );
}

export default App;