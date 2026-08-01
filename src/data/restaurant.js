export const restaurantData = {
  name: "Samurai Mazagan",
  tagline: "Authentic Japanese Cuisine",
  description:
    "Experience the finest Japanese Hot Pot & Sushi in the heart of El Jadida. Our master chefs craft each dish with passion, using the freshest ingredients to bring you an unforgettable dining experience.",
  longDescription:
    "Nestled in the vibrant city of El Jadida, Samurai Mazagan brings the authentic flavors of Japan to Morocco. Our restaurant combines traditional Japanese culinary techniques with locally sourced premium ingredients, creating a unique fusion that tantalizes the palate. From our signature hot pots simmered to perfection, to the delicate artistry of our sushi rolls, every dish tells a story of craftsmanship and dedication.",
  categories: [
    "Japanese Restaurant",
    "Hot Pot Restaurant",
    "Sushi Bar",
    "Asian Dining",
  ],
  address: {
    street: "Av. Bir Anzarane",
    city: "El Jadida 24000",
    country: "Morocco",
    full: "Av. Bir Anzarane, El Jadida 24000, Morocco",
    coordinates: {
      lat: 33.2377282,
      lng: -8.4954685,
    },
  },
  contact: {
    phone: "+212621748854",
    landline: "",
    whatsapp: "+212621748854",
    email: "samuraimazagan22@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/samurai.sushi__/",
    facebook: "https://www.facebook.com/",
    whatsapp: "https://wa.me/212621748854",
  },
  rating: 4.2,
  reviews: 453,
  timezone: "Africa/Casablanca",
  openingHours: {
    monday: { open: "12 PM", close: "12 AM", closed: false },
    tuesday: { open: "12 PM", close: "12 AM", closed: false },
    wednesday: { open: "12 PM", close: "12 AM", closed: false },
    thursday: { open: "12 PM", close: "12 AM", closed: false },
    friday: { open: "12 PM", close: "12 AM", closed: false, busiest: true },
    saturday: { open: "12 PM", close: "12 AM", closed: false, busiest: true },
    sunday: { open: "12 PM", close: "12 AM", closed: false },
  },
  highlights: [
    "Rooftop Seating",
    "Live Music",
    "Hot Pot Experience",
    "Premium Sushi",
    "Japanese Atmosphere",
    "Fresh Daily Ingredients",
  ],
  established: "2022",
  chefs: 4,
  seatingCapacity: 120,
};

export const actions = {
  phone: 'tel:+212621748854',
  whatsapp: 'https://wa.me/212621748854',
  email: 'mailto:samuraimazagan22@gmail.com',
  reservation: '/reservation',
  menu: '/menu'
};
