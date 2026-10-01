import React, { useState } from 'react';

interface HeaderProps {
  onOpenRfq: () => void;
  onOpenSpecModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRfq }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9fb]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Banner */}
      <div className="bg-[#1b4332] text-[#86af99] py-1.5 px-4 md:px-12 text-center flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[16px] text-[#fdc39a]">verified</span>
        <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-white">
          Global Agro-Exports from Sri Lanka • Worldwide Air &amp; Sea Freight • Harvest Batch #LK-2025-04 Certified
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-[1440px] mx-auto px-4 md:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            alt="Serendib Online Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WDw2MlLYPX6Zant80Tmjll9c-iE2wqy2xVL3b7SUj5wM8gbNdCaf9ka0pWisl9bb8ToQ0ooSGsC6F1nP9VCYHGKJR4r8JD4MQcisoS60205G_tdTnuMqt7y_lAMb6y48ljFMJ_jYeD9Q3UU9ACm2v_Pm5_hIIa4smrKxjXakEtV03YfwcodwaXHwy3tJqCD4aoFFxJqc0DRheD2tUxhV-TlisdPYL69dNK3cs3WceKVY4HbN6n-L3RIHk"
          />
          <div className="flex flex-col">
            <span className="text-[17px] font-bold tracking-tight text-[#012d1d] leading-tight">
              SERENDIB ONLINE
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#805533]">
              Estate Spices &amp; Agro Exports
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[13px] text-[#414844]">
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#hero">
            Home &amp; Plantation
          </a>
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#product-showcase">
            Products &amp; Harvest
          </a>
          <a className="text-[#012d1d] font-bold hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#product-showcase">
            Ceylon Black Pepper
          </a>
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#product-showcase">
            Quality &amp; Certs
          </a>
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#product-showcase">
            Export Specs
          </a>
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#traceability-hub">
            Traceability &amp; QR
          </a>
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#reviews">
            Client Reviews
          </a>
          <a className="hover:text-[#012d1d] transition-colors whitespace-nowrap" href="#bulk-inquiry">
            Contact &amp; RFQ
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f3f3f6] text-[#012d1d] hover:bg-[#edeef0] transition-colors"
            href="https://wa.me/94770000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#1b4332]">chat</span>
            <span className="text-[11px] font-bold">WhatsApp Desk</span>
          </a>

          <button
            onClick={onOpenRfq}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#012d1d] text-white hover:bg-[#1b4332] shadow-sm transition-all text-[11px] font-bold tracking-wide uppercase cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-[#fdc39a]">assignment</span>
            <span>RFQ Export</span>
          </button>

          <div
            className="w-8 h-8 rounded-full bg-[#012d1d] flex items-center justify-center text-white cursor-pointer hover:bg-[#1b4332] transition-colors"
            title="Serendib Registered Buyer Portal"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="xl:hidden p-2 text-[#012d1d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#edeef0] px-6 py-4 space-y-3">
          <a
            className="block text-sm font-semibold text-[#012d1d]"
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home &amp; Plantation
          </a>
          <a
            className="block text-sm text-[#414844]"
            href="#product-showcase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ceylon Black Pepper (500g)
          </a>
          <a
            className="block text-sm text-[#414844]"
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
          >
            Origin Gallery
          </a>
          <a
            className="block text-sm text-[#414844]"
            href="#traceability-hub"
            onClick={() => setMobileMenuOpen(false)}
          >
            Traceability &amp; QR
          </a>
          <a
            className="block text-sm text-[#414844]"
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
          >
            Facebook Client Reviews
          </a>
          <a
            className="block text-sm text-[#414844]"
            href="#bulk-inquiry"
            onClick={() => setMobileMenuOpen(false)}
          >
            Direct Agro-Export Quotation
          </a>
        </div>
      )}
    </header>
  );
};
