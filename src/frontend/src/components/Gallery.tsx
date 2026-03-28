const galleryImages = [
  { src: "/assets/generated/hair1.dim_800x600.jpg", alt: "Natural curls" },
  { src: "/assets/generated/hair2.dim_800x600.jpg", alt: "Balayage blowout" },
  { src: "/assets/generated/hair3.dim_800x600.jpg", alt: "Sleek brunette" },
  {
    src: "/assets/generated/hair4.dim_800x600.jpg",
    alt: "Red copper highlights",
  },
  { src: "/assets/generated/hair5.dim_800x600.jpg", alt: "Bridal updo" },
  { src: "/assets/generated/hair6.dim_800x600.jpg", alt: "Natural afro curls" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6"
      style={{ background: "#1A1412" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p
            className="text-xs font-bold tracking-[0.3em] mb-4 uppercase"
            style={{ color: "#C9A09A" }}
          >
            Our Work
          </p>
          <h2
            className="section-heading text-4xl md:text-5xl"
            style={{ color: "#F6F2ED" }}
          >
            Salon Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={img.src} data-animate className={`stagger-${i + 1}`}>
              <div
                className="gallery-item relative overflow-hidden rounded-xl cursor-pointer"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="overlay absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(26,20,18,0.6)" }}
                >
                  <div className="text-center">
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-2"
                      style={{ borderColor: "#C9A09A" }}
                    >
                      <span style={{ color: "#C9A09A", fontSize: "1.2rem" }}>
                        +
                      </span>
                    </div>
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: "#F6F2ED" }}
                    >
                      {img.alt}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
