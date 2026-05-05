import { useEffect, useState } from "react";
import { DynamicIcon } from "@/components/DynamicIcon";

export function HeroSection() {
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setHideIndicator(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden"
      style={{
        height: "min(70vh, 520px)",
        background: `linear-gradient(135deg, #005A8C 0%, #004A72 100%)`,
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[720px] px-4 text-center">
        {/* Label */}
        <p
          className="text-xs font-medium uppercase tracking-[0.12em] text-[#C49A2C] mb-4 opacity-0 animate-hero-label"
        >
          TRANSPARÊNCIA DIGITAL
        </p>

        {/* Headline */}
        <h1
          className="text-white font-bold opacity-0 animate-hero-headline"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.3,
            textWrap: "balance",
          }}
        >
          Termos de Uso e Políticas de Privacidade
        </h1>

        {/* Subtext */}
        <p
          className="text-white/80 text-base leading-relaxed mt-5 mx-auto opacity-0 animate-hero-subtext"
          style={{ maxWidth: "600px" }}
        >
          Acesse de forma centralizada e transparente os termos de uso e
          políticas de privacidade de todos os sistemas e aplicativos digitais
          do Governo do Estado do Tocantins. Sua privacidade e segurança são
          prioridades.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
          hideIndicator ? "opacity-0" : "opacity-40"
        }`}
      >
        <DynamicIcon
          name="ChevronDown"
          size={24}
          className="text-white animate-bounce-slow"
        />
      </div>
    </section>
  );
}
