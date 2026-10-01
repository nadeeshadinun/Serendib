import React, { useState } from 'react';

export const BulkInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    destination: '',
    program: 'samples',
    volume: '',
    specs: '',
  });

  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state visible for user confirmation
    }, 500);
  };

  return (
    <section className="py-12 md:py-16 bg-[#ffffff]" id="bulk-inquiry">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
          <span className="text-[11px] uppercase tracking-widest text-[#805533] font-bold">
            Trade Procurement Desk
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] tracking-tight">
            Direct Agro-Export Quotation
          </h2>
          <p className="text-sm md:text-base text-[#414844]">
            Submit your wholesale, distributor, or retail sample request. Our Colombo export team provides FOB/CIF quotes and certificates of analysis within 2 business hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#f3f3f6] p-6 md:p-10 rounded-2xl shadow-sm border border-[#edeef0]">
          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-white rounded-xl border border-[#edeef0]">
              <div className="w-16 h-16 bg-[#012d1d] text-white rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[36px] text-[#fdc39a]">done_all</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
                Export Quotation Request Dispatched!
              </h3>
              <p className="text-sm text-[#414844] max-w-lg mx-auto">
                Thank you, <strong>{formData.name || 'Valued Importer'}</strong>. Your commercial inquiry for <strong>{formData.company || 'your entity'}</strong> has been assigned to Colombo Export Desk Ref <strong>#RFQ-LK-{Math.floor(1000 + Math.random() * 9000)}</strong>.
              </p>
              <div className="p-4 bg-[#f9f9fb] rounded-lg border border-[#edeef0] text-xs text-[#012d1d] max-w-md mx-auto space-y-1">
                <p><strong>Destination:</strong> {formData.destination || 'International Ocean/Air Terminal'}</p>
                <p><strong>Target Program:</strong> {formData.program}</p>
                <p><strong>Response SLA:</strong> Guaranteed under 2 Business Hours</p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setAttachedFile(null);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    destination: '',
                    program: 'samples',
                    volume: '',
                    specs: '',
                  });
                }}
                className="px-6 py-2.5 rounded bg-[#012d1d] text-white text-xs font-bold uppercase hover:bg-[#1b4332] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jean Dupont"
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Company / Importing Entity *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Le Palais Des Épices SAS"
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+33 6 00 00 00 00"
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Destination Country / Port *</label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Marseille / France"
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Required Program *</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  >
                    <option value="samples">Retail 500g Sample Pouches (Express Courier)</option>
                    <option value="cartons">Master Cartons (20-100 Units Wholesale)</option>
                    <option value="lcl">LCL Consolidated Cargo (200kg - 1,000kg)</option>
                    <option value="fcl">FCL Ocean Container (20ft / 40ft Full Contract)</option>
                    <option value="oem">Private Label / Custom Kraft Bag OEM</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#012d1d] block mb-1">Target Volume Weight (kg)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#012d1d] block mb-1">
                  Specifications &amp; Phytosanitary Inclusions
                </label>
                <textarea
                  rows={3}
                  value={formData.specs}
                  onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                  placeholder="State target Incoterms (FOB Colombo, CIF Rotterdam, etc.), grind specifications, or custom lab screening needs..."
                  className="w-full px-4 py-2.5 rounded bg-white text-[#1a1c1e] text-sm focus:outline-none focus:ring-1 focus:ring-[#3f6653] border border-[#edeef0]"
                ></textarea>
              </div>

              {/* Document Attachment Upload */}
              <div className="p-3.5 rounded-lg bg-white border border-[#edeef0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#805533] text-[22px]">attach_file</span>
                  <div>
                    <p className="text-xs font-bold text-[#012d1d]">
                      {attachedFile ? `Attached: ${attachedFile}` : 'Attach Importer RFQ / Lab Criteria'}
                    </p>
                    <p className="text-[11px] text-[#414844]">PDF, DOC, or XLS up to 15MB</p>
                  </div>
                </div>
                <label className="px-4 py-1.5 rounded bg-[#edeef0] text-xs font-bold text-[#012d1d] hover:bg-[#e2e2e5] transition-all cursor-pointer">
                  <span>{attachedFile ? 'Change File' : 'Choose Document'}</span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>

              {/* Submission SLA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs md:text-sm text-[#414844]">
                  <span className="material-symbols-outlined text-[#3f6653] text-[20px]">schedule</span>
                  <span>2-Hour Export Manager Direct Response SLA</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded bg-[#012d1d] text-white text-xs md:text-sm font-bold hover:bg-[#1b4332] transition-all shadow-md flex items-center justify-center gap-2 uppercase cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Submit Agro-Export Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
