import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    location: "New York, NY",
    text: "Vicky completely transformed my hair! The balayage is absolutely stunning — I get compliments everywhere I go. I've never felt more confident.",
  },
  {
    initials: "ER",
    name: "Emily R.",
    location: "Los Angeles, CA",
    text: "Best salon experience I've ever had. Sofia is a color genius! She knew exactly what I wanted before I even finished explaining.",
  },
  {
    initials: "JL",
    name: "Jennifer L.",
    location: "Miami, FL",
    text: "My bridal hair was absolute perfection. Every single guest couldn't stop complimenting me. I cried happy tears when I saw myself.",
  },
  {
    initials: "AT",
    name: "Ashley T.",
    location: "Chicago, IL",
    text: "The keratin treatment completely changed my life. My hair has never felt this silky and manageable. Worth every penny!",
  },
  {
    initials: "MK",
    name: "Michelle K.",
    location: "Houston, TX",
    text: "Jordan knows exactly how to handle curly hair. I'm absolutely obsessed with my results! Finally found my perfect stylist.",
  },
  {
    initials: "RB",
    name: "Rachel B.",
    location: "Seattle, WA",
    text: "Marcus gave my husband the best haircut of his life. He walked out looking like a whole new person. We're regulars for life!",
  },
];

const starKeys = ["s1", "s2", "s3", "s4", "s5"];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {starKeys.map((k) => (
        <Star key={k} size={14} fill="#B98C86" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(2);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePer = () => setPerPage(window.innerWidth < 768 ? 1 : 2);
    updatePer();
    window.addEventListener("resize", updatePer);
    return () => window.removeEventListener("resize", updatePer);
  }, []);

  const total = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const prev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((c) => (c - 1 + total) % total);
  };

  const next = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((c) => (c + 1) % total);
  };

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage,
  );

  const dotKeys = Array.from({ length: total }, (_, i) => `dot-${i}`);

  return (
    <section
      id="testimonials"
      className="py-24 px-6"
      style={{ background: "#F0DFDA" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p
            className="text-xs font-bold tracking-[0.3em] mb-4 uppercase"
            style={{ color: "#A77570" }}
          >
            Client Love
          </p>
          <h2
            className="section-heading text-4xl md:text-5xl"
            style={{ color: "#1F1A18" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="relative" data-animate>
          {/* Cards */}
          <div
            className={`grid gap-6 ${perPage === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}
          >
            {visible.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8"
                style={{ boxShadow: "0 4px 24px rgba(201,160,154,0.2)" }}
              >
                <StarRow />
                <p
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: "#1F1A18" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, #C9A09A, #B98C86)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm"
                      style={{ color: "#1F1A18" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "#6E625F" }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              type="button"
              onClick={prev}
              data-ocid="testimonials.pagination_prev"
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: "#B98C86", color: "#B98C86" }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {dotKeys.map((key, i) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCurrent(i)}
                  data-ocid="testimonials.toggle"
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    background: i === current ? "#B98C86" : "#C9A09A",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              data-ocid="testimonials.pagination_next"
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: "#B98C86", color: "#B98C86" }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
