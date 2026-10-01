export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: number;
  priceText: string;
  unitPrice?: string;
  desc: string;
  icon: string;
  isPopular?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'sample',
    name: 'Sample Unit',
    price: 18.5,
    priceText: '$18.50',
    desc: '1 x 500g pouch air-shipped',
    icon: 'science',
  },
  {
    id: 'master',
    name: 'Master Case',
    badge: 'Popular',
    price: 290.0,
    priceText: '$290.00',
    unitPrice: '$14.50/unit',
    desc: '20 x 500g ($14.50/unit)',
    icon: 'package_2',
    isPopular: true,
  },
  {
    id: 'pallet',
    name: 'Pallet Cargo',
    price: 0,
    priceText: 'FOB Colombo',
    desc: 'Custom Bulk Quote',
    icon: 'sailing',
  },
];

export interface BatchInfo {
  lotCode: string;
  harvestDate: string;
  gpsSector: string;
  leadAuditor: string;
  elevation: string;
  piperine: string;
  moisture: string;
  purity: string;
  serial: string;
  status: string;
}

export const BATCH_DATABASE: Record<string, BatchInfo> = {
  'LK-2025-04': {
    lotCode: 'LK-2025-04',
    harvestDate: 'January 2025',
    gpsSector: '7.4675° N, 80.6234° E',
    leadAuditor: 'SGS Colombo Lab',
    elevation: '650m AMSL (Matale Sector 07)',
    piperine: '6.45% HPLC Certified',
    moisture: '11.2% (Dehydrated Spec)',
    purity: 'Non-GMO • Zero Synthetic Residue',
    serial: 'LK-SL-20250104-500G-GARBLED',
    status: 'Authenticated Export Lot',
  },
  'LK-2024-12': {
    lotCode: 'LK-2024-12',
    harvestDate: 'December 2024',
    gpsSector: '7.4520° N, 80.6310° E',
    leadAuditor: 'Bureau Veritas SL',
    elevation: '620m AMSL (Kandy Foothills)',
    piperine: '6.38% HPLC Certified',
    moisture: '11.4%',
    purity: 'Non-GMO • EU Organic Screened',
    serial: 'LK-SL-20241215-500G-GARBLED',
    status: 'Shipped & Cleared (Berlin Port)',
  },
  'LK-2024-11': {
    lotCode: 'LK-2024-11',
    harvestDate: 'November 2024',
    gpsSector: '7.4812° N, 80.6120° E',
    leadAuditor: 'SGS Colombo Lab',
    elevation: '680m AMSL (Matale Ridge)',
    piperine: '6.52% HPLC Certified',
    moisture: '10.9%',
    purity: 'Non-GMO • Direct Consignment',
    serial: 'LK-SL-20241120-500G-GARBLED',
    status: 'Shipped & Cleared (Port of Le Havre)',
  },
};

export const REVIEWS = [
  {
    id: 1,
    initials: 'MV',
    name: 'Chef Marcus Vance',
    role: 'Lyon Charcuterie Artisanale • France',
    rating: 5,
    quote:
      '"The aroma density of Serendib\'s 500g Ceylon black pepper is unmatched. The high natural piperine warmth elevates our dry cured salumi. Fast sea freight clearance directly to Port of Le Havre."',
    time: 'Posted 2 weeks ago',
    batch: 'Import Batch #LK-2024-11',
    avatarBg: 'bg-[#012d1d] text-white',
    likes: 24,
    category: 'helpful',
  },
  {
    id: 2,
    initials: 'ER',
    name: 'Elena Rostova',
    role: 'Organic Pantry Retail Co. • Berlin',
    rating: 5,
    quote:
      '"Top notch kraft paper packaging. Arrived hermetically sealed with zero moisture leakage across container shipping. Our gourmet customers immediately notice the bold floral crunch."',
    time: 'Posted 1 month ago',
    batch: 'Import Batch #LK-2024-12',
    avatarBg: 'bg-[#805533] text-white',
    likes: 19,
    category: 'wholesale',
  },
  {
    id: 3,
    initials: 'TS',
    name: 'Kenji Takahashi',
    role: 'Takahashi Spices Ltd • Osaka, Japan',
    rating: 5,
    quote:
      '"Strict phytosanitary compliance and pristine cleanliness on arrival at Port of Kobe. Highest grade Ceylon peppercorns our procurement desk has cleared in the past decade."',
    time: 'Posted 3 weeks ago',
    batch: 'Import Batch #LK-2025-01',
    avatarBg: 'bg-[#1b4332] text-white',
    likes: 31,
    category: 'recent',
  },
];
