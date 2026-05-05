import { DynamicIcon } from "@/components/DynamicIcon";

const quickLinks = [
  { label: "Portal de Serviços", href: "https://servicos.to.gov.br" },
  { label: "Gov.br", href: "https://gov.br" },
  {
    label: "LGPD",
    href: "https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca",
  },
  {
    label: "Política de Segurança da Informação",
    href: "#privacidade",
  },
];

const socialIcons = ["Facebook", "Instagram", "Twitter"];

export function Footer() {
  return (
    <footer className="bg-[#EAEAE5]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[5vw] pt-12 pb-6">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="shrink-0"
              >
                <circle cx="14" cy="14" r="6" fill="#C49A2C" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x1 = 14 + Math.cos(rad) * 8;
                  const y1 = 14 + Math.sin(rad) * 8;
                  const x2 = 14 + Math.cos(rad) * 12;
                  const y2 = 14 + Math.sin(rad) * 12;
                  return (
                    <line
                      key={deg}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#C49A2C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
              <div className="leading-tight">
                <span className="text-[#005A8C] font-semibold text-base block">
                  ATI Tocantins
                </span>
                <span className="text-[#005A8C]/70 text-[11px] block">
                  Governo do Estado
                </span>
              </div>
            </div>
            <p className="text-sm text-[#5A5A5A] mt-3 max-w-[280px] leading-relaxed">
              Agência de Tecnologia da Informação do Estado do Tocantins
            </p>
            <div className="flex items-center gap-2 mt-2">
              <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="6" fill="#8A8A8A" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A]">
                Governo do Tocantins
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#1A1A1A] block mb-4">
              Links Rápidos
            </span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-[#5A5A5A] hover:text-[#005A8C] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#1A1A1A] block mb-4">
              Contato
            </span>
            <p className="text-sm text-[#5A5A5A]">contato@ati.to.gov.br</p>
            <p className="text-sm text-[#5A5A5A] mt-1">(63) 3212-4500</p>
            <div className="flex gap-3 mt-4">
              {socialIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[#8A8A8A] hover:text-[#005A8C] transition-colors duration-200 cursor-default"
                >
                  <DynamicIcon name={icon} size={20} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-[#D8D8D0] mt-8 pt-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A]">
            &copy; 2026 ATI Tocantins. Todos os direitos reservados.
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A] mt-1">
            Desenvolvido pela Agência de Tecnologia da Informação.
          </p>
        </div>
      </div>
    </footer>
  );
}
