import { Navigate, Route, Routes } from "react-router-dom";
import { SiteShell } from "./components/SiteShell";
import { productPages } from "./data/siteContent";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductPage } from "./pages/ProductPage";

export function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="talks" element={<ProductPage page={productPages.talks} />} />
        <Route path="vision" element={<ProductPage page={productPages.vision} />} />
        <Route path="os" element={<ProductPage page={productPages.os} />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

