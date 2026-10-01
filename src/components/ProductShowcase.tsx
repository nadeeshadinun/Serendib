import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/mockData';

interface ProductShowcaseProps {
  onProcureOrder: (tierName: string, priceText: string) => void;
  onOpenRfq: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onProcureOrder,
  onOpenRfq,
}) => {
  const [selectedTierId, setSelectedTierId] = useState('master');
  const selectedTier = PRICING_TIERS.find((t) => t.id === selectedTierId) || PRICING_TIERS[1];

  return (
    <section className="py-12 md:py-16 bg-[#f9f9fb]" id="product-showcase">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#805533] font-bold">
              Export Specimen #01
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] tracking-tight mt-1">
              Ceylon Black Pepper — High Grade (500g)
            </h2>
            <p className="text-sm md:text-base text-[#414844] max-w-xl mt-1">
              Single-origin whole peppercorn export lot hermetically packed in recyclable craft pouches with aroma freshness barrier.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded bg-[#e8e8ea] text-[#012d1d] text-xs font-bold uppercase tracking-wider">
              USDA Organic
            </span>
            <span className="px-3 py-1 rounded bg-[#e8e8ea] text-[#012d1d] text-xs font-bold uppercase tracking-wider">
              EU Organic
            </span>
            <span className="px-3 py-1 rounded bg-[#e8e8ea] text-[#012d1d] text-xs font-bold uppercase tracking-wider">
              ISO 22000
            </span>
            <span className="px-3 py-1 rounded bg-[#e8e8ea] text-[#012d1d] text-xs font-bold uppercase tracking-wider">
              Fair Trade Ceylon
            </span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Packaging image & specs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative bg-[#f3f3f6] rounded-xl p-4 md:p-6 overflow-hidden shadow-sm group border border-[#edeef0]">
              <div className="aspect-square w-full rounded-lg overflow-hidden bg-white flex items-center justify-center relative">
                <img
                  alt="Serendib Ceylon Black Pepper High Grade 500g Kraft Pouch"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyo8iS8mEkkF41C5VLMZzAAQ2a_qsfTt4qI5EQ9AZOG2QwEZKH-sLXTaj0sfk1Uu__bMuA0C6ieP2oJvEznfODsNwDOcHjwX1mEmSjv6wADz-9QtMCr46tWZdncQmrqdORxW8YhH4t4YYjDJqdF7D7U2_s3gL4PVnpgwk1tSvpcjU3suxJcpBysUaGJiljlz6qiWmCatjfXb9CBqt5_IFR_Q3jlwNzdBx44jbMx9kvT1hfwOgMPYgz"
                />
                <div className="absolute top-4 right-4 bg-[#012d1d] text-white px-3 py-1 rounded shadow text-[10px] font-bold uppercase tracking-wider">
                  Harvest Batch #LK-2025-04
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-white rounded border border-[#edeef0]">
                  <span className="text-[10px] text-[#805533] uppercase font-bold block">Net Weight</span>
                  <span className="text-base font-bold text-[#012d1d]">500g e</span>
                  <span className="text-[11px] text-[#414844] block">1.10 lbs</span>
                </div>
                <div className="p-3 bg-white rounded border border-[#edeef0]">
                  <span className="text-[10px] text-[#805533] uppercase font-bold block">Piperine Heat</span>
                  <span className="text-base font-bold text-[#012d1d]">6.4%</span>
                  <span className="text-[11px] text-[#414844] block">Lab Certified</span>
                </div>
                <div className="p-3 bg-white rounded border border-[#edeef0]">
                  <span className="text-[10px] text-[#805533] uppercase font-bold block">Shelf Life</span>
                  <span className="text-base font-bold text-[#012d1d]">36 Mo</span>
                  <span className="text-[11px] text-[#414844] block">Sealed Aroma Barrier</span>
                </div>
              </div>
            </div>

            {/* Industrial Packaging Anatomy */}
            <div className="p-4 md:p-6 rounded-xl bg-[#f3f3f6] border border-[#edeef0] space-y-3">
              <h4 className="text-base font-bold text-[#012d1d] flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#805533]">inventory_2</span>
                Industrial Packaging Anatomy
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-[#414844]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#3f6653] mt-0.5 shrink-0">check</span>
                  <span><strong>Multi-layer Kraft:</strong> Recyclable external natural paper laminated with food-grade internal foil.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#3f6653] mt-0.5 shrink-0">check</span>
                  <span><strong>Aroma Lock:</strong> Heat-sealed top with heavy-duty resealable zipper and tear notches.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#3f6653] mt-0.5 shrink-0">check</span>
                  <span><strong>Inspection Window:</strong> Clear food-grade front aperture to view whole peppercorn grain size.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#3f6653] mt-0.5 shrink-0">check</span>
                  <span><strong>Carton Config:</strong> 20 pouches per export corrugated master carton (10.8 kg gross).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Commercial Specifications & Procurement Calculator */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 md:p-8 rounded-xl bg-white border border-[#edeef0] shadow-sm space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#805533]">
                  Organoleptic &amp; Physical Analysis
                </span>
                <h3 className="font-serif text-2xl text-[#012d1d] mt-1 font-semibold">
                  Export Certificate Metrics
                </h3>
              </div>

              {/* Spec Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <tbody className="divide-y divide-[#edeef0]">
                    <tr>
                      <td className="py-2.5 font-bold text-[#1a1c1e] w-2/5">Botanical Identity</td>
                      <td className="py-2.5 text-[#414844]">Piper nigrum L. (Ceylon Single-Cultivar)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#1a1c1e]">Origin &amp; Elevation</td>
                      <td className="py-2.5 text-[#414844]">Matale Corridors, Central Province (650m AMSL)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#1a1c1e]">Aroma &amp; Tasting Notes</td>
                      <td className="py-2.5 text-[#414844]">Penetrating camphoraceous warmth, cracked citrus, resinous cedar</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#1a1c1e]">Extraneous Matter</td>
                      <td className="py-2.5 text-[#414844]">&lt; 0.2% max (Optical mechanical sorted)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#1a1c1e]">Heavy Metals / Aflatoxins</td>
                      <td className="py-2.5 text-[#414844]">EU / US FDA Undetected (Eurofins Lab Pass)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#1a1c1e]">HS Code Tariff</td>
                      <td className="py-2.5 text-[#414844]">0904.11.90 (Pepper of the Genus Piper, Neither Crushed)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tier Pricing Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-[#012d1d] uppercase tracking-wide block">
                  Select Export Procurement Tier:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PRICING_TIERS.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-all relative border ${
                        selectedTierId === tier.id
                          ? 'bg-[#e8e8ea] border-[#012d1d] shadow-sm'
                          : 'bg-[#f3f3f6] border-transparent hover:bg-[#e8e8ea]'
                      }`}
                    >
                      {tier.badge && (
                        <span className="absolute -top-2 right-2 px-1.5 py-0.5 bg-[#805533] text-white rounded text-[9px] font-bold uppercase">
                          {tier.badge}
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#012d1d]">{tier.name}</span>
                        <span className="material-symbols-outlined text-[16px] text-[#3f6653]">
                          {tier.icon}
                        </span>
                      </div>
                      <p className="text-base font-bold text-[#012d1d] mt-1">{tier.priceText}</p>
                      <p className="text-[11px] text-[#414844] mt-0.5">{tier.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Price & Action */}
              <div className="p-4 rounded-lg bg-[#edeef0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#414844] block">
                    Selected: {selectedTier.name} ({selectedTier.id === 'master' ? '20x 500g' : selectedTier.id === 'sample' ? '1x 500g' : 'Bulk Container'})
                  </span>
                  <span className="text-2xl font-serif text-[#012d1d] font-bold">
                    {selectedTier.priceText}{' '}
                    <span className="text-xs font-sans font-normal text-[#414844]">
                      {selectedTier.price > 0 ? 'USD (Ex-Works / Air Eligible)' : 'USD (FOB Colombo Port)'}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onProcureOrder(selectedTier.name, selectedTier.priceText)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded bg-[#012d1d] text-white text-xs font-bold hover:bg-[#1b4332] transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer uppercase"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    Procure Order
                  </button>
                  <button
                    onClick={onOpenRfq}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded bg-white text-[#805533] text-xs font-bold hover:bg-[#f3f3f6] transition-all text-center border border-[#edeef0] cursor-pointer uppercase"
                  >
                    Bulk RFQ
                  </button>
                </div>
              </div>

              {/* Guarantees Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#414844] pt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#3f6653]">local_shipping</span>
                  DHL Express Air 3-5 Days
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#3f6653]">verified</span>
                  EDB Export Docs Included
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#3f6653]">lock</span>
                  Escrow &amp; LC Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
