export const countries = [
  {
    code: 'AU',
    name: 'Australia',
    flag: '\u{1F1E6}\u{1F1FA}',
    hasFullGuide: true,
    regions: [
      { code: 'NSW', name: 'New South Wales' },
      { code: 'VIC', name: 'Victoria' },
      { code: 'QLD', name: 'Queensland' },
      { code: 'WA', name: 'Western Australia' },
      { code: 'SA', name: 'South Australia' },
      { code: 'TAS', name: 'Tasmania' },
      { code: 'ACT', name: 'Australian Capital Territory' },
      { code: 'NT', name: 'Northern Territory' }
    ]
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '\u{1F1F3}\u{1F1FF}',
    hasFullGuide: true,
    regions: []
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '\u{1F1EC}\u{1F1E7}',
    hasFullGuide: false,
    regions: [
      { code: 'ENG', name: 'England & Wales' },
      { code: 'SCO', name: 'Scotland' },
      { code: 'NI', name: 'Northern Ireland' }
    ]
  },
  {
    code: 'US',
    name: 'United States',
    flag: '\u{1F1FA}\u{1F1F8}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '\u{1F1E8}\u{1F1E6}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'IE',
    name: 'Ireland',
    flag: '\u{1F1EE}\u{1F1EA}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '\u{1F1FF}\u{1F1E6}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'IN',
    name: 'India',
    flag: '\u{1F1EE}\u{1F1F3}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '\u{1F1F8}\u{1F1EC}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '\u{1F1E6}\u{1F1EA}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '\u{1F1E9}\u{1F1EA}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'FR',
    name: 'France',
    flag: '\u{1F1EB}\u{1F1F7}',
    hasFullGuide: false,
    regions: []
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '\u{1F1F5}\u{1F1ED}',
    hasFullGuide: false,
    regions: []
  }
];

// Universal crisis resources that work globally
export const globalCrisis = [
  {
    name: 'International Association for Suicide Prevention',
    description: 'Find a crisis centre in your country',
    website: 'https://www.iasp.info/resources/Crisis_Centres/'
  },
  {
    name: 'Befrienders Worldwide',
    description: 'Emotional support worldwide',
    website: 'https://www.befrienders.org'
  }
];

