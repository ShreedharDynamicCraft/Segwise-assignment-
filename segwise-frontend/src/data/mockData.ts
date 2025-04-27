export interface CreativeData {
  creative_id: string;
  creative_name: string;
  tags: string[];
  country: string;
  ad_network: string;
  os: string;
  campaign: string;
  ad_group: string;
  ipm: number;
  ctr: number;
  spend: number;
  impressions: number;
  clicks: number;
  cpm: number;
  cost_per_click: number;
  cost_per_install: number;
  installs: number;
}

export const mockData: CreativeData[] = [
  {
    creative_id: "CR001",
    creative_name: "Summer Sale Banner",
    tags: ["End card elements - Objects:rocks", "Concept:summer", "Audio type:upbeat"],
    country: "US",
    ad_network: "Meta",
    os: "iOS",
    campaign: "Summer Collection 2023",
    ad_group: "High Value Customers",
    ipm: 5.2,
    ctr: 3.8,
    spend: 1200.50,
    impressions: 45000,
    clicks: 1710,
    cpm: 26.67,
    cost_per_click: 0.70,
    cost_per_install: 2.40,
    installs: 500
  },
  {
    creative_id: "CR002",
    creative_name: "Winter Promotion",
    tags: ["End card elements - Objects:boots", "Concept:winter", "Audio type:calm"],
    country: "CA",
    ad_network: "Google Ads",
    os: "Android",
    campaign: "Winter Collection 2023",
    ad_group: "New Customers",
    ipm: 4.8,
    ctr: 3.2,
    spend: 980.75,
    impressions: 38000,
    clicks: 1216,
    cpm: 25.81,
    cost_per_click: 0.81,
    cost_per_install: 2.72,
    installs: 360
  },
  {
    creative_id: "CR003",
    creative_name: "Spring Collection",
    tags: ["End card elements - Objects:wand", "Concept:spring", "Audio type:cheerful"],
    country: "UK",
    ad_network: "TikTok",
    os: "iOS",
    campaign: "Spring Collection 2023",
    ad_group: "Young Adults",
    ipm: 6.1,
    ctr: 4.5,
    spend: 1500.25,
    impressions: 52000,
    clicks: 2340,
    cpm: 28.85,
    cost_per_click: 0.64,
    cost_per_install: 2.10,
    installs: 715
  },
  {
    creative_id: "CR004",
    creative_name: "Fall Discount",
    tags: ["End card elements - Objects:leaves", "Concept:autumn", "Audio type:mellow"],
    country: "DE",
    ad_network: "Meta",
    os: "Android",
    campaign: "Fall Collection 2023",
    ad_group: "Returning Customers",
    ipm: 5.5,
    ctr: 3.9,
    spend: 1100.00,
    impressions: 42000,
    clicks: 1638,
    cpm: 26.19,
    cost_per_click: 0.67,
    cost_per_install: 2.30,
    installs: 478
  },
  {
    creative_id: "CR005",
    creative_name: "Holiday Special",
    tags: ["End card elements - Objects:gifts", "Concept:holiday", "Audio type:festive"],
    country: "US",
    ad_network: "Google Ads",
    os: "iOS",
    campaign: "Holiday Campaign 2023",
    ad_group: "All Customers",
    ipm: 7.2,
    ctr: 5.1,
    spend: 1800.50,
    impressions: 60000,
    clicks: 3060,
    cpm: 30.01,
    cost_per_click: 0.59,
    cost_per_install: 1.95,
    installs: 925
  },
  {
    creative_id: "CR006",
    creative_name: "Back to School",
    tags: ["End card elements - Objects:books", "Concept:education", "Audio type:energetic"],
    country: "CA",
    ad_network: "TikTok",
    os: "Android",
    campaign: "School Campaign 2023",
    ad_group: "Students",
    ipm: 6.8,
    ctr: 4.7,
    spend: 1350.25,
    impressions: 48000,
    clicks: 2256,
    cpm: 28.13,
    cost_per_click: 0.60,
    cost_per_install: 2.05,
    installs: 660
  },
  {
    creative_id: "CR007",
    creative_name: "Fitness Challenge",
    tags: ["End card elements - Objects:weights", "Concept:fitness", "Audio type:motivational"],
    country: "UK",
    ad_network: "Meta",
    os: "iOS",
    campaign: "Fitness Campaign 2023",
    ad_group: "Health Enthusiasts",
    ipm: 5.9,
    ctr: 4.2,
    spend: 1250.75,
    impressions: 46000,
    clicks: 1932,
    cpm: 27.19,
    cost_per_click: 0.65,
    cost_per_install: 2.15,
    installs: 580
  },
  {
    creative_id: "CR008",
    creative_name: "Tech Gadgets",
    tags: ["End card elements - Objects:devices", "Concept:technology", "Audio type:futuristic"],
    country: "DE",
    ad_network: "Google Ads",
    os: "Android",
    campaign: "Tech Campaign 2023",
    ad_group: "Tech Enthusiasts",
    ipm: 6.5,
    ctr: 4.6,
    spend: 1400.00,
    impressions: 50000,
    clicks: 2300,
    cpm: 28.00,
    cost_per_click: 0.61,
    cost_per_install: 2.00,
    installs: 700
  },
  {
    creative_id: "CR009",
    creative_name: "Food Delivery",
    tags: ["End card elements - Objects:food", "Concept:cuisine", "Audio type:appetizing"],
    country: "US",
    ad_network: "TikTok",
    os: "iOS",
    campaign: "Food Campaign 2023",
    ad_group: "Foodies",
    ipm: 6.3,
    ctr: 4.4,
    spend: 1300.50,
    impressions: 47000,
    clicks: 2068,
    cpm: 27.67,
    cost_per_click: 0.63,
    cost_per_install: 2.08,
    installs: 625
  },
  {
    creative_id: "CR010",
    creative_name: "Travel Adventure",
    tags: ["End card elements - Objects:map", "Concept:travel", "Audio type:adventurous"],
    country: "CA",
    ad_network: "Meta",
    os: "Android",
    campaign: "Travel Campaign 2023",
    ad_group: "Travelers",
    ipm: 5.7,
    ctr: 4.0,
    spend: 1150.25,
    impressions: 44000,
    clicks: 1760,
    cpm: 26.14,
    cost_per_click: 0.65,
    cost_per_install: 2.20,
    installs: 520
  }
];

