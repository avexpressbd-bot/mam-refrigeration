
import React from 'react';
import { Settings, Tool, Wind, ShoppingBag, Truck, CheckCircle } from 'lucide-react';
import { Service, Product, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'AC Service & Maintenance',
    description: 'Comprehensive cleaning and health check to ensure peak performance and energy efficiency.',
    icon: 'Wind'
  },
  {
    id: '2',
    title: 'Expert AC Repair',
    description: 'Quick diagnosis and fixing of cooling issues, gas leaks, and electrical faults.',
    icon: 'Settings'
  },
  {
    id: '3',
    title: 'Professional Installation',
    description: 'Secure and optimized installation for all brands of Split and Window ACs.',
    icon: 'Tool'
  },
  {
    id: '4',
    title: 'Old AC Purchase',
    description: 'Get the best market price for your used air conditioners. Fast evaluation and pickup.',
    icon: 'ShoppingBag'
  },
  {
    id: '5',
    title: 'Used AC Sales',
    description: 'Quality tested second-hand ACs at affordable prices with warranty options.',
    icon: 'Truck'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Gree 1.5 Ton Split AC',
    brand: 'Gree',
    capacity: '1.5 Ton',
    condition: 'Excellent',
    price: 32000,
    image: 'https://picsum.photos/seed/ac1/600/400',
    specs: ['Inverter Technology', 'Copper Condenser', 'Energy Star Rated']
  },
  {
    id: 'p2',
    name: 'Carrier 2.0 Ton Cassette AC',
    brand: 'Carrier',
    capacity: '2.0 Ton',
    condition: 'Good',
    price: 45000,
    image: 'https://picsum.photos/seed/ac2/600/400',
    specs: ['Fast Cooling', 'Ideal for Offices', 'Low Noise']
  },
  {
    id: 'p3',
    name: 'General 1 Ton Window AC',
    brand: 'General',
    capacity: '1 Ton',
    condition: 'Excellent',
    price: 18500,
    image: 'https://picsum.photos/seed/ac3/600/400',
    specs: ['Super Durable', 'High Airflow', 'Manual Controls']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ariful Islam',
    location: 'Gulshan, Dhaka',
    comment: 'Best service in Dhaka. They arrived within 2 hours and fixed my AC gas leak perfectly. Highly recommended!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sadia Rahman',
    location: 'Uttara, Dhaka',
    comment: 'I sold my 5-year-old AC to them. They gave me a very fair price compared to other buyers. Transparent process.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Tanvir Ahmed',
    location: 'Dhanmondi, Dhaka',
    comment: 'Bought a used Gree AC from MAM. It works like new. The installation team was professional and clean.',
    rating: 4
  }
];

export const HOW_IT_WORKS = [
  { step: 1, title: 'Contact Us', desc: 'Call or WhatsApp us with your requirement.' },
  { step: 2, title: 'Expert Visit', desc: 'Our technicians visit your location for inspection.' },
  { step: 3, title: 'Instant Quote', desc: 'Receive a transparent price for service or sale.' },
  { step: 4, title: 'Execution', desc: 'Service completed or payment made on the spot.' }
];
