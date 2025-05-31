import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css'
import { Header } from './components/Header'
import { HomePage } from "./pages/HomePage";
import { TermsPage } from "./pages/TermsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-privacy-policy" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;