// Helper function to extract unique tag categories
export const extractTagCategories = (data: CreativeData[]): string[] => {
  const categoriesSet = new Set<string>();
  
  data.forEach(item => {
    item.tags.forEach(tag => {
      const categoryMatch = tag.match(/^([^:]+):/); // Extract everything before the first colon
      if (categoryMatch && categoryMatch[1]) {
        categoriesSet.add(categoryMatch[1].trim());
      }
    });
  });
  
  return Array.from(categoriesSet);
};

// Helper function to extract tag values for a specific category
export const extractTagValues = (data: CreativeData[], category: string): string[] => {
  const valuesSet = new Set<string>();
  
  data.forEach(item => {
    item.tags.forEach(tag => {
      if (tag.startsWith(`${category}:`)) {
        const value = tag.substring(category.length + 1).trim();
        valuesSet.add(value);
      }
    });
  });
  
  return Array.from(valuesSet);
};

// Helper function to get dimension columns
export const getDimensionColumns = (): string[] => {
  return [
    'creative_id',
    'creative_name',
    'country',
    'ad_network',
    'os',
    'campaign',
    'ad_group'
  ];
};

// Helper function to get metric columns
export const getMetricColumns = (): string[] => {
  return [
    'ipm',
    'ctr',
    'spend',
    'impressions',
    'clicks',
    'cpm',
    'cost_per_click',
    'cost_per_install',
    'installs'
  ];
};