// Country-specific support services
export const countryServices = {
  AU: {
    crisis: [
      { name: 'Lifeline', phone: '13 11 14', available: '24/7', description: 'Crisis support and suicide prevention' },
    ],
    mental: [
      { name: 'MensLine Australia', phone: '1300 78 99 78', available: '24/7', description: 'Support for men with family and relationship concerns', website: 'https://mensline.org.au' },
      { name: 'Beyond Blue', phone: '1300 22 4636', available: '24/7', description: 'Anxiety, depression and suicide prevention', website: 'https://beyondblue.org.au' },
      { name: '1800RESPECT', phone: '1800 737 732', available: '24/7', description: 'Support for people experiencing family violence', website: 'https://1800respect.org.au' },
      { name: 'Suicide Call Back Service', phone: '1300 659 467', available: '24/7', description: 'Professional phone and online counselling' },
    ],
    legal: [
      { name: 'Family Relationship Advice Line', phone: '1800 050 321', available: 'Mon-Fri 8am-8pm, Sat 10am-4pm', description: 'Information about family law and services', website: 'https://familyrelationships.gov.au' },
      { name: 'National Legal Aid', phone: '1300 650 143', available: 'Business hours', description: 'Free legal help if you qualify' },
      { name: 'Men\'s Referral Service', phone: '1300 766 491', available: 'Business hours', description: 'Referrals and support for men' },
    ],
    legalByRegion: [
      { region: 'NSW', phone: '1300 888 529', website: 'https://legalaid.nsw.gov.au' },
      { region: 'VIC', phone: '1300 792 387', website: 'https://legalaid.vic.gov.au' },
      { region: 'QLD', phone: '1300 651 188', website: 'https://legalaid.qld.gov.au' },
      { region: 'WA', phone: '1300 650 579', website: 'https://legalaid.wa.gov.au' },
      { region: 'SA', phone: '1300 366 424', website: 'https://lsc.sa.gov.au' },
      { region: 'ACT', phone: '1300 654 314', website: 'https://legalaidact.org.au' },
      { region: 'TAS', phone: '1300 366 611', website: 'https://legalaid.tas.gov.au' },
      { region: 'NT', phone: '1800 019 343', website: 'https://ntlac.nt.gov.au' },
    ]
  },
  NZ: {
    crisis: [
      { name: 'Lifeline NZ', phone: '0800 543 354', available: '24/7', description: 'Crisis support and suicide prevention' },
      { name: 'Need to Talk?', phone: '1737', available: '24/7', description: 'Call or text for free counselling' },
    ],
    mental: [
      { name: 'Skylight', phone: '0800 299 100', available: 'Mon-Fri 8:30am-4:30pm', description: 'Support through grief and trauma' },
      { name: 'Men and Trauma NZ', description: 'Counselling and peer support', website: 'https://menandtrauma.nz' },
      { name: 'Kids Need Dads', description: 'Support groups and refuge', website: 'https://kidsneddads.org.nz' },
      { name: 'Women\'s Refuge', phone: '0800 733 843', available: '24/7', description: 'Support for women and children experiencing violence', website: 'https://womensrefuge.org.nz' },
    ],
    legal: [
      { name: 'Community Law NZ', description: 'Free legal help across New Zealand', website: 'https://communitylaw.org.nz' },
      { name: 'Ministry of Justice — Family', description: 'Official family court information', website: 'https://justice.govt.nz/family' },
    ],
    legalByRegion: []
  },
  GB: {
    crisis: [
      { name: 'Samaritans', phone: '116 123', available: '24/7', description: 'Free emotional support' },
    ],
    mental: [
      { name: 'CALM (Men)', phone: '0800 58 58 58', available: '5pm-midnight', description: 'Campaign Against Living Miserably', website: 'https://thecalmzone.net' },
      { name: 'Mind', phone: '0300 123 3393', available: 'Mon-Fri 9am-6pm', description: 'Mental health support and information', website: 'https://mind.org.uk' },
      { name: 'National Domestic Abuse Helpline', phone: '0808 2000 247', available: '24/7', description: 'Support for anyone experiencing domestic abuse', website: 'https://nationaldahelpline.org.uk' },
    ],
    legal: [
      { name: 'Citizens Advice', description: 'Free legal guidance on family matters', website: 'https://citizensadvice.org.uk' },
      { name: 'Family Rights Group', phone: '0808 801 0366', description: 'Advice on children and family law', website: 'https://frg.org.uk' },
    ],
    legalByRegion: []
  },
  US: {
    crisis: [
      { name: 'Suicide & Crisis Lifeline', phone: '988', available: '24/7', description: 'Call or text 988' },
    ],
    mental: [
      { name: 'SAMHSA Helpline', phone: '1-800-662-4357', available: '24/7', description: 'Mental health and substance abuse referrals' },
      { name: 'National Domestic Violence Hotline', phone: '1-800-799-7233', available: '24/7', description: 'Support for anyone experiencing domestic violence', website: 'https://thehotline.org' },
    ],
    legal: [
      { name: 'LawHelp.org', description: 'Find free legal aid in your state', website: 'https://lawhelp.org' },
      { name: 'Legal Services Corporation', description: 'Free civil legal help for low-income Americans', website: 'https://lsc.gov' },
    ],
    legalByRegion: []
  },
  CA: {
    crisis: [
      { name: 'Crisis Services Canada', phone: '988', available: '24/7', description: 'Call or text 988' },
    ],
    mental: [
      { name: 'Canadian Mental Health Association', description: 'Mental health resources across Canada', website: 'https://cmha.ca' },
    ],
    legal: [
      { name: 'Legal Aid Ontario', phone: '1-800-668-8258', description: 'Free legal help in Ontario', website: 'https://legalaid.on.ca' },
      { name: 'Justice Canada — Family Law', description: 'Federal family law information', website: 'https://justice.gc.ca/eng/fl-df/' },
    ],
    legalByRegion: []
  },
  IE: {
    crisis: [
      { name: 'Samaritans Ireland', phone: '116 123', available: '24/7', description: 'Free emotional support' },
    ],
    mental: [
      { name: 'Pieta House', phone: '1800 247 247', available: '24/7', description: 'Suicide and self-harm prevention', website: 'https://pieta.ie' },
    ],
    legal: [
      { name: 'Legal Aid Board', description: 'Free or low-cost legal help', website: 'https://legalaidboard.ie' },
      { name: 'FLAC', description: 'Free Legal Advice Centres', website: 'https://flac.ie' },
    ],
    legalByRegion: []
  }
};
