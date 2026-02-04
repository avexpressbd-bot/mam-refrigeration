
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  capacity: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  price: number;
  image: string;
  specs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
}
