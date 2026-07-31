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
    name: 'Shabu-Shabu Deluxe',
    category: 'hotpot',
    description: 'Thinly sliced premium beef, fresh vegetables, and udon noodles simmered in our signature dashi broth.',
    price: 280,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20Japanese%20shabu%20shabu%20hot%20pot%20with%20thinly%20sliced%20wagyu%20beef%20fresh%20vegetables%20tofu%20in%20elegant%20pot%20restaurant%20presentation&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '25 min'
  },
  {
    id: 2,
    name: 'Sukiyaki Gold',
    category: 'hotpot',
    description: 'A luxurious hot pot experience with marbled Wagyu beef, tofu, negi, and warishita sweet soy broth.',
    price: 350,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxurious%20Japanese%20sukiyaki%20hot%20pot%20with%20marbled%20wagyu%20beef%20tofu%20mushrooms%20in%20sweet%20soy%20broth%20gourmet%20presentation&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '30 min'
  },
  {
    id: 3,
    name: 'Spicy Miso Hot Pot',
    category: 'hotpot',
    description: 'Rich spicy miso broth with premium pork belly, mushrooms, bok choy, and glass noodles.',
    price: 260,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=spicy%20Japanese%20miso%20hot%20pot%20with%20pork%20belly%20mushrooms%20vegetables%20noodles%20red%20spicy%20broth%20steam%20rising&image_size=square_hd',
    popular: false,
    spicy: true,
    vegan: false,
    prepTime: '25 min'
  },
  {
    id: 4,
    name: 'Samurai Dragon Roll',
    category: 'sushi',
    description: 'Eel, cucumber, avocado topped with thin slices of avocado and our signature eel sauce.',
    price: 180,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20Japanese%20dragon%20sushi%20roll%20topped%20with%20sliced%20avocado%20eel%20sauce%20toasted%20sesame%20seeds%20elegant%20black%20plate&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '15 min'
  },
  {
    id: 5,
    name: 'Rainbow Sashimi Platter',
    category: 'sushi',
    description: 'Assorted premium sashimi featuring salmon, tuna, yellowtail, and octopus, artistically presented.',
    price: 320,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxurious%20Japanese%20rainbow%20sashimi%20platter%20salmon%20tuna%20yellowtail%20octopus%20on%20crushed%20ice%20with%20shiso%20garnish&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '20 min'
  },
  {
    id: 6,
    name: 'Spicy Tuna Crunch',
    category: 'sushi',
    description: 'Fresh spicy tuna with tempura flakes, cucumber, and spicy mayo topped with crispy shallots.',
    price: 160,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=spicy%20tuna%20crunch%20sushi%20roll%20tempura%20flakes%20cucumber%20spicy%20mayo%20crispy%20shallots%20on%20ceramic%20plate&image_size=square_hd',
    popular: true,
    spicy: true,
    vegan: false,
    prepTime: '15 min'
  },
  {
    id: 7,
    name: 'Edamame Truffle',
    category: 'appetizers',
    description: 'Steamed soybeans tossed in black truffle oil and Himalayan pink salt.',
    price: 65,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20edamame%20beans%20in%20pod%20with%20truffle%20oil%20sea%20salt%20in%20elegant%20ceramic%20bowl%20dark%20background&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: true,
    prepTime: '10 min'
  },
  {
    id: 8,
    name: 'Gyoza Six Ways',
    category: 'appetizers',
    description: 'Handcrafted pan-seared dumplings with pork and vegetable filling, served with yuzu ponzu.',
    price: 95,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=crispy%20pan%20seared%20Japanese%20gyoza%20dumplings%20golden%20brown%20with%20ponzu%20sauce%20sesame%20seeds%20green%20onion&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '15 min'
  },
  {
    id: 9,
    name: 'Tuna Tataki',
    category: 'appetizers',
    description: 'Seared bluefin tuna with sesame crust, served with yuzu soy and microgreens.',
    price: 175,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20tuna%20tataki%20seared%20bluefin%20sesame%20crust%20rare%20inside%20yuzu%20ponzu%20microgreens%20gourmet%20plate&image_size=square_hd',
    popular: false,
    spicy: false,
    vegan: false,
    prepTime: '12 min'
  },
  {
    id: 10,
    name: 'Wagyu Teriyaki',
    category: 'main',
    description: 'Grilled A5 Wagyu beef glazed with house teriyaki, served with steamed rice and seasonal vegetables.',
    price: 420,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20Japanese%20A5%20wagyu%20steak%20teriyaki%20glaze%20with%20rice%20broccoli%20carrots%20gourmet%20restaurant%20plating&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '25 min'
  },
  {
    id: 11,
    name: 'Chicken Katsu Curry',
    category: 'main',
    description: 'Breaded chicken cutlet over steamed rice with rich Japanese curry sauce and pickled vegetables.',
    price: 140,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20chicken%20katsu%20curry%20crispy%20breaded%20cutlet%20thick%20curry%20sauce%20rice%20fukujinzuke%20pickles&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '20 min'
  },
  {
    id: 12,
    name: 'Soba Noodles Tempura',
    category: 'main',
    description: 'Cold buckwheat noodles with dipping sauce and vegetable tempura platter.',
    price: 130,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20cold%20soba%20buckwheat%20noodles%20on%20bamboo%20mat%20with%20tsuyu%20dipping%20sauce%20vegetable%20tempura&image_size=square_hd',
    popular: false,
    spicy: false,
    vegan: true,
    prepTime: '18 min'
  },
  {
    id: 13,
    name: 'Matcha Tiramisu',
    category: 'desserts',
    description: 'Japanese twist on Italian classic with matcha soaked ladyfingers and mascarpone cream.',
    price: 85,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20matcha%20green%20tea%20tiramisu%20dessert%20layered%20with%20mascarpone%20cocoa%20powder%20elegant%20glass&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '10 min'
  },
  {
    id: 14,
    name: 'Mochi Ice Cream Trio',
    category: 'desserts',
    description: 'Three flavors: matcha, black sesame, and yuzu wrapped in soft mochi skin.',
    price: 75,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20mochi%20ice%20cream%20three%20flavors%20matcha%20green%20black%20sesame%20yuzu%20citrus%20on%20black%20slate&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: false,
    prepTime: '5 min'
  },
  {
    id: 15,
    name: 'Dorayaki Gold',
    category: 'desserts',
    description: 'Two fluffy honey pancakes sandwiching sweet red bean paste with gold leaf garnish.',
    price: 60,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20dorayaki%20pancakes%20red%20bean%20anko%20paste%20filling%20gold%20leaf%20garnish%20on%20ceramic%20plate&image_size=square_hd',
    popular: false,
    spicy: false,
    vegan: true,
    prepTime: '10 min'
  },
  {
    id: 16,
    name: 'Sake Flight Premium',
    category: 'drinks',
    description: 'Tasting of three premium Japanese sakes selected by our sommelier.',
    price: 220,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20Japanese%20sake%20flight%20tasting%20three%20ceramic%20cups%20different%20sakes%20bamboo%20wood%20tray&image_size=square_hd',
    popular: false,
    spicy: false,
    vegan: true,
    prepTime: '5 min'
  },
  {
    id: 17,
    name: 'Samurai Whisky Highball',
    category: 'drinks',
    description: 'Japanese single malt whisky with sparkling water and yuzu twist over ice sphere.',
    price: 140,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20whisky%20highball%20cocktail%20in%20tall%20glass%20ice%20sphere%20yuzu%20twist%20dark%20bar%20background&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: true,
    prepTime: '5 min'
  },
  {
    id: 18,
    name: 'Yuzu Sparkling Lemonade',
    category: 'drinks',
    description: 'Fresh yuzu juice, sparkling water, honey, and mint leaves over ice.',
    price: 55,
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20yuzu%20sparkling%20lemonade%20cocktail%20mint%20leaves%20ice%20in%20elegant%20glass%20summer%20drink&image_size=square_hd',
    popular: true,
    spicy: false,
    vegan: true,
    prepTime: '5 min'
  }
];
