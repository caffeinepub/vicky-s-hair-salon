import { useState } from "react";
import { SiFacebook, SiInstagram, SiPinterest, SiTiktok } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Meet the Team", href: "#team" },
  { label: "Book Now", href: "#contact" },
];

const serviceLinks = [
  "Balayage",
  "Highlights",
  "Keratin Treatment",
  "Bridal Styling",
  "Color Treatment",
  "Blowout",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const socialLinks = [
    { Icon: SiInstagram, label: "Instagram", href: null },
    {
      Icon: SiFacebook,
      label: "Facebook",
      href: "https://www.facebook.com/people/Vickys-Hair-Salon/61566999647143/",
    },
    { Icon: SiTiktok, label: "TikTok", href: null },
    { Icon: SiPinterest, label: "Pinterest", href: null },
  ];

  return (
    <footer style={{ background: "#1A1412" }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="font-serif text-3xl font-bold mb-1"
              style={{ color: "#C9A09A" }}
            >
              Vicky's
            </h3>
            <p className="text-xs mb-1" style={{ color: "#B98C86" }}>
              Hair Salon
            </p>
            <p
              className="text-sm leading-relaxed mt-4 mb-6"
              style={{ color: "rgba(246,242,237,0.6)" }}
            >
              Luxury haircare in the heart of Austin, TX. Where every
              appointment is an experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="footer.link"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(201,160,154,0.15)",
                      color: "#C9A09A",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ) : (
                  <button
                    key={label}
                    type="button"
                    data-ocid="footer.link"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(201,160,154,0.15)",
                      color: "#C9A09A",
                    }}
                  >
                    <Icon size={16} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#C9A09A" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    data-ocid="footer.link"
                    className="text-sm transition-colors duration-200 hover:text-[#C9A09A]"
                    style={{ color: "rgba(246,242,237,0.6)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#C9A09A" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => handleNav("#services")}
                    data-ocid="footer.link"
                    className="text-sm transition-colors duration-200 hover:text-[#C9A09A]"
                    style={{ color: "rgba(246,242,237,0.6)" }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#C9A09A" }}
            >
              Stay Connected
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(246,242,237,0.6)" }}
            >
              Get exclusive offers, style tips, and first access to new
              services.
            </p>
            {subscribed ? (
              <p
                data-ocid="footer.success_state"
                className="text-sm font-bold"
                style={{ color: "#C9A09A" }}
              >
                ✓ Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  data-ocid="footer.input"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-full text-sm outline-none border"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(201,160,154,0.3)",
                    color: "#F6F2ED",
                  }}
                />
                <button
                  type="submit"
                  data-ocid="footer.submit_button"
                  className="btn-rose px-6 py-3 rounded-full text-xs font-bold tracking-widest"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
            <div
              className="mt-6 text-sm"
              style={{ color: "rgba(246,242,237,0.6)" }}
            >
              <p>11200 Menchaca Rd Bldg 4 Unit 3</p>
              <p>Austin, TX 78748</p>
              <p className="mt-1">+1 737-999-3005</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(201,160,154,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "rgba(246,242,237,0.4)" }}>
            © {year} Vicky's Hair Salon. All Rights Reserved. Austin, TX.
          </p>
          <p className="text-xs" style={{ color: "rgba(246,242,237,0.4)" }}>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A09A] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
