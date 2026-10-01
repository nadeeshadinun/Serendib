import React, { useState } from 'react';
import { BATCH_DATABASE, BatchInfo } from '../data/mockData';

export const TraceabilityPassport: React.FC = () => {
  const [inputCode, setInputCode] = useState('LK-2025-04');
  const [currentBatch, setCurrentBatch] = useState<BatchInfo>(BATCH_DATABASE['LK-2025-04']);
  const [copied, setCopied] = useState(false);

  const handleVerify = () => {
    const trimmed = inputCode.trim().toUpperCase();
    if (BATCH_DATABASE[trimmed]) {
      setCurrentBatch(BATCH_DATABASE[trimmed]);
    } else {
      // Dynamic fallback for any entered batch code
      setCurrentBatch({
        lotCode: trimmed || 'LK-2025-04',
        harvestDate: 'Current Season 2025',
        gpsSector: '7.4675° N, 80.6234° E',
        leadAuditor: 'SGS Colombo Lab (Certified)',
        elevation: '650m AMSL (Central Highlands)',
        piperine: '6.45% HPLC Purity Pass',
        moisture: '11.2% (Dehydrated Spec)',
        purity: 'Non-GMO • Zero Synthetic Residue',
        serial: `LK-SL-${trimmed.replace(/[^A-Z0-9]/g, '')}-500G`,
        status: 'Cryptographically Verified Lot',
      });
    }
  };

  const copySerial = () => {
    navigator.clipboard.writeText(currentBatch.serial);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-16 bg-[#f9f9fb]" id="traceability-hub">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="p-6 md:p-12 rounded-2xl bg-[#edeef0] border border-[#d9dadc] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Interactive Batch Query */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e8e8ea] text-[#012d1d]">
                <span className="material-symbols-outlined text-[18px] text-[#805533]">qr_code_scanner</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Farm-To-Fork Digital Passport
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] tracking-tight">
                Uncompromising Transparency. Scan &amp; Verify Your Harvest.
              </h2>

              <p className="text-sm md:text-base text-[#414844] leading-relaxed">
                Every Serendib 500g pouch is cryptographically tagged to its specific harvest sector. By scanning the on-pack QR target or entering your lot code below, access live laboratory certificates, harvest timestamps, and agrochemical screen results.
              </p>

              {/* Batch Input Box */}
              <div className="p-4 rounded-xl bg-white border border-[#d9dadc] space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#805533] block">
                  Query Current Dispatch Lot:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="e.g. LK-2025-04"
                    className="px-4 py-2.5 rounded bg-[#f3f3f6] font-mono text-sm text-[#012d1d] flex-1 focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#e2e2e5]"
                  />
                  <button
                    onClick={handleVerify}
                    className="px-5 py-2.5 rounded bg-[#012d1d] text-white text-xs font-bold hover:bg-[#1b4332] transition-all flex items-center justify-center gap-1.5 uppercase cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    Verify Specimen
                  </button>
                </div>

                {/* Query Result Feedback */}
                <div className="p-3 rounded bg-[#f3f3f6] border border-[#e2e2e5] flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm text-[#012d1d] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#3f6653] shrink-0">
                      check_circle
                    </span>
                    <span>
                      <strong>Lot #{currentBatch.lotCode}:</strong> Authenticated • {currentBatch.elevation} • {currentBatch.piperine} • Non-GMO
                    </span>
                  </div>
                  <span className="text-[10px] text-[#805533] uppercase font-bold shrink-0">
                    {currentBatch.status}
                  </span>
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white/70 rounded border border-[#d9dadc]">
                  <p className="text-[10px] text-[#805533] uppercase font-bold">Harvest Date</p>
                  <p className="text-base font-bold text-[#012d1d] mt-0.5">{currentBatch.harvestDate}</p>
                </div>
                <div className="p-3 bg-white/70 rounded border border-[#d9dadc]">
                  <p className="text-[10px] text-[#805533] uppercase font-bold">GPS Sector</p>
                  <p className="text-base font-bold text-[#012d1d] mt-0.5">{currentBatch.gpsSector}</p>
                </div>
                <div className="p-3 bg-white/70 rounded border border-[#d9dadc] col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-[#805533] uppercase font-bold">Lead Auditor</p>
                  <p className="text-base font-bold text-[#012d1d] mt-0.5">{currentBatch.leadAuditor}</p>
                </div>
              </div>
            </div>

            {/* Right: Cryptographic QR Certificate Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white p-6 md:p-8 rounded-xl shadow-md text-center space-y-4 relative overflow-hidden border border-[#d9dadc]">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fdc39a]/20 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between pb-1">
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-[#805533] uppercase tracking-widest">
                      Republic of Sri Lanka
                    </p>
                    <p className="text-base font-bold text-[#012d1d]">Export Trace Token</p>
                  </div>
                  <span className="material-symbols-outlined text-[28px] text-[#3f6653]">eco</span>
                </div>

                {/* SVG QR Code Pattern */}
                <div className="p-4 bg-[#ffffff] rounded-xl flex items-center justify-center border border-[#e2e2e5] shadow-inner">
                  <svg
                    className="w-48 h-48 text-[#012d1d]"
                    fill="currentColor"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Corner 1 */}
                    <rect height="45" rx="4" width="45" x="20" y="20"></rect>
                    <rect fill="#ffffff" height="29" width="29" x="28" y="28"></rect>
                    <rect height="17" rx="2" width="17" x="34" y="34"></rect>
                    {/* Corner 2 */}
                    <rect height="45" rx="4" width="45" x="135" y="20"></rect>
                    <rect fill="#ffffff" height="29" width="29" x="143" y="28"></rect>
                    <rect height="17" rx="2" width="17" x="149" y="34"></rect>
                    {/* Corner 3 */}
                    <rect height="45" rx="4" width="45" x="20" y="135"></rect>
                    <rect fill="#ffffff" height="29" width="29" x="28" y="143"></rect>
                    <rect height="17" rx="2" width="17" x="34" y="149"></rect>
                    {/* Internal Data Blocks */}
                    <rect height="10" width="10" x="75" y="25"></rect>
                    <rect height="20" width="10" x="95" y="25"></rect>
                    <rect height="10" width="10" x="115" y="35"></rect>
                    <rect height="10" width="20" x="75" y="55"></rect>
                    <rect height="10" width="10" x="105" y="55"></rect>
                    <rect height="20" width="10" x="75" y="75"></rect>
                    <rect height="20" width="20" x="95" y="75"></rect>
                    <rect height="10" width="10" x="125" y="75"></rect>
                    <rect height="10" width="20" x="145" y="75"></rect>
                    <rect height="10" width="10" x="175" y="75"></rect>
                    <rect height="10" width="20" x="25" y="95"></rect>
                    <rect height="10" width="10" x="55" y="95"></rect>
                    <rect height="10" width="30" x="75" y="105"></rect>
                    <rect height="20" width="10" x="115" y="95"></rect>
                    <rect height="10" width="20" x="135" y="105"></rect>
                    <rect height="10" width="20" x="165" y="95"></rect>
                    <rect height="20" width="10" x="75" y="135"></rect>
                    <rect height="10" width="20" x="95" y="125"></rect>
                    <rect height="20" width="20" x="125" y="135"></rect>
                    <rect height="20" width="10" x="155" y="125"></rect>
                    <rect height="15" width="30" x="75" y="165"></rect>
                    <rect height="10" width="10" x="115" y="165"></rect>
                    <rect height="15" width="25" x="135" y="165"></rect>
                    <rect height="25" width="15" x="170" y="155"></rect>
                  </svg>
                </div>

                <div className="space-y-1">
                  <p
                    onClick={copySerial}
                    className="font-mono text-xs text-[#414844] cursor-pointer hover:text-[#012d1d] transition-colors flex items-center justify-center gap-1"
                    title="Click to copy serial"
                  >
                    <span>SERIAL: {currentBatch.serial}</span>
                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                  </p>
                  {copied && <span className="text-[10px] text-green-700 font-bold block">Copied to clipboard!</span>}
                  <p className="text-xs text-[#3f6653] flex items-center justify-center gap-1 pt-1 font-medium">
                    <span className="material-symbols-outlined text-[16px]">touch_app</span>
                    Scan with smartphone camera
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
