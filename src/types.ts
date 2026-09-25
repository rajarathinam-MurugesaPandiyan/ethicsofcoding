export type CategoryType = 'all' | 'flutter' | 'web' | 'career' | 'products';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: CategoryType;
  categoryLabel: string;
  duration?: string;
  featured?: boolean;
  tags: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: 'Live' | 'Beta' | 'In Development';
  demoVideoId?: string;
  demoUrl?: string;
  websiteUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: string[];
  stats: {
    label: string;
    value: string;
  }[];
}
