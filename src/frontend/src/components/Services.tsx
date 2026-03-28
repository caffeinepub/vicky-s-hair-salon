const services = [
  {
    emoji: "✂️",
    name: "Women's Haircut",
    description:
      "Precision cuts tailored to your face shape, lifestyle, and personal style vision.",
    price: "$65+",
  },
  {
    emoji: "💈",
    name: "Men's Haircut",
    description:
      "Classic and contemporary cuts with expert styling and grooming finishing.",
    price: "$45+",
  },
  {
    emoji: "🌅",
    name: "Balayage",
    description:
      "Handcrafted sun-kissed color with seamless blends that grow out beautifully.",
    price: "$180+",
  },
  {
    emoji: "✨",
    name: "Highlights",
    description:
      "Multi-dimensional highlights for natural luminosity and movement through your hair.",
    price: "$140+",
  },
  {
    emoji: "🎨",
    name: "Color Treatment",
    description:
      "Full-spectrum color services from subtle changes to bold, vibrant transformations.",
    price: "$120+",
  },
  {
    emoji: "💎",
    name: "Keratin Treatment",
    description:
      "Professional smoothing treatment for frizz-free, silky, manageable hair all year.",
    price: "$250+",
  },
  {
    emoji: "💨",
    name: "Blowout",
    description:
      "Salon-perfect blowout for smooth, voluminous hair that lasts days.",
    price: "$55+",
  },
  {
    emoji: "👑",
    name: "Bridal Styling",
    description:
      "Your dream bridal look — from trial run to your perfect wedding day hair.",
    price: "$200+",
  },
  {
    emoji: "🌿",
    name: "Deep Conditioning",
    description:
      "Intensive moisture and repair treatments that restore health and shine.",
    price: "$75+",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ background: "#F0DFDA" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p
            className="text-xs font-bold tracking-[0.3em] mb-4 uppercase"
            style={{ color: "#A77570" }}
          >
            What We Offer
          </p>
          <h2
            className="section-heading text-4xl md:text-5xl"
            style={{ color: "#1F1A18" }}
          >
            Our Premium Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.name}
              data-animate
              className={`stagger-${(i % 3) + 1}`}
            >
              <div
                className="service-card bg-white rounded-2xl p-8 h-full transition-all duration-300 cursor-default"
                style={{ boxShadow: "4px 4px 0px #C8A09A" }}
              >
                <div className="text-4xl mb-5">{service.emoji}</div>
                <h3
                  className="font-serif text-xl font-bold mb-3"
                  style={{ color: "#1F1A18" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#6E625F" }}
                >
                  {service.description}
                </p>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-bold"
                  style={{ background: "#F0DFDA", color: "#A77570" }}
                >
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14" data-animate>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-ocid="services.primary_button"
            className="btn-rose px-12 py-4 rounded-full text-sm font-bold tracking-widest"
          >
            BOOK A SERVICE
          </button>
        </div>
      </div>
    </section>
  );
}
