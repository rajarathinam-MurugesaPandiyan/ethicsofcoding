import type { ProductItem } from '../types';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'xpense-cloud',
    name: 'xpense-cloud',
    badge: 'Flagship Product',
    tagline: 'Smart Cloud-Powered Expense Intelligence & Budget Analytics',
    description: 'A modern, high-performance financial tracking ecosystem built with Flutter & Cloud tech. Real-time cashflow visibility, visual budgeting, automated categorization, and cross-platform synchronization.',
    longDescription: 'xpense-cloud was engineered to eliminate clunky spreadsheets and fragmented personal finance tools. Whether you are tracking daily coffee runs or managing monthly software and household budgets, xpense-cloud empowers you with actionable financial insights, custom alerts, offline resilience, and beautiful interactive charts.',
    status: 'Live',
    demoVideoId: 'fQDnZ2Tc1bw',
    demoUrl: 'https://www.youtube.com/watch?v=fQDnZ2Tc1bw',
    websiteUrl: 'https://xpense-cloud.in',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ragogaxpense_tracker',
    appStoreUrl: 'https://apps.apple.com/app/xpense-cloud/id1649201923',
    techStack: ['Flutter', 'Dart', 'Cloud DB', 'REST APIs', 'TypeScript', 'Analytics Engine'],
    stats: [
      { label: 'Platform Availability', value: 'Mobile + Web' },
      { label: 'Real-time Latency', value: '< 100ms' },
      { label: 'Sync Architecture', value: 'Offline-First' },
      { label: 'Data Security', value: 'End-to-End' }
    ],
    features: [
      {
        title: 'Instant Expense Logging',
        description: 'Record any expenditure in 3 taps with tags, custom payment methods (UPI, Cards, Cash), receipts, and notes.',
        icon: 'lightning'
      },
      {
        title: 'Visual Analytics & Breakdown',
        description: 'Interactive spending donuts, daily burn rate charts, and month-over-month savings trend analysis.',
        icon: 'chart'
      },
      {
        title: 'Cross-Device Cloud Sync',
        description: 'Seamlessly keep your records up-to-date across your smartphone, tablet, and desktop browser with offline backup.',
        icon: 'cloud'
      },
      {
        title: 'Smart Budget Caps & Alerts',
        description: 'Set custom category limits with automated threshold notifications before you overspend.',
        icon: 'shield'
      },
      {
        title: 'Multi-Currency & Tax Ready',
        description: 'Support for multiple global currencies with automatic conversion rates and clean monthly report exports.',
        icon: 'currency'
      },
      {
        title: 'Privacy & Local Security',
        description: 'Your financial data is your business. Client-side encrypted cache and zero unsolicited data tracking.',
        icon: 'lock'
      }
    ]
  },
  {
    id: 'ethics-devkits',
    name: 'Ethics DevKits & Templates',
    badge: 'Open Ecosystem',
    tagline: 'Production-Ready Architecture Kits & Clean Code Starters',
    description: 'Battle-tested boilerplate templates for Flutter, React, and Fullstack apps, incorporating clean architectural separation, BLoC/state managers, and modern themes.',
    longDescription: 'Curated directly from our YouTube masterclasses, these templates allow developers to skip the repetitive configuration and bootstrap production-ready applications with best architectural practices baked in from day one.',
    status: 'Live',
    techStack: ['Flutter', 'React 19', 'TypeScript', 'Vite', 'Clean Architecture'],
    stats: [
      { label: 'Architectures', value: 'BLoC & Clean' },
      { label: 'Community Stars', value: 'Open Source' },
      { label: 'Setup Time', value: '< 2 Mins' },
      { label: 'License', value: 'MIT Free' }
    ],
    features: [
      {
        title: 'Clean Architecture Pattern',
        description: 'Strict separation of Data, Domain, and Presentation layers for maintainable codebases.',
        icon: 'layers'
      },
      {
        title: 'Production Theme Tokens',
        description: 'Full dark/light mode switching with consistent semantic tokens and accessible typography.',
        icon: 'palette'
      },
      {
        title: 'API Client & Error Handling',
        description: 'Ready-to-use network layer with interceptors, automatic retries, and strongly typed response DTOs.',
        icon: 'cpu'
      }
    ]
  }
];
