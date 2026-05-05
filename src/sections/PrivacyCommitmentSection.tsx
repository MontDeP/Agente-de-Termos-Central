import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DynamicIcon } from "@/components/DynamicIcon";
import { featureItems } from "@/data/systems";

export function PrivacyCommitmentSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="privacidade" className="bg-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[5vw]">
        {/* Header */}
        <h2
          className="text-[#1A1A1A] font-semibold text-center"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          Nosso Compromisso com a Privacidade
        </h2>
        <p className="text-[#5A5A5A] text-base text-center max-w-[640px] mx-auto mt-3 leading-relaxed">
          A ATI Tocantins segue rigorosamente as diretrizes da Lei Geral de
          Proteção de Dados (LGPD) e da Política de Segurança da Informação do
          Estado.
        </p>

        {/* Feature Grid */}
        <div
          ref={sectionRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureItems.map((item, idx) => (
            <div
              key={idx}
              className="scroll-reveal-item text-center"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(0,90,140,0.06)] flex items-center justify-center mx-auto">
                <DynamicIcon
                  name={item.icon}
                  size={26}
                  className="text-[#005A8C]"
                />
              </div>
              <h3 className="text-[1.25rem] font-semibold text-[#1A1A1A] mt-4">
                {item.title}
              </h3>
              <p className="text-[15px] text-[#5A5A5A] mt-2 leading-[1.65]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
