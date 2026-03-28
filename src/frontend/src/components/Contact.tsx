import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";

const services = [
  "Women's Haircut",
  "Men's Haircut",
  "Balayage",
  "Highlights",
  "Color Treatment",
  "Keratin Treatment",
  "Blowout",
  "Bridal Styling",
  "Deep Conditioning",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "#F6F2ED" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p
            className="text-xs font-bold tracking-[0.3em] mb-4 uppercase"
            style={{ color: "#B98C86" }}
          >
            Reserve Your Chair
          </p>
          <h2
            className="section-heading text-4xl md:text-5xl"
            style={{ color: "#1F1A18" }}
          >
            Book Your Appointment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div data-animate="slide-left">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center text-center h-full py-16 rounded-2xl"
                style={{ background: "#F0DFDA" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#B98C86" }}
                >
                  <Check size={28} color="white" />
                </div>
                <h3
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: "#1F1A18" }}
                >
                  Appointment Requested!
                </h3>
                <p style={{ color: "#6E625F" }}>
                  We'll confirm your booking within 24 hours. See you soon!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold tracking-widest"
                  style={{ color: "#B98C86" }}
                >
                  BOOK ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#6E625F" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    data-ocid="contact.input"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="salon-input w-full px-4 py-3 rounded-xl border bg-white text-sm"
                    style={{ borderColor: "#EAD3CF", color: "#1F1A18" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: "#6E625F" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      data-ocid="contact.input"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="salon-input w-full px-4 py-3 rounded-xl border bg-white text-sm"
                      style={{ borderColor: "#EAD3CF", color: "#1F1A18" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: "#6E625F" }}
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      data-ocid="contact.input"
                      type="tel"
                      placeholder="(737) 000-0000"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="salon-input w-full px-4 py-3 rounded-xl border bg-white text-sm"
                      style={{ borderColor: "#EAD3CF", color: "#1F1A18" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#6E625F" }}
                  >
                    Service
                  </label>
                  <select
                    id="contact-service"
                    data-ocid="contact.select"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="salon-input w-full px-4 py-3 rounded-xl border bg-white text-sm"
                    style={{
                      borderColor: "#EAD3CF",
                      color: form.service ? "#1F1A18" : "#6E625F",
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-date"
                    className="block text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#6E625F" }}
                  >
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    data-ocid="contact.input"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="salon-input w-full px-4 py-3 rounded-xl border bg-white text-sm"
                    style={{ borderColor: "#EAD3CF", color: "#1F1A18" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#6E625F" }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    rows={4}
                    placeholder="Any special requests or notes..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="salon-input w-full px-4 py-3 rounded-xl border bg-white text-sm resize-none"
                    style={{ borderColor: "#EAD3CF", color: "#1F1A18" }}
                  />
                </div>

                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="btn-rose w-full py-4 rounded-full font-bold tracking-widest text-sm mt-2"
                >
                  BOOK APPOINTMENT
                </button>
              </form>
            )}
          </div>

          {/* Salon info */}
          <div data-animate="slide-right" className="flex flex-col gap-8">
            <div>
              <h3
                className="font-serif text-2xl font-bold mb-6"
                style={{ color: "#1F1A18" }}
              >
                Visit the Salon
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F0DFDA" }}
                  >
                    <MapPin size={18} style={{ color: "#B98C86" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#B98C86" }}
                    >
                      Address
                    </p>
                    <p className="text-sm" style={{ color: "#1F1A18" }}>
                      11200 Menchaca Rd Building 4 Unit 3
                      <br />
                      Austin, TX 78748
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F0DFDA" }}
                  >
                    <Phone size={18} style={{ color: "#B98C86" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#B98C86" }}
                    >
                      Phone
                    </p>
                    <p className="text-sm" style={{ color: "#1F1A18" }}>
                      <a href="tel:+17379993005" className="hover:underline">
                        +1 737-999-3005
                      </a>
                      <br />
                      <a href="tel:+15127960671" className="hover:underline">
                        +1 512-796-0671
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F0DFDA" }}
                  >
                    <Mail size={18} style={{ color: "#B98C86" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#B98C86" }}
                    >
                      Email
                    </p>
                    <p className="text-sm" style={{ color: "#1F1A18" }}>
                      hello@vickyshairsalon.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F0DFDA" }}
                  >
                    <Clock size={18} style={{ color: "#B98C86" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#B98C86" }}
                    >
                      Hours
                    </p>
                    <p className="text-sm" style={{ color: "#1F1A18" }}>
                      Mon – Fri: 9:00 AM – 7:00 PM
                      <br />
                      Saturday: 8:00 AM – 6:00 PM
                      <br />
                      Sunday: 10:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl border"
              style={{ borderColor: "#EAD3CF", background: "#F0DFDA" }}
            >
              <p
                className="text-sm font-bold tracking-wide"
                style={{ color: "#1F1A18" }}
              >
                ✨ Walk-ins welcome · Appointments preferred
              </p>
              <p className="text-xs mt-2" style={{ color: "#6E625F" }}>
                Same-day appointments available subject to stylist availability.
                Call ahead to check openings.
              </p>
              <a
                href="https://booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="btn-rose inline-block mt-4 px-8 py-3 rounded-full text-xs font-bold tracking-widest text-center"
              >
                BOOK ONLINE VIA BOOKSY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
