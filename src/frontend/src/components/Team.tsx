const team = [
  {
    initials: "VM",
    name: "Vicky Martinez",
    role: "Founder & Lead Stylist",
    bio: "Trained in NYC and Paris, specializing in balayage and bridal styling with over 15 years of artistry.",
    gradient: "from-[#C9A09A] to-[#B98C86]",
  },
  {
    initials: "SC",
    name: "Sofia Chen",
    role: "Color Specialist",
    bio: "Master colorist with 10+ years creating stunning transformations, from subtle balayage to vivid hues.",
    gradient: "from-[#EAD3CF] to-[#C9A09A]",
  },
  {
    initials: "JT",
    name: "Jordan Taylor",
    role: "Texture Expert",
    bio: "Keratin and curl specialist passionate about healthy hair science and effortlessly beautiful texture.",
    gradient: "from-[#B98C86] to-[#A77570]",
  },
  {
    initials: "MW",
    name: "Marcus Webb",
    role: "Men's Grooming",
    bio: "Precision cuts and modern styles for the contemporary man — sharp, clean, and always on trend.",
    gradient: "from-[#A77570] to-[#8B5E5A]",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6" style={{ background: "#F6F2ED" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p
            className="text-xs font-bold tracking-[0.3em] mb-4 uppercase"
            style={{ color: "#B98C86" }}
          >
            The Artists
          </p>
          <h2
            className="section-heading text-4xl md:text-5xl"
            style={{ color: "#1F1A18" }}
          >
            Meet Our Master Stylists
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={member.name} data-animate className={`stagger-${i + 1}`}>
              <div
                className="team-card bg-white rounded-2xl p-8 text-center transition-all duration-300 cursor-default h-full"
                style={{ boxShadow: "0 4px 24px rgba(201,160,154,0.15)" }}
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`team-avatar w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-serif text-2xl font-bold transition-transform duration-300`}
                    style={{ boxShadow: "0 8px 24px rgba(185,140,134,0.3)" }}
                  >
                    {member.initials}
                  </div>
                </div>
                <h3
                  className="font-serif text-xl font-bold mb-1"
                  style={{ color: "#1F1A18" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#B98C86" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6E625F" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
