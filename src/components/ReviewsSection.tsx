import React, { useState } from 'react';
import { REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'helpful' | 'recent' | 'wholesale'>('helpful');
  const [reviewList, setReviewList] = useState(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');

  const toggleLike = (id: number) => {
    setReviewList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewText) return;
    const added = {
      id: Date.now(),
      initials: newReviewAuthor.slice(0, 2).toUpperCase(),
      name: newReviewAuthor,
      role: 'Verified Food Service Buyer',
      rating: 5,
      quote: `"${newReviewText}"`,
      time: 'Just now',
      batch: 'Import Batch #LK-2025-04',
      avatarBg: 'bg-[#012d1d] text-white',
      likes: 1,
      category: 'recent',
    };
    setReviewList([added, ...reviewList]);
    setNewReviewAuthor('');
    setNewReviewText('');
    setShowReviewModal(false);
  };

  const filteredReviews = reviewList.filter((r) => {
    if (activeTab === 'helpful') return true;
    if (activeTab === 'recent') return r.category === 'recent' || r.time.includes('now') || r.time.includes('week');
    if (activeTab === 'wholesale') return r.category === 'wholesale' || r.role.toLowerCase().includes('retail') || r.role.toLowerCase().includes('ltd');
    return true;
  });

  return (
    <section className="py-12 md:py-16 bg-[#f3f3f6]" id="reviews">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* FB Header Strip */}
        <div className="p-6 rounded-t-xl bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 border border-[#edeef0]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow shrink-0">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-serif text-xl md:text-2xl text-[#012d1d] font-bold">
                  Serendib Agro Exports
                </h3>
                <span className="material-symbols-outlined text-[#1877F2] text-[18px]">verified</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                <div className="flex text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                  ))}
                </div>
                <span className="text-base font-bold text-[#012d1d]">4.9 / 5.0</span>
                <span className="text-xs text-[#414844]">(284 Verified Agro-Importer Reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-2.5 rounded bg-[#1877F2] text-white text-xs font-bold hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              Write a Review on Facebook
            </button>
          </div>
        </div>

        {/* Filter Controls Strip */}
        <div className="bg-[#edeef0] px-6 py-2.5 flex items-center justify-between text-xs font-bold text-[#414844] border-x border-[#edeef0]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('helpful')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'helpful' ? 'text-[#012d1d] font-bold underline' : 'hover:text-[#012d1d]'
              }`}
            >
              Most Helpful
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'recent' ? 'text-[#012d1d] font-bold underline' : 'hover:text-[#012d1d]'
              }`}
            >
              Most Recent
            </button>
            <button
              onClick={() => setActiveTab('wholesale')}
              className={`transition-colors cursor-pointer ${
                activeTab === 'wholesale' ? 'text-[#012d1d] font-bold underline' : 'hover:text-[#012d1d]'
              }`}
            >
              FCL Wholesale Buyers
            </button>
          </div>
          <span className="hidden sm:inline font-normal text-[#414844]">
            100% Verified Bill of Lading Imports
          </span>
        </div>

        {/* Reviews Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-b-xl shadow-sm border border-t-0 border-[#edeef0]">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-[#f3f3f6] border border-[#edeef0] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} flex items-center justify-center font-bold text-xs shrink-0`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#012d1d] leading-tight">{rev.name}</p>
                      <p className="text-[11px] text-[#414844]">{rev.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleLike(rev.id)}
                    className="flex items-center gap-1 text-[#1877F2] hover:scale-110 transition-transform cursor-pointer"
                    title="Like Review"
                  >
                    <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                    <span className="text-[11px] font-bold">{rev.likes}</span>
                  </button>
                </div>

                <div className="flex text-amber-500 text-xs py-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]">star</span>
                  ))}
                </div>

                <p className="text-xs md:text-sm text-[#1a1c1e] leading-relaxed italic">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-[#414844] flex items-center justify-between border-t border-[#edeef0]/80">
                <span>{rev.time}</span>
                <span className="text-[#3f6653] font-bold">{rev.batch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xl font-bold text-[#012d1d]">Write Buyer Review</h4>
              <button
                onClick={() => setShowReviewModal(false)}
                className="w-8 h-8 rounded-full bg-[#f3f3f6] flex items-center justify-center text-[#414844]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <form onSubmit={submitReview} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-[#012d1d] block mb-1">Your Name &amp; Company</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pierre Dubois • Gourmet Paris"
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  className="w-full px-3 py-2 border border-[#edeef0] rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#012d1d]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-[#012d1d] block mb-1">Export Experience Review</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe piperine flavor, container clearance, and packaging quality..."
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  className="w-full px-3 py-2 border border-[#edeef0] rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#012d1d]"
                ></textarea>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-xs font-bold text-[#414844] rounded bg-[#edeef0]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white rounded bg-[#1877F2] hover:bg-blue-700"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
