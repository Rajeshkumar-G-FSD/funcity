export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  priceTag?: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  avatar: string;
}

export interface ResortFact {
  label: string;
  count: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "car-rentals",
    title: "Car Rentals",
    iconName: "Car",
    shortDesc: "Premium sports cars and convertible rentals.",
    longDesc: "Explore Ibiza in style with our fleet of luxury SUVs, convertibles, and prestige supercars. Full comprehensive insurance and island-wide delivery included.",
    priceTag: "From €150 / day",
    features: ["Airport Delivery", "GPS & Child Seats", "24/7 Roadside Assistance", "Prestige Models Only"]
  },
  {
    id: "scooter-rental",
    title: "Scooter Rental",
    iconName: "Bike",
    shortDesc: "Agile 125cc scooters to navigate narrow roads.",
    longDesc: "Beat the island traffic and easily access the most secluded coves (Calas) of Ibiza. Helmets, unlimited mileage, and security lock included.",
    priceTag: "From €35 / day",
    features: ["Dual Helmets Included", "Unlimited Mileage", "Trunk Space", "Fuel Efficient"]
  },
  {
    id: "vip-table",
    title: "VIP Table Reservation",
    iconName: "Sparkles",
    shortDesc: "Exclusive access to top Ibiza world-class clubs.",
    longDesc: "Guaranteed VIP tables at Pacha, Ushuaïa, Hï, Amnesia, and DC10. Includes private hosts, bypass lines, and direct table entry.",
    priceTag: "On Request",
    features: ["Bypass Entry Lines", "Dedicated Host", "Premium Bottle Service", "Best Table Locations"]
  },
  {
    id: "limo-hire",
    title: "Limo Hire",
    iconName: "ShieldCheck",
    shortDesc: "Chauffeur services in executive limousines.",
    longDesc: "Travel like royalty with our top-of-the-line stretched limousines and Mercedes V-Class executive vans, fully driven by local expert chauffeurs.",
    priceTag: "From €120 / hour",
    features: ["Bilingual Chauffeurs", "Complimentary Champagne", "Privacy Partition", "Custom Itineraries"]
  },
  {
    id: "boat-parties",
    title: "Boat Parties",
    iconName: "Music",
    shortDesc: "Legendary ocean sunset parties with live DJs.",
    longDesc: "Experience the magic of Ibiza's sunset from the water. Includes premium open bars, professional catering, water toys, and international live DJs.",
    priceTag: "From €79 / person",
    features: ["Live DJs & Saxophone", "Premium Open Bar", "Paella Catering", "Sunset Viewing Stop"]
  },
  {
    id: "yacht-rental",
    title: "Yacht rental",
    iconName: "Ship",
    shortDesc: "Private luxury catamarans and motor yachts.",
    longDesc: "Charter a private yacht to Formentera. Swim in turquoise waters, dine at luxury beach restaurants, and enjoy the ultimate privacy of the Mediterranean.",
    priceTag: "From €950 / day",
    features: ["Private Captain & Crew", "Paddleboards & Snorkel Gear", "Complimentary Drinks", "Formentera Crossing"]
  },
  {
    id: "zoo-project",
    title: "The Zoo Project Package",
    iconName: "Flame",
    shortDesc: "Special immersive party tickets and body paint.",
    longDesc: "Experience one of Ibiza's most unique open-air festivals with animal-themed performers, multiple stages of deep house, and artistic body painting.",
    priceTag: "From €55 / ticket",
    features: ["Express Entry Ticket", "Professional Body Painting", "Official Zoo Merchandise", "VIP Drinks Voucher"]
  },
  {
    id: "open-bar",
    title: "Open bar",
    iconName: "GlassWater",
    shortDesc: "Private villa mixologists and premium bars.",
    longDesc: "Host your own private party with a fully stocked cocktail bar and world-class flair bartenders serving customized signature cocktails at your villa.",
    priceTag: "From €45 / person",
    features: ["Bespoke Cocktail Menu", "Premium Brand Spirits", "Flair Show", "All Glassware & Ice Included"]
  },
  {
    id: "golf",
    title: "Golf",
    iconName: "Flag",
    shortDesc: "Reservations at Golf Ibiza premium 18-hole courses.",
    longDesc: "Book prime tee times at Ibiza's exclusive golf course nestled in beautiful pine valleys. Includes green fees, buggy rentals, and premium club rental.",
    priceTag: "From €90 / player",
    features: ["Guaranteed Tee Times", "Electric Buggy Included", "TaylorMade Club Rental", "Clubhouse VIP Access"]
  },
  {
    id: "paintball",
    title: "Paintball",
    iconName: "Target",
    shortDesc: "Action-packed tactical games in custom outdoor arenas.",
    longDesc: "Perfect for stag/hen parties or team-building. Large specialized outdoor terrains with natural obstacles, premium gear, and custom scenarios.",
    priceTag: "From €30 / player",
    features: ["Full Safety Gear", "300 Paintballs Included", "Professional Referee", "Tactical Fields"]
  },
  {
    id: "go-kart",
    title: "Go Kart",
    iconName: "Zap",
    shortDesc: "High-speed outdoor racing on Ibiza's premier track.",
    longDesc: "Get your adrenaline pumping on the top-tier go-karting track. Modern 390cc karts, electronic timing, and grand podium celebrations.",
    priceTag: "From €25 / session",
    features: ["390cc High-Output Karts", "Digital Lap Timing", "Safety Briefing & Helmet", "Podium Ceremony"]
  },
  {
    id: "spa-beauty",
    title: "Spa & Beauty",
    iconName: "Flower",
    shortDesc: "In-villa massage, massage therapists, and wellness.",
    longDesc: "Rejuvenate your senses with luxurious wellness treatments, therapeutic deep tissue massages, and customized facial therapies delivered directly to your villa.",
    priceTag: "From €85 / session",
    features: ["Certified Therapists", "Organic Essential Oils", "Portable Massage Table", "Sound Healing Elements"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "william-joe",
    name: "William Joe",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Our family villa stay was absolutely immaculate, and the yacht booking to Formentera was the highlight of our summer.",
    role: "Villa Guest & Yacht Charter client",
    avatar: "testimonial_user"
  },
  {
    id: "sophia-m",
    name: "Sophia Martinez",
    quote: "The VIP Table Reservation service was flawless! They managed to secure the best table at Hï Ibiza on a completely sold-out night. Absolute professionals from start to finish.",
    role: "Luxury Clubber & Event VIP",
    avatar: "" // fallback avatar
  },
  {
    id: "alexander-v",
    name: "Alexander von Berg",
    quote: "La Isla takes Ibiza concierge service to an entirely new level. The limousine chauffeur was incredibly professional, and our private in-villa mixologist created unforgettable cocktails.",
    role: "Corporate Retreat Organizer",
    avatar: "" // fallback avatar
  }
];

export const RESORT_FACTS: ResortFact[] = [
  { count: "90", label: "Luxury Rooms" },
  { count: "120", label: "Family Rooms" },
  { count: "340", label: "Standart Rooms" },
  { count: "10", label: "Restaurants and Bars" },
  { count: "2", label: "Parking Spaces" },
  { count: "1", label: "Spa Center" },
  { count: "4", label: "Fitness Halls" },
  { count: "3", label: "Conference Halls" },
  { count: "5", label: "Swimming Pools" },
  { count: "1", label: "Beauty Center" }
];
