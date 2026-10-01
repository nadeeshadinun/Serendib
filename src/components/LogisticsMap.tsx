import React, { useState } from 'react';

export const LogisticsMap: React.FC = () => {
  const [showCoordinatesModal, setShowCoordinatesModal] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-[#f9f9fb]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Map visual container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-sm relative bg-[#edeef0] border border-[#d9dadc]">
              <div
                className="w-full h-[400px] md:h-[440px] bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdlYX_umFVX46C47E99QHH-tOqZ_rR_x5m6s6IfiAd2Knbr7enDoY2_m9qoQK4YKSTVWz_DgIkcaUOn8Y0RF-wWR_hIihadLrXVEBzjZYvVfCyYHYHjI6SdBT85h7J_IAbbfK2LIGLp_pMF_l_7t9mwvXpCBfC1XHB47LFPHWp8Ql7gR5r0HT4952GBwKm35LC2-iTSq9HbNjKAfklsk8Kshp983B3_ZWTsROpnR2PXoCJDUvOCHJ5')`,
                }}
              >
                <div className="absolute inset-0 bg-[#012d1d]/15 backdrop-blur-[1px]"></div>

                {/* Floating Map Pin Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/60">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#805533] text-[24px]">
                      location_on
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#012d1d]">
                        Port of Colombo &amp; Matale Spice Corridor
                      </p>
                      <p className="text-xs text-[#414844]">
                        Container Terminal Direct Dispatch: 24 to 48 Hours
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCoordinatesModal(true)}
                    className="px-4 py-2 rounded bg-[#012d1d] text-white text-[11px] font-bold uppercase tracking-wider shrink-0 hover:bg-[#1b4332] transition-all cursor-pointer"
                  >
                    Open Route Coordinates
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Facility Schedule */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#805533] font-bold">
                Export Corridors
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] tracking-tight mt-1">
                Strategically Positioned for Rapid Global Sailing
              </h2>
            </div>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="p-4 rounded-xl bg-[#f3f3f6] border border-[#edeef0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#012d1d] text-[22px] shrink-0 mt-0.5">
                  apartment
                </span>
                <div>
                  <h4 className="font-bold text-[#012d1d] text-sm">
                    Head Logistics Desk &amp; Colombo Port Hub
                  </h4>
                  <p className="text-[#414844] mt-0.5">42 Temple Road, Colombo 03, Sri Lanka</p>
                  <p className="text-[11px] text-[#3f6653] mt-1 font-bold">
                    Within 8km of Colombo South Harbor Deep-Water Terminal
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f3f3f6] border border-[#edeef0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#012d1d] text-[22px] shrink-0 mt-0.5">
                  agriculture
                </span>
                <div>
                  <h4 className="font-bold text-[#012d1d] text-sm">
                    Serendib Heritage Estate &amp; Primary Mills
                  </h4>
                  <p className="text-[#414844] mt-0.5">
                    Matale Valley Spice Ridge, Central Province, Sri Lanka
                  </p>
                  <p className="text-[11px] text-[#3f6653] mt-1 font-bold">
                    On-site Steam Decontamination &amp; Hermetic Vacuum Packing
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f3f3f6] border border-[#edeef0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#012d1d] text-[22px] shrink-0 mt-0.5">
                  flight_takeoff
                </span>
                <div>
                  <h4 className="font-bold text-[#012d1d] text-sm">Air Cargo Gateway</h4>
                  <p className="text-[#414844] mt-0.5">
                    Bandaranaike International Airport (CMB) — Daily courier airfreight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Coordinates Modal */}
      {showCoordinatesModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xl font-bold text-[#012d1d]">
                Maritime &amp; Transport Corridor
              </h4>
              <button
                onClick={() => setShowCoordinatesModal(false)}
                className="w-8 h-8 rounded-full bg-[#f3f3f6] flex items-center justify-center text-[#414844]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="space-y-2 text-xs text-[#414844]">
              <div className="p-3 bg-[#f3f3f6] rounded border border-[#edeef0]">
                <p className="font-bold text-[#012d1d]">Colombo Deep-Water Terminal</p>
                <p className="font-mono text-[11px] text-[#805533]">6.9497° N, 79.8450° E</p>
                <p className="mt-1">Berth depth: 18m, accommodates ultra-large container vessels (ULCVs).</p>
              </div>
              <div className="p-3 bg-[#f3f3f6] rounded border border-[#edeef0]">
                <p className="font-bold text-[#012d1d]">Matale Spice Aggregation Hub</p>
                <p className="font-mono text-[11px] text-[#805533]">7.4675° N, 80.6234° E</p>
                <p className="mt-1">Highland elevation 650m AMSL with climate-controlled storage.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowCoordinatesModal(false)}
                className="px-4 py-2 rounded bg-[#012d1d] text-white text-xs font-bold uppercase"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
