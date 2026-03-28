import { ChevronDown } from "lucide-react";
import { Suspense } from "react";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#1A1412" }}
    >
      {/* 3D Canvas background */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(185,140,134,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs font-bold tracking-[0.35em] mb-6"
          style={{
            color: "#C9A09A",
            animation: "fadeIn 1s ease-out 0.2s both",
          }}
        >
          AUSTIN, TX · 4.8 ★ RATED · 143 REVIEWS
        </p>

        {/* Main heading */}
        <h1
          className="font-serif text-6xl md:text-8xl font-bold mb-6 leading-tight"
          style={{
            animation: "fadeUp 1s ease-out 0.5s both",
          }}
        >
          <span className="shimmer-text">Vicky's</span>
          <br />
          <span style={{ color: "#F6F2ED" }}>Hair Salon</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl font-light tracking-wide mb-10"
          style={{
            color: "rgba(246,242,237,0.75)",
            animation: "fadeUp 1s ease-out 0.9s both",
          }}
        >
          Luxury Haircare. Modern Trends. Premier USA Salon.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            animation: "fadeUp 1s ease-out 1.2s both",
          }}
        >
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="hero.primary_button"
            className="btn-rose px-10 py-4 rounded-full text-base font-bold tracking-widest shadow-lg"
          >
            BOOK NOW
          </button>
          <button
            type="button"
            onClick={scrollToServices}
            data-ocid="hero.secondary_button"
            className="flex items-center gap-2 text-sm font-semibold tracking-widest transition-all duration-200 hover:text-white"
            style={{ color: "rgba(246,242,237,0.65)" }}
          >
            EXPLORE SERVICES
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll indicator line */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "fadeIn 1s ease-out 2s both" }}
      >
        <div
          className="w-px h-12 mx-auto"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #B98C86, transparent)",
          }}
        />
      </div>
    </section>
  );
}
