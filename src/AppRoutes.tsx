// AppRoutes.tsx
import { Route, Routes } from "react-router-dom";
// import Layout from "./components/layout/Layout";



import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Contact from "./pages/contact/Contact";
import LegalPages from "./pages/legal/LegalPages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path="/contact-us" element={<Layout><Contact /></Layout>} />
      <Route path="/privacy-policy" element={<Layout><LegalPages page="privacy" /></Layout>} />
      <Route path="/terms-and-conditions" element={<Layout><LegalPages page="terms" /></Layout>} />
      <Route path="/delete-data" element={<Layout><LegalPages page="delete" /></Layout>} />
      {/*
      <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
      <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
      <Route path="/delete-data" element={<Layout><DeleteData /></Layout>} /> */}
    </Routes>
  );
};

export default AppRoutes;
