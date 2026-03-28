import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}

function AnimatedCounter({ end, suffix, label, active, delay }: CounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = end / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => clearTimeout(timeout);
  }, [active, end, delay]);

  return (
    <div className="text-center p-8 rounded-2xl bg-white shadow-rose transition-all duration-300 hover:shadow-rose-lg hover:-translate-y-1">
      <div
        className="font-serif text-5xl font-bold mb-2"
        style={{ color: "#B98C86" }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ color: "#6E625F" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: "#F6F2ED" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: story */}
          <div data-animate="slide-left">
            <p
              className="text-xs font-bold tracking-[0.3em] mb-4 uppercase"
              style={{ color: "#B98C86" }}
            >
              Our Story
            </p>
            <h2
              className="section-heading text-4xl md:text-5xl mb-6"
              style={{ color: "#1F1A18" }}
            >
              Crafting Beauty
              <br />
              <span style={{ color: "#B98C86" }}>Since 2008</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#6E625F" }}
            >
              Founded by Vicky Martinez in Beverly Hills, Vicky's Hair Salon
              began as a boutique studio dedicated to one vision: giving every
              client the hair they deserve. Trained in New York and Paris, Vicky
              brought European technique and American energy together under one
              roof.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#6E625F" }}
            >
              Today, our award-winning team of stylists serves clients across
              the country — from Hollywood celebrities to everyday women and men
              who simply want to look and feel their absolute best. We blend
              artistry, science, and passion in every appointment.
            </p>
            <div className="flex gap-4">
              <span
                className="inline-block w-12 h-0.5"
                style={{ background: "#B98C86" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#B98C86" }}
              >
                Beverly Hills, CA
              </span>
            </div>
          </div>

          {/* Right: counters */}
          <div className="grid grid-cols-2 gap-6" data-animate="slide-right">
            <AnimatedCounter
              end={15}
              suffix="+"
              label="Years of Excellence"
              active={inView}
              delay={0}
            />
            <AnimatedCounter
              end={10000}
              suffix="+"
              label="Happy Clients"
              active={inView}
              delay={200}
            />
            <AnimatedCounter
              end={12}
              suffix=""
              label="Expert Stylists"
              active={inView}
              delay={400}
            />
            <AnimatedCounter
              end={98}
              suffix="%"
              label="Client Satisfaction"
              active={inView}
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
