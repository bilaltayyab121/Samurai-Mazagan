import { Leaf, ChefHat, Award, Users, Zap, Crown } from 'lucide-react';

export const statistics = [
  {
    id: 1,
    label: 'Happy Customers',
    value: 15000,
    suffix: '+',
    icon: Users,
    description: 'Satisfied diners since opening'
  },
  {
    id: 2,
    label: 'Signature Dishes',
    value: 85,
    suffix: '+',
    icon: Award,
    description: 'Crafted by our master chefs'
  },
  {
    id: 3,
    label: 'Expert Chefs',
    value: 4,
    suffix: '',
    icon: ChefHat,
    description: 'From Tokyo and beyond'
  },
  {
    id: 4,
    label: 'Years of Service',
    value: 3,
    suffix: '',
    icon: Crown,
    description: 'Excellence in every bite'
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: 'Fresh Ingredients',
    description: 'We source the freshest seafood daily from local markets and premium imports.',
    icon: Leaf
  },
  {
    id: 2,
    title: 'Professional Chefs',
    description: 'Our team of expert chefs trained in Tokyo brings authentic Japanese mastery.',
    icon: ChefHat
  },
  {
    id: 3,
    title: 'Authentic Taste',
    description: 'Traditional recipes with premium ingredients, crafted for true flavor authenticity.',
    icon: Award
  },
  {
    id: 4,
    title: 'Family Friendly',
    description: 'Welcoming atmosphere with kid-friendly options and attentive staff for all ages.',
    icon: Users
  },
  {
    id: 5,
    title: 'Fast Service',
    description: 'Efficient and attentive service without rushing your dining experience.',
    icon: Zap
  },
  {
    id: 6,
    title: 'Premium Experience',
    description: 'Every detail, from ambiance to plating, designed for a memorable luxury experience.',
    icon: Crown
  }
];
