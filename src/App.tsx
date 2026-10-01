/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ProductShowcase } from './components/ProductShowcase';
import { OriginGallery } from './components/OriginGallery';
import { TraceabilityPassport } from './components/TraceabilityPassport';
import { ReviewsSection } from './components/ReviewsSection';
import { LogisticsMap } from './components/LogisticsMap';
import { BulkInquiryForm } from './components/BulkInquiryForm';
import { Footer } from './components/Footer';
import { SpecModal, OrderModal } from './components/Modals';

export default function App() {
  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedOrderTier, setSelectedOrderTier] = useState({
    name: 'Master Case',
    price: '$290.00',
  });

  const handleOpenRfq = () => {
    const el = document.getElementById('bulk-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProcureOrder = (tierName: string, priceText: string) => {
    setSelectedOrderTier({ name: tierName, price: priceText });
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fb] text-[#1a1c1e] antialiased">
      {/* Fixed Header */}
      <Header
        onOpenRfq={handleOpenRfq}
        onOpenSpecModal={() => setSpecModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Slider with Export Ribbon */}
        <HeroSlider onOpenSpecModal={() => setSpecModalOpen(true)} />

        {/* 2. Core Product Highlight: Ceylon Black Pepper (500g) */}
        <ProductShowcase
          onProcureOrder={handleProcureOrder}
          onOpenRfq={handleOpenRfq}
        />

        {/* 3. The Origin Gallery with interactive Filter & Lightbox */}
        <OriginGallery />

        {/* 4. Digital QR Code Traceability Passport */}
        <TraceabilityPassport />

        {/* 5. Facebook Customer Reviews Feed Widget */}
        <ReviewsSection />

        {/* 6. Embedded Map & Export Logistics Hub */}
        <LogisticsMap />

        {/* 7. Direct Agro-Export Quotation Form */}
        <BulkInquiryForm />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SpecModal
        isOpen={specModalOpen}
        onClose={() => setSpecModalOpen(false)}
      />

      <OrderModal
        isOpen={orderModalOpen}
        tierName={selectedOrderTier.name}
        priceText={selectedOrderTier.price}
        onClose={() => setOrderModalOpen(false)}
      />
    </div>
  );
}
