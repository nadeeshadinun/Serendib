import React, { useState } from 'react';

interface SpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecModal: React.FC<SpecModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#012d1d]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full p-6 md:p-8 rounded-2xl shadow-2xl space-y-4 border border-[#edeef0]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#012d1d]">description</span>
            <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
              Download Technical Spec
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f3f3f6] flex items-center justify-center text-[#414844] hover:bg-[#edeef0]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <p className="text-sm text-[#414844] leading-relaxed">
          Access the complete 2025 Laboratory Certificate of Analysis &amp; EU Phytosanitary export Dossier for Ceylon Black Pepper High Grade (Garbled 550GL).
        </p>

        <div className="p-4 rounded bg-[#f3f3f6] text-xs text-[#012d1d] space-y-1.5 border border-[#edeef0]">
          <p><strong>Document ID:</strong> SERENDIB-SPEC-LK-PEPPER-2025</p>
          <p><strong>Format:</strong> High-Resolution Official PDF (3.2 MB)</p>
          <p><strong>Endorsement:</strong> Export Development Board of Sri Lanka</p>
          <p><strong>Testing Scope:</strong> GC-MS Volatile Terpenes, HPLC Piperine, Eurofins Heavy Metals Pass</p>
        </div>

        {downloadSuccess ? (
          <div className="p-3 bg-emerald-50 text-emerald-800 rounded text-center text-xs font-bold flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            File Generated &amp; Download Initiated!
          </div>
        ) : (
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-[#edeef0] text-[#1a1c1e] text-xs font-bold"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-5 py-2 rounded bg-[#012d1d] text-white text-xs font-bold flex items-center gap-1.5 shadow hover:bg-[#1b4332] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                {downloading ? 'sync' : 'download'}
              </span>
              {downloading ? 'Compiling Dossier...' : 'Download PDF Now'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface OrderModalProps {
  isOpen: boolean;
  tierName: string;
  priceText: string;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  tierName,
  priceText,
  onClose,
}) => {
  const [ordered, setOrdered] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [destination, setDestination] = useState('');

  if (!isOpen) return null;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#012d1d]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-6 md:p-8 rounded-2xl shadow-2xl space-y-4 border border-[#edeef0]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#012d1d]">shopping_cart_checkout</span>
            <h3 className="font-serif text-xl font-bold text-[#012d1d]">
              Procure Export Allocation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f3f3f6] flex items-center justify-center text-[#414844]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-3 bg-[#f3f3f6] rounded border border-[#edeef0] text-xs">
          <p className="text-[#805533] uppercase font-bold">Selected Item</p>
          <p className="text-sm font-bold text-[#012d1d]">Ceylon Black Pepper 500g — {tierName}</p>
          <p className="text-base font-bold text-[#012d1d] mt-1">{priceText}</p>
        </div>

        {ordered ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 rounded text-center text-xs font-bold space-y-1">
            <span className="material-symbols-outlined text-[28px] text-emerald-700 block">check_circle</span>
            <p className="text-sm">Consignment Reserved!</p>
            <p className="font-normal text-[11px]">Dispatch details and pro-forma invoice sent to {buyerEmail}.</p>
          </div>
        ) : (
          <form onSubmit={handleOrder} className="space-y-3 text-xs">
            <div>
              <label className="font-bold text-[#012d1d] block mb-1">Company / Importer Name *</label>
              <input
                type="text"
                required
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="e.g. Nordic Spice Importers Ltd"
                className="w-full px-3 py-2 border border-[#edeef0] rounded focus:outline-none focus:ring-1 focus:ring-[#012d1d]"
              />
            </div>
            <div>
              <label className="font-bold text-[#012d1d] block mb-1">Billing &amp; Dispatch Email *</label>
              <input
                type="email"
                required
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                placeholder="import@nordicspice.com"
                className="w-full px-3 py-2 border border-[#edeef0] rounded focus:outline-none focus:ring-1 focus:ring-[#012d1d]"
              />
            </div>
            <div>
              <label className="font-bold text-[#012d1d] block mb-1">Shipping Destination City / Country *</label>
              <input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Copenhagen, Denmark"
                className="w-full px-3 py-2 border border-[#edeef0] rounded focus:outline-none focus:ring-1 focus:ring-[#012d1d]"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded bg-[#edeef0] text-[#414844] font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded bg-[#012d1d] text-white font-bold hover:bg-[#1b4332]"
              >
                Confirm Allocation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
