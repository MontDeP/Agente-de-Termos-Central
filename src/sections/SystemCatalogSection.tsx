import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DynamicIcon } from "@/components/DynamicIcon";
import { systems, categories } from "@/data/systems";
import type { DocumentType } from "@/data/systems";

interface SystemCatalogSectionProps {
  onOpenDoc: (systemId: string, docType: DocumentType) => void;
}

export function SystemCatalogSection({ onOpenDoc }: SystemCatalogSectionProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("todos");
  const gridRef = useScrollReveal<HTMLDivElement>(0.1);

  const filteredSystems = useMemo(() => {
    let result = systems.slice(0, 3);

    if (activeFilter !== "todos") {
      result = result.filter((s) => s.category === activeFilter);
    }

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.categoryLabel.toLowerCase().includes(q)
      );
    }

    return result;
  }, [query, activeFilter]);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    setQuery("");
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      setActiveFilter("todos");
    }
  };

  return (
    <section
      id="sistemas"
      className="bg-[#F5F5F0] py-20 md:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[5vw]">
        {/* Header */}
        <h2
          className="text-[#1A1A1A] font-semibold mb-2"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          Sistemas e Aplicativos
        </h2>
        <p className="text-[#5A5A5A] text-base max-w-[640px]">
          Encontre os termos de uso e políticas de privacidade dos serviços
          digitais disponíveis para o cidadão tocantinense.
        </p>

        {/* Search */}
        <div className="mt-8 max-w-[600px]">
          <label htmlFor="search" className="sr-only">
            Buscar por sistema ou palavra-chave
          </label>
          <div className="relative group">
            <DynamicIcon
              name="Search"
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8A8A8A] transition-transform duration-200 group-focus-within:rotate-[15deg]"
            />
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Buscar por sistema ou palavra-chave..."
              className="w-full h-[52px] pl-14 pr-5 bg-white border border-[#D8D8D0] rounded-full text-[#1A1A1A] placeholder:text-[#8A8A8A] outline-none transition-all duration-200 focus:border-[#C49A2C] focus:shadow-[0_0_0_3px_rgba(196,154,44,0.15)]"
            />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterClick(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-[#005A8C] text-white"
                  : "bg-white text-[#5A5A5A] border border-[#D8D8D0] hover:bg-[rgba(0,90,140,0.06)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filteredSystems.map((system, idx) => (
            <div
              key={system.id}
              className="scroll-reveal-item bg-white border border-[#D8D8D0] rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] transition-all duration-300"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Tag + Icon */}
              <div className="flex items-start justify-between gap-3">
                <span className="inline-block px-3 py-1 bg-[rgba(0,90,140,0.06)] text-[#005A8C] text-xs font-medium uppercase tracking-[0.08em] rounded-full">
                  {system.categoryLabel}
                </span>
                <div className="w-11 h-11 rounded-full bg-[rgba(0,90,140,0.06)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[rgba(0,90,140,0.1)] group-hover:scale-105">
                  <DynamicIcon
                    name={system.icon}
                    size={22}
                    className="text-[#005A8C]"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[1.25rem] font-semibold text-[#1A1A1A] mt-4 hover:text-[#005A8C] transition-colors duration-300">
                {system.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#5A5A5A] mt-2 leading-relaxed line-clamp-3">
                {system.description}
              </p>

              {/* Doc Links */}
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  onClick={() => onOpenDoc(system.id, "terms")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#D8D8D0] rounded-full text-[13px] font-medium text-[#1A1A1A] hover:border-[#005A8C] hover:text-[#005A8C] transition-colors duration-200"
                >
                  <DynamicIcon name="FileText" size={14} />
                  Termos de Uso
                </button>
                <button
                  onClick={() => onOpenDoc(system.id, "privacy")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#D8D8D0] rounded-full text-[13px] font-medium text-[#1A1A1A] hover:border-[#005A8C] hover:text-[#005A8C] transition-colors duration-200"
                >
                  <DynamicIcon name="Shield" size={14} />
                  Política de Privacidade
                </button>
              </div>

              {/* Last Updated */}
              <div className="mt-3 flex items-center gap-1.5">
                <DynamicIcon
                  name="CheckCircle"
                  size={12}
                  className="text-[#2E7D4F] shrink-0"
                />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A]">
                  Atualizado em {system.lastUpdated}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredSystems.length === 0 && (
          <div className="mt-10 text-center py-12">
            <p className="text-[#5A5A5A] text-base">
              Nenhum sistema encontrado para esta busca.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveFilter("todos");
              }}
              className="mt-3 text-[#005A8C] text-sm font-medium hover:underline"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
