export const menuCategories = [
  {
    id: 'all',
    name: 'All',
    icon: 'UtensilsCrossed'
  },
  {
    id: 'hotpot',
    name: 'Hot Pot',
    icon: 'Flame',
    description: 'Traditional Japanese hot pot with premium broths'
  },
  {
    id: 'sushi',
    name: 'Sushi',
    icon: 'Fish',
    description: 'Freshly crafted sushi and sashimi'
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: 'Salad',
    description: 'Perfect starters to begin your meal'
  },
  {
    id: 'main',
    name: 'Main Course',
    icon: 'Drumstick',
    description: 'Heartwarming Japanese mains'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: 'Cake',
    description: 'Sweet endings for your experience'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: 'Wine',
    description: 'Premium beverages and cocktails'
  }
];

export const menuItems = [
  {
    id: 1,
    name: "Shabu-Shabu Deluxe",
    category: "hotpot",
    description:
      "Thinly sliced premium beef, fresh vegetables, and udon noodles simmered in our signature dashi broth.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "25 min",
  },
  {
    id: 2,
    name: "Sukiyaki Gold",
    category: "hotpot",
    description:
      "A luxurious hot pot experience with marbled Wagyu beef, tofu, negi, and warishita sweet soy broth.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "30 min",
  },
  {
    id: 3,
    name: "Spicy Miso Hot Pot",
    category: "hotpot",
    description:
      "Rich spicy miso broth with premium pork belly, mushrooms, bok choy, and glass noodles.",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    popular: false,
    spicy: true,
    vegan: false,
    prepTime: "25 min",
  },
  {
    id: 4,
    name: "Samurai Dragon Roll",
    category: "sushi",
    description:
      "Eel, cucumber, avocado topped with thin slices of avocado and our signature eel sauce.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "15 min",
  },
  {
    id: 5,
    name: "Rainbow Sashimi Platter",
    category: "sushi",
    description:
      "Assorted premium sashimi featuring salmon, tuna, yellowtail, and octopus, artistically presented.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "20 min",
  },
  {
    id: 6,
    name: "Spicy Tuna Crunch",
    category: "sushi",
    description:
      "Fresh spicy tuna with tempura flakes, cucumber, and spicy mayo topped with crispy shallots.",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1644973670872-09cb0ea3ea3b?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: true,
    vegan: false,
    prepTime: "15 min",
  },
  {
    id: 7,
    name: "Edamame Truffle",
    category: "appetizers",
    description:
      "Steamed soybeans tossed in black truffle oil and Himalayan pink salt.",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: true,
    prepTime: "10 min",
  },
  {
    id: 8,
    name: "Gyoza Six Ways",
    category: "appetizers",
    description:
      "Handcrafted pan-seared dumplings with pork and vegetable filling, served with yuzu ponzu.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "15 min",
  },
  {
    id: 9,
    name: "Tuna Tataki",
    category: "appetizers",
    description:
      "Seared bluefin tuna with sesame crust, served with yuzu soy and microgreens.",
    price: 175,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    popular: false,
    spicy: false,
    vegan: false,
    prepTime: "12 min",
  },
  {
    id: 10,
    name: "Wagyu Teriyaki",
    category: "main",
    description:
      "Grilled A5 Wagyu beef glazed with house teriyaki, served with steamed rice and seasonal vegetables.",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "25 min",
  },
  {
    id: 11,
    name: "Chicken Katsu Curry",
    category: "main",
    description:
      "Breaded chicken cutlet over steamed rice with rich Japanese curry sauce and pickled vegetables.",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "20 min",
  },
  {
    id: 12,
    name: "Soba Noodles Tempura",
    category: "main",
    description:
      "Cold buckwheat noodles with dipping sauce and vegetable tempura platter.",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    popular: false,
    spicy: false,
    vegan: true,
    prepTime: "18 min",
  },
  {
    id: 13,
    name: "Matcha Tiramisu",
    category: "desserts",
    description:
      "Japanese twist on Italian classic with matcha soaked ladyfingers and mascarpone cream.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "10 min",
  },
  {
    id: 14,
    name: "Mochi Ice Cream Trio",
    category: "desserts",
    description:
      "Three flavors: matcha, black sesame, and yuzu wrapped in soft mochi skin.",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: "5 min",
  },
  {
    id: 15,
    name: "Dorayaki Gold",
    category: "desserts",
    description:
      "Two fluffy honey pancakes sandwiching sweet red bean paste with gold leaf garnish.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    popular: false,
    spicy: false,
    vegan: true,
    prepTime: "10 min",
  },
  {
    id: 16,
    name: "Sake Flight Premium",
    category: "drinks",
    description:
      "Tasting of three premium Japanese sakes selected by our sommelier.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    popular: false,
    spicy: false,
    vegan: true,
    prepTime: "5 min",
  },
  {
    id: 17,
    name: "Samurai Whisky Highball",
    category: "drinks",
    description:
      "Japanese single malt whisky with sparkling water and yuzu twist over ice sphere.",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: true,
    prepTime: "5 min",
  },
  {
    id: 18,
    name: "Yuzu Sparkling Lemonade",
    category: "drinks",
    description:
      "Fresh yuzu juice, sparkling water, honey, and mint leaves over ice.",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1200&q=80",
    popular: true,
    spicy: false,
    vegan: true,
    prepTime: "5 min",
  },
];
