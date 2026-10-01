import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f3f3f6] mt-16 shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-t border-[#edeef0]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Profile & EDB Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-[#012d1d]">
                Serendib Online Pvt Ltd
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#414844] leading-relaxed">
              Sovereign Grade Agro-Commodity Producers and Exporters. Direct single-estate provenance, high-piperine spices, and certified organic derivatives from Sri Lanka to international terminals.
            </p>
            <div className="p-3 rounded-lg bg-[#edeef0] border border-[#e2e2e5]">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#805533]">
                Statutory Export Registration
              </p>
              <p className="text-sm font-bold text-[#012d1d]">EDB Reg #EDB/AG/7721</p>
              <p className="text-xs text-[#414844]">Export Development Board of Sri Lanka</p>
            </div>
          </div>

          {/* Column 2: Estates & Operations */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-[#012d1d] uppercase tracking-wide">
              Estates &amp; Operations
            </p>
            <div className="space-y-3 text-xs md:text-sm text-[#414844]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#805533] mt-0.5 shrink-0">
                  business
                </span>
                <div>
                  <p className="font-bold text-[#1a1c1e]">Headquarters &amp; Export Logistics Office</p>
                  <p className="text-[#414844]">42 Temple Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#805533] mt-0.5 shrink-0">
                  agriculture
                </span>
                <div>
                  <p className="font-bold text-[#1a1c1e]">Serendib Heritage Estate &amp; Mills</p>
                  <p className="text-[#414844]">Matale Spice Corridors, Central Province, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#805533] mt-0.5 shrink-0">
                  local_shipping
                </span>
                <div>
                  <p className="font-bold text-[#1a1c1e]">Export Gateways</p>
                  <p className="text-[#414844]">Port of Colombo (Sea Freight) &amp; BIA Katunayake (Air Cargo)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Global Shipping Terminals */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-[#012d1d] uppercase tracking-wide">
              Global Shipping Terminals
            </p>
            <p className="text-xs text-[#414844]">
              Active standard shipping lanes with full phytosanitary clearance and laboratory certificates:
            </p>
            <ul className="text-xs space-y-1.5 text-[#1a1c1e]">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#1b4332]">check_circle</span>
                European Union (Rotterdam, Hamburg, Marseille)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#1b4332]">check_circle</span>
                United States &amp; Canada (New York, LA, Montreal)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#1b4332]">check_circle</span>
                Middle East (Jebel Ali, Dammam, Doha)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#1b4332]">check_circle</span>
                Japan &amp; East Asia (Yokohama, Kobe, Busan)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#1b4332]">check_circle</span>
                Australia &amp; New Zealand (Melbourne, Sydney)
              </li>
            </ul>
          </div>

          {/* Column 4: Certifications & Standards */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-[#012d1d] uppercase tracking-wide">
              Certifications &amp; Standards
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-lg bg-white border border-[#edeef0] text-center">
                <span className="material-symbols-outlined text-[20px] text-[#1b4332] block mb-1">eco</span>
                <span className="text-[11px] font-bold text-[#012d1d] block">USDA Organic</span>
                <span className="text-[10px] text-[#414844]">NOP Certified</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#edeef0] text-center">
                <span className="material-symbols-outlined text-[20px] text-[#1b4332] block mb-1">workspace_premium</span>
                <span className="text-[11px] font-bold text-[#012d1d] block">ISO 22000</span>
                <span className="text-[10px] text-[#414844]">Food Safety</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#edeef0] text-center">
                <span className="material-symbols-outlined text-[20px] text-[#1b4332] block mb-1">health_and_safety</span>
                <span className="text-[11px] font-bold text-[#012d1d] block">GMP &amp; HACCP</span>
                <span className="text-[10px] text-[#414844]">SGS Inspected</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#edeef0] text-center">
                <span className="material-symbols-outlined text-[20px] text-[#1b4332] block mb-1">handshake</span>
                <span className="text-[11px] font-bold text-[#012d1d] block">Fair Trade</span>
                <span className="text-[10px] text-[#414844]">Ceylon Origin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#edeef0] rounded-xl px-4 py-3 border border-[#e2e2e5]">
          <p className="text-xs text-[#414844]">
            © 2025 Serendib Online Pvt Ltd. All Global Agro-Export Rights Reserved. Direct Trade from Sri Lanka.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-[#414844]">
            <a className="hover:text-[#012d1d] uppercase" href="#product-showcase">
              Export Terms
            </a>
            <a className="hover:text-[#012d1d] uppercase" href="#product-showcase">
              Phytosanitary Policy
            </a>
            <a className="hover:text-[#012d1d] uppercase" href="#traceability-hub">
              Privacy &amp; Traceability
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
