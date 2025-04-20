export interface Project {
  slug: string;
  title: string;
  description: string;
  year: number;
  location: { lat: number; lng: number };
  images: string[];
}
