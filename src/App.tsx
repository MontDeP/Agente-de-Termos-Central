import { useState, useCallback } from "react";
import { Routes, Route } from "react-router";
import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { SystemCatalogSection } from "@/sections/SystemCatalogSection";
import { RightsResourcesSection } from "@/sections/RightsResourcesSection";
import { DocumentModal } from "@/components/DocumentModal";
import { DocumentPage } from "@/pages/DocumentPage";
import { systems } from "@/data/systems";
import type { DocumentType } from "@/data/systems";

function HomePage() {
  const [modalState, setModalState] = useState<{
    systemId: string | null;
    docType: DocumentType | null;
  }>({ systemId: null, docType: null });

  const handleOpenDoc = useCallback((systemId: string, docType: DocumentType) => {
    setModalState({ systemId, docType });
  }, []);

  const handleCloseDoc = useCallback(() => {
    setModalState({ systemId: null, docType: null });
  }, []);

  const activeSystem =
    modalState.systemId
      ? systems.find((s) => s.id === modalState.systemId) ?? null
      : null;

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navbar />
      <main>
        <HeroSection />
        <SystemCatalogSection onOpenDoc={handleOpenDoc} />
        <RightsResourcesSection />
      </main>
      <DocumentModal
        system={activeSystem}
        docType={modalState.docType}
        onClose={handleCloseDoc}
      />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/termos-de-uso/:systemId" element={<DocumentPage docType="terms" />} />
      <Route path="/politica/:systemId" element={<DocumentPage docType="privacy" />} />
    </Routes>
  );
}

export default App;
