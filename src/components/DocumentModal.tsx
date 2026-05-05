import { useEffect, useCallback } from "react";
import { Link } from "react-router";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { DynamicIcon } from "./DynamicIcon";
import type { SystemData, DocumentType } from "@/data/systems";

interface DocumentModalProps {
  system: SystemData | null;
  docType: DocumentType | null;
  onClose: () => void;
}

export function DocumentModal({ system, docType, onClose }: DocumentModalProps) {
  const isOpen = system !== null && docType !== null;
  useBodyScrollLock(isOpen);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !system || !docType) return null;

  const doc = system.docs[docType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-modal-overlay" />

      {/* Content */}
      <div className="relative w-full max-w-[800px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-modal-content overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4 shrink-0">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#C49A2C]">
              {doc.label}
            </span>
            <h3 className="text-xl font-semibold text-[#005A8C] mt-1">
              {system.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors duration-200 shrink-0"
            aria-label="Fechar"
          >
            <DynamicIcon name="X" size={24} className="text-[#8A8A8A] hover:text-[#1A1A1A]" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-8 pb-4 scrollbar-thin">
          {doc.sections.map((section, idx) => (
            <div key={idx}>
              {idx > 0 && (
                <hr className="border-[#D8D8D0] my-6" />
              )}
              <h4 className="font-semibold text-[17px] text-[#005A8C] mb-2">
                {section.title}
              </h4>
              <p className="text-[15px] leading-[1.7] text-[#1A1A1A]">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Sticky Footer */}
        <div className="shrink-0 px-8 py-4 border-t border-[#D8D8D0] bg-white flex items-center justify-between sticky bottom-0">
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A]">
            Última atualização: {doc.lastUpdated}
          </span>
          <div className="flex items-center gap-3">
            <Link
              to={`/${docType === "terms" ? "termos-de-uso" : "politica"}/${system.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#005A8C] text-[#005A8C] text-[14px] font-semibold rounded-full hover:bg-[#005A8C]/5 transition-colors duration-200"
            >
              <DynamicIcon name="ExternalLink" size={14} />
              Ver página completa
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#005A8C] text-white text-[15px] font-semibold rounded-full hover:bg-[#004A72] transition-colors duration-200"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
