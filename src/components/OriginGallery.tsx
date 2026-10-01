import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  category: 'vines' | 'peppercorns' | 'packaging';
  title: string;
  badge: string;
  desc: string;
  imgUrl: string;
  colSpan: string;
  height: string;
  actionIcon: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: 'peppercorns',
    title: 'Garbled Grade 1 Peppercorns',
    badge: 'Density Test Specimen',
    desc: 'Bulk density 575 g/l with rich wrinkly pericarp and deep natural essential oils.',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-V5LIws7qJnHz-6d6Yw6TAzjCfJ81sjNim51FhLcEKEjANNGZG9plWopUEjnozXuPHLqfZE3vvAEbRLLfI_csClSHSIjx3IcsCQqbnm_g-1qu0ETnIjFEcRKBEsIfaqu3Xldfudr0_Gm-Wly5xAKSHcXg2NUECuz0TYTSIDKQBQP9Q1WSjxTROM3WqDeSl-isd2gQosbhoiTN-uNNsquxubXri4XN85axKSY22iCq9xsp6jm2Rnlf',
    colSpan: 'md:col-span-7',
    height: 'h-[360px]',
    actionIcon: 'zoom_in',
  },
  {
    id: 2,
    category: 'vines',
    title: 'Matale Valley Canopy',
    badge: 'Serendib Heritage Estate',
    desc: 'Altitude 650m AMSL • Naturally volcanic enriched soils.',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASAXA6gAPPMpOu1N9jrvGlSyet5eOoMBgUxoy2lqOYMC_FdxgSmQDvw2kaZ9nqCKH6T6O88dKaX7sfN28MUtN3xtyQwN__mwrwchFCt3l1pD_1JRqqy9h_1X0QNMeSNNnSGVqReVbaPgzpYKXlVR33SnHqOqHegM6wrE4v7qQt17E-THxDIzM9DMLoancoXfPOUHgrJ9_Sxkal8VxFHcFV7ntAu3YtYYuL9tulp5jb7TNmhCDHMity',
    colSpan: 'md:col-span-5',
    height: 'h-[360px]',
    actionIcon: 'explore',
  },
  {
    id: 3,
    category: 'packaging',
    title: '500g Export Finished Unit',
    badge: 'Hermetic Pouch',
    desc: 'Tamper-evident tear strip with heat-sealing for ocean voyages.',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyo8iS8mEkkF41C5VLMZzAAQ2a_qsfTt4qI5EQ9AZOG2QwEZKH-sLXTaj0sfk1Uu__bMuA0C6ieP2oJvEznfODsNwDOcHjwX1mEmSjv6wADz-9QtMCr46tWZdncQmrqdORxW8YhH4t4YYjDJqdF7D7U2_s3gL4PVnpgwk1tSvpcjU3suxJcpBysUaGJiljlz6qiWmCatjfXb9CBqt5_IFR_Q3jlwNzdBx44jbMx9kvT1hfwOgMPYgz',
    colSpan: 'md:col-span-4',
    height: 'h-[320px]',
    actionIcon: 'visibility',
  },
  {
    id: 4,
    category: 'vines',
    title: 'Hygienic Sun Dehydration',
    badge: 'Curing & Moisture Control',
    desc: 'Moisture stabilized strictly under 11.4% before packing.',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaTkY16awCZDnJjyKw2U0x3ta-Nl4NJbzr2s0uFJjIxyuJ9z4qm_9iwIURd3kXPqUqfpXF6v-khKHZwpksD11ZPlQQ6tgnMsu4jslfPixMpwj8UoVMh8XcXGJYw6PoVuJs2TIob4oFLN1hKZo7wEiezyVlfBmz7CEXjmryarql_euB5unmUEKzNLYplfiIlPE3qOjBaBIWgS73Ss2FhnEK4IPVCi3BSqX2DIoND1vu2QV7n97kQ3kx',
    colSpan: 'md:col-span-4',
    height: 'h-[320px]',
    actionIcon: 'wb_sunny',
  },
  {
    id: 5,
    category: 'peppercorns',
    title: 'HPLC Piperine Screening',
    badge: 'Laboratory Inspection',
    desc: 'Every export lot accompanied by ISO-17025 accredited Certificate.',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXmKV4b1W4mQ8kfxL8B5Ach6WLnkHk9_WCfs73_Rwn7iMPszG5KLZcxcZ-TEdJBgwDwetEomXvEQf9fm6KjXd9ql8SfpBKM5BLUXqpN4kNiZyZ8PbkyGFRNmnVvJInXhAFdZSJgKMqKJFUGzBZ1hFHbyJ0FhcTsY8QUrSz2U6ESVzGRfdzDfQqcYlAuDAP9ekfHpbg3aNQOVpmAr7HS2v2b9eGWtv1L_g1fPJKSIytfAIZLKLr1oA',
    colSpan: 'md:col-span-4',
    height: 'h-[320px]',
    actionIcon: 'biotech',
  },
];

export const OriginGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'vines' | 'peppercorns' | 'packaging'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section className="py-12 md:py-16 bg-[#f3f3f6]" id="gallery">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#805533] font-bold">
              Terroir &amp; Production Lens
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] tracking-tight mt-1">
              The Origin Gallery
            </h2>
            <p className="text-sm md:text-base text-[#414844] max-w-xl mt-1">
              From the fertile misty ridges of Matale to modern hermetic export crating. Every phase monitored under sovereign export standards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#edeef0] rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#012d1d] text-white'
                  : 'text-[#414844] hover:text-[#012d1d]'
              }`}
            >
              All Specimens
            </button>
            <button
              onClick={() => setFilter('vines')}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                filter === 'vines'
                  ? 'bg-[#012d1d] text-white'
                  : 'text-[#414844] hover:text-[#012d1d]'
              }`}
            >
              Plantation &amp; Vines
            </button>
            <button
              onClick={() => setFilter('peppercorns')}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                filter === 'peppercorns'
                  ? 'bg-[#012d1d] text-white'
                  : 'text-[#414844] hover:text-[#012d1d]'
              }`}
            >
              Whole Peppercorns
            </button>
            <button
              onClick={() => setFilter('packaging')}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                filter === 'packaging'
                  ? 'bg-[#012d1d] text-white'
                  : 'text-[#414844] hover:text-[#012d1d]'
              }`}
            >
              Packaging
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className={`${item.colSpan} ${item.height} group relative rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer border border-[#edeef0]`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={item.imgUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/90 via-[#012d1d]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white flex items-end justify-between">
                <div>
                  <span className="px-2 py-0.5 rounded bg-[#fdc39a] text-[#794e2e] text-[10px] uppercase font-bold">
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-white mt-1 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#f0f0f3]/90 mt-0.5">{item.desc}</p>
                </div>
                <span className="material-symbols-outlined text-[24px] text-[#fdc39a] group-hover:scale-110 transition-transform">
                  {item.actionIcon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#012d1d]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-black">
              <img
                src={activeLightbox.imgUrl}
                alt={activeLightbox.title}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 text-black flex items-center justify-center hover:bg-white"
                onClick={() => setActiveLightbox(null)}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 bg-[#f9f9fb] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#805533] uppercase">
                  {activeLightbox.badge}
                </span>
                <h4 className="font-serif text-xl font-bold text-[#012d1d]">
                  {activeLightbox.title}
                </h4>
                <p className="text-sm text-[#414844] mt-1">{activeLightbox.desc}</p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-4 py-2 rounded bg-[#012d1d] text-white text-xs font-bold uppercase"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
