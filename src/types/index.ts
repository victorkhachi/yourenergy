export interface Project {
  id: string;
  title: string;
  type: 'residential' | 'commercial';
  location: string;
  capacity?: number;
  energySavings?: number;
  description: string;
  imageUrl: string;
  testimonial?: {
    name: string;
    role: string;
    comment: string;
  };
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}