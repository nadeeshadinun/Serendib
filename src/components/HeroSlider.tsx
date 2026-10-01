import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
  onOpenSpecModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenSpecModal }) => {
  const [currentSlide, setCurrentSlide] = useState(1); // Default to Slide 2 as in screenshot: "Sun-Cured Purity Meets ISO 22000..."

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#012d1d] text-white pt-24" id="hero">
      {/* Slides Viewport */}
      <div className="relative w-full min-h-[580px] lg:min-h-[660px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 0 */}
          <div className="w-full shrink-0 relative flex items-center min-h-[580px] lg:min-h-[660px]">
            <img
              alt="Serendib Valley Plantation Matale"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASAXA6gAPPMpOu1N9jrvGlSyet5eOoMBgUxoy2lqOYMC_FdxgSmQDvw2kaZ9nqCKH6T6O88dKaX7sfN28MUtN3xtyQwN__mwrwchFCt3l1pD_1JRqqy9h_1X0QNMeSNNnSGVqReVbaPgzpYKXlVR33SnHqOqHegM6wrE4v7qQt17E-THxDIzM9DMLoancoXfPOUHgrJ9_Sxkal8VxFHcFV7ntAu3YtYYuL9tulp5jb7TNmhCDHMity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d] via-[#012d1d]/85 to-transparent"></div>
            <div className="relative max-w-[1440px] mx-auto px-4 md:px-12 py-10 z-10 w-full">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#fdc39a] animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-widest text-[#fdc39a] uppercase">
                    High-Altitude Harvest • Matale Terroir
                  </span>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.15]">
                  Single-Origin Ceylon Black Pepper. Hand-Harvested. Globally Exported.
                </h1>
                <p className="text-base md:text-lg text-[#f0f0f3]/90 leading-relaxed font-normal">
                  Cultivated in pristine central highland micro-climates. Naturally boasting 5.8% to 7.2% raw piperine content with assertive woody undertones, citrus hints, and lab-certified purity for discerning international palates.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    className="px-5 py-3 rounded bg-[#fdc39a] text-[#794e2e] text-sm font-semibold hover:bg-[#ffdcbd] transition-colors shadow-md"
                    href="#product-showcase"
                  >
                    Order 500g Sample Pouch
                  </a>
                  <button
                    onClick={onOpenSpecModal}
                    className="px-5 py-3 rounded bg-white/10 backdrop-blur-md text-white text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Download Commercial Spec Sheet (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 1 - As shown in user screenshot! */}
          <div className="w-full shrink-0 relative flex items-center min-h-[580px] lg:min-h-[660px]">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM15ByPjayHuJRUZ8TGmI50ePanqb4baM4Y7g1KiOiA_ftxBoqtu5Z0TBHnHG3kSVhmE_Q6LYJWEarnGaPvUcT7Fp1fHrq38fpZA876na_pQcdvhsUYVyClKxqClD93VoH3lHaL4VBI9JcUnfKPGgH27Wq3rr8yY7kiFkk9l36m5mj2zRC7vudGUXXU5Hw3Hc82EAgjur-yBHFNyA2kyzNdsav9fodQZ_koTP9tE-pI5-Shi-JJPFu')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d] via-[#012d1d]/85 to-transparent"></div>
            <div className="relative max-w-[1440px] mx-auto px-4 md:px-12 py-10 z-10 w-full">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-[#fdc39a]">clean_hands</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#fdc39a] uppercase">
                    Steam Sterilized &amp; Triple Screened
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.15]">
                  Sun-Cured Purity Meets ISO 22000 Sterilization Standards.
                </h2>
                <p className="text-base md:text-lg text-[#f0f0f3]/90 leading-relaxed font-normal">
                  Every peppercorn undergoes gentle dehydration below 12% moisture thresholds, retaining volatile aromatic monoterpenes while ensuring strict pathogen elimination for European and US FDA clearance.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    className="px-5 py-3 rounded bg-[#fdc39a] text-[#794e2e] text-sm font-semibold hover:bg-[#ffdcbd] transition-colors shadow-md"
                    href="#traceability-hub"
                  >
                    Verify Batch Analytics
                  </a>
                  <a
                    className="px-5 py-3 rounded bg-white/10 backdrop-blur-md text-white text-sm font-semibold hover:bg-white/20 transition-all"
                    href="#bulk-inquiry"
                  >
                    Request FCL Export Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full shrink-0 relative flex items-center min-h-[580px] lg:min-h-[660px]">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_4J3-J1UFaZRGXWeIRxx206yYoQhSLxnP3RpfCJueoC0_0WvKIq9AeJOZm_MvQwB5Kk-7BWHZNbAGB7YAi0OM26C44x5_F8cmGsmMhEV_zKKAqb9Me8HpP0GA_eS8qvKJF1_te1USRkXo9U2oql1YUG1fqzrtvHOVYft6vdRXaMQpkyoW6Zx0tZmogYCKHAuzWrkrMkWk5ZigyNwZmO4aeTmzqhKmAujs-3zel9QWy_e0IYbJrgso')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d] via-[#012d1d]/85 to-transparent"></div>
            <div className="relative max-w-[1440px] mx-auto px-4 md:px-12 py-10 z-10 w-full">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-[#fdc39a]">eco</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#fdc39a] uppercase">
                    Regenerative Agro-Forestry
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.15]">
                  Single-Estate Traceability From Vine to Container Port.
                </h2>
                <p className="text-base md:text-lg text-[#f0f0f3]/90 leading-relaxed font-normal">
                  No intermediary blending. Hand-plucked by multi-generational harvesters on ancestral family estates, honoring biodiversity and equitable ethical trading across all Sri Lankan spice valleys.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    className="px-5 py-3 rounded bg-[#fdc39a] text-[#794e2e] text-sm font-semibold hover:bg-[#ffdcbd] transition-colors shadow-md"
                    href="#product-showcase"
                  >
                    Explore 500g Specifications
                  </a>
                  <a
                    className="px-5 py-3 rounded bg-white/10 backdrop-blur-md text-white text-sm font-semibold hover:bg-white/20 transition-all"
                    href="#gallery"
                  >
                    View Harvest Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Tabs */}
      <div className="relative z-20 bg-[#1b4332]/90 backdrop-blur-md py-2 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            className={`text-left p-3 rounded transition-all cursor-pointer ${
              currentSlide === 0
                ? 'bg-white/15 text-white'
                : 'bg-transparent text-[#f0f0f3]/60 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setCurrentSlide(0)}
          >
            <p className="text-[10px] font-bold tracking-wider uppercase text-[#fdc39a]">01 • Plantation</p>
            <p className="text-sm font-semibold truncate text-white">Matale &amp; Kandy Hillside Estates</p>
          </button>
          <button
            className={`text-left p-3 rounded transition-all cursor-pointer ${
              currentSlide === 1
                ? 'bg-white/15 text-white'
                : 'bg-transparent text-[#f0f0f3]/60 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setCurrentSlide(1)}
          >
            <p className="text-[10px] font-bold tracking-wider uppercase text-[#fdc39a]">02 • Processing</p>
            <p className="text-sm font-semibold truncate text-white">Steam Sterilization &amp; Sun-Curing</p>
          </button>
          <button
            className={`text-left p-3 rounded transition-all cursor-pointer ${
              currentSlide === 2
                ? 'bg-white/15 text-white'
                : 'bg-transparent text-[#f0f0f3]/60 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setCurrentSlide(2)}
          >
            <p className="text-[10px] font-bold tracking-wider uppercase text-[#fdc39a]">03 • Integrity</p>
            <p className="text-sm font-semibold truncate text-white">Sustainable Agro-Forestry &amp; Direct Trade</p>
          </button>
        </div>
      </div>

      {/* Live Stats Export Ribbon */}
      <div className="bg-[#e2e2e5] text-[#1a1c1e] py-3 border-y border-[#d9dadc]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-1.5 text-[#012d1d]">
            <span className="material-symbols-outlined text-[18px] text-[#805533]">tune</span>
            <span className="font-bold">Density:</span> 550 - 580 g/L (Garbled Export Grade 1)
          </div>
          <div className="flex items-center gap-1.5 text-[#012d1d]">
            <span className="material-symbols-outlined text-[18px] text-[#805533]">water_drop</span>
            <span className="font-bold">Moisture Content:</span> &lt; 11.4% Guaranteed
          </div>
          <div className="flex items-center gap-1.5 text-[#012d1d]">
            <span className="material-symbols-outlined text-[18px] text-[#805533]">biotech</span>
            <span className="font-bold">Piperine Index:</span> 6.45% Avg. HPLC Batch LK-04
          </div>
          <div className="flex items-center gap-1.5 text-[#012d1d]">
            <span className="material-symbols-outlined text-[18px] text-[#805533]">verified_user</span>
            <span className="font-bold">Origin Trace:</span> Sri Lanka EDB #EDB/AG/7721
          </div>
        </div>
      </div>
    </section>
  );
};
