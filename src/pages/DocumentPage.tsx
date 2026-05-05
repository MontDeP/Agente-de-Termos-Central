import { useParams, Navigate, Link } from "react-router";
import { systems } from "@/data/systems";
import type { DocumentType } from "@/data/systems";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { DynamicIcon } from "@/components/DynamicIcon";

interface DocumentPageProps {
  docType: DocumentType;
}

export function DocumentPage({ docType }: DocumentPageProps) {
  const { systemId } = useParams<{ systemId: string }>();
  const system = systems.find((s) => s.id === systemId);

  if (!system) {
    return <Navigate to="/" replace />;
  }

  const doc = system.docs[docType];

  return (
    <div className="min-h-screen bg-[#F5F5F0] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[860px] w-full mx-auto px-4 lg:px-6 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/#sistemas"
          className="inline-flex items-center gap-2 text-sm text-[#005A8C] font-medium hover:underline mb-8"
        >
          <DynamicIcon name="ArrowLeft" size={16} />
          Voltar ao catálogo
        </Link>

        {/* Document header */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A2C]">
            {doc.label}
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#005A8C] mt-1">
            {system.name}
          </h1>
          <p className="text-sm text-[#8A8A8A] mt-1">
            Última atualização: {doc.lastUpdated}
          </p>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-2xl border border-[#D8D8D0] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] divide-y divide-[#D8D8D0]">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="px-8 py-7">
              <h2 className="font-semibold text-[17px] text-[#005A8C] mb-3">
                {section.title}
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#1A1A1A]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
