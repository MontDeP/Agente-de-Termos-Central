import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DynamicIcon } from "@/components/DynamicIcon";
import { rights, contacts } from "@/data/systems";

export function RightsResourcesSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="bg-[#F5F5F0] pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[5vw]">
        <h2
          className="text-[#1A1A1A] font-semibold text-center"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          Seus Direitos e Canais de Atendimento
        </h2>

        <div
          ref={sectionRef}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Column - Rights */}
          <div className="scroll-reveal-item-left bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]">
            <h3 className="text-[1.25rem] font-semibold text-[#005A8C] mb-5">
              Direitos do Cidadão
            </h3>
            <ul className="space-y-0">
              {rights.map((right, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 py-3 text-[15px] text-[#1A1A1A] leading-relaxed ${
                    idx < rights.length - 1 ? "border-b border-[#D8D8D0]" : ""
                  }`}
                >
                  <DynamicIcon
                    name="Check"
                    size={14}
                    className="text-[#2E7D4F] shrink-0 mt-1"
                  />
                  {right}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contacts */}
          <div className="scroll-reveal-item-right bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]">
            <h3 className="text-[1.25rem] font-semibold text-[#005A8C] mb-5">
              Canais de Atendimento
            </h3>
            <div className="space-y-5">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <DynamicIcon
                    name={contact.icon}
                    size={18}
                    className="text-[#005A8C] shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A] block">
                      {contact.label}
                    </span>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`text-[15px] ${
                          contact.label === "Ouvidoria"
                            ? "text-[#C49A2C] hover:underline"
                            : "text-[#1A1A1A] hover:text-[#005A8C]"
                        } transition-colors duration-200`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-[15px] text-[#1A1A1A]">
                        {contact.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
