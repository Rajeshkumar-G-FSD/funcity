import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Car,
  Bike,
  Sparkles,
  ShieldCheck,
  Music,
  Ship,
  Flame,
  GlassWater,
  Flag,
  Target,
  Zap,
  Flower,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  X,
  Calendar,
  Clock,
  User,
  Mail,
  CheckCircle,
  Menu,
  ChevronRight,
  MapPin,
  Compass,
  Phone,
  Heart,
  Search,
  Home
} from "lucide-react";

import { SERVICES_DATA, TESTIMONIALS_DATA, RESORT_FACTS, Service } from "./data";

// Import generated images
import testimonialUserImage from "./assets/images/testimonial_user_1784117981837.jpg";

// Hero section images
import heroImageBackside from "./assets/images/jr_mist_valley_backside.webp";
import heroImageBackstay from "./assets/images/jr_mist_valley_backstay.webp";
import heroImageBalcony from "./assets/images/jr_mist_valley_balcony.webp";
import heroImageRoom from "./assets/images/jr_mist_valley_room.webp";
import heroImageViewPoint from "./assets/images/jr_mist_valley_view_point.webp";
import heroImageViewpointAlt from "./assets/images/jr_mist_valley_viewpoint_alt.webp";

const HERO_IMAGES = [
  { src: heroImageBackside, alt: "J R Mist Valley Inn exterior" },
  { src: heroImageBackstay, alt: "J R Mist Valley Inn stay" },
  { src: heroImageBalcony, alt: "J R Mist Valley Inn balcony" },
  { src: heroImageRoom, alt: "J R Mist Valley Inn room" },
  { src: heroImageViewPoint, alt: "J R Mist Valley Inn view point" },
  { src: heroImageViewpointAlt, alt: "J R Mist Valley Inn scenic viewpoint" }
];

export default function App() {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState("HOME");
  
  // Mobile menu open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals state
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedFact, setSelectedFact] = useState<string | null>(null);

  // Hero slider state
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Hero booking search widget state
  const [bookingWidgetLocation, setBookingWidgetLocation] = useState("Ooty");
  const [bookingWidgetCheckIn, setBookingWidgetCheckIn] = useState("");
  const [bookingWidgetCheckOut, setBookingWidgetCheckOut] = useState("");
  const [showAvailabilityNotice, setShowAvailabilityNotice] = useState(false);

  const handleSearchAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAvailabilityNotice(true);
  };

  // Testimonial slider state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Quick contact form state
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [showContactSuccess, setShowContactSuccess] = useState(false);

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guestCount: "2",
    customNotes: "",
    specificSelection: ""
  });
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  // Handle contact form submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setIsSubmittingContact(true);
    setTimeout(() => {
      setIsSubmittingContact(false);
      setShowContactSuccess(true);
      setContactForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  // Handle booking form submit
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email || !bookingForm.date) return;
    setIsSubmittingBooking(true);
    setTimeout(() => {
      setIsSubmittingBooking(false);
      setShowBookingSuccess(true);
    }, 1200);
  };

  const closeBookingModal = () => {
    setSelectedService(null);
    setShowBookingSuccess(false);
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      guestCount: "2",
      customNotes: "",
      specificSelection: ""
    });
  };

  // Helper to map icon name to Lucide Component
  const renderServiceIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-gold stroke-[1.2] transition-colors group-hover:text-gold-light" };
    switch (iconName) {
      case "Car": return <Car {...iconProps} />;
      case "Bike": return <Bike {...iconProps} />;
      case "Sparkles": return <Sparkles {...iconProps} />;
      case "ShieldCheck": return <ShieldCheck {...iconProps} />;
      case "Music": return <Music {...iconProps} />;
      case "Ship": return <Ship {...iconProps} />;
      case "Flame": return <Flame {...iconProps} />;
      case "GlassWater": return <GlassWater {...iconProps} />;
      case "Flag": return <Flag {...iconProps} />;
      case "Target": return <Target {...iconProps} />;
      case "Zap": return <Zap {...iconProps} />;
      case "Flower": return <Flower {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setActiveTab(id.toUpperCase());
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans antialiased selection:bg-gold selection:text-neutral-900">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            
            {/* Left Nav Menu (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 w-1/3 justify-start">
              {["home", "about", "services"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-[11px] font-sans tracking-[0.25em] uppercase transition-colors hover:text-gold focus:outline-none ${
                    activeTab === item.toUpperCase() ? "text-gold font-medium" : "text-neutral-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Centered Brand Logo */}
            <div className="flex flex-col items-center justify-center text-center py-1 group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="flex items-center gap-3">
                {/* Gold Crest Ornament Left */}
                <div className="hidden lg:block w-8 h-[1px] bg-gradient-to-r from-transparent to-gold"></div>
                <div className="text-gold text-2xl tracking-[0.2em] font-serif font-light flex items-center justify-center gap-1">
                  J R MIST VALLEY INN
                </div>
                {/* Gold Crest Ornament Right */}
                <div className="hidden lg:block w-8 h-[1px] bg-gradient-to-l from-transparent to-gold"></div>
              </div>
            </div>

            {/* Right Nav Menu (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 w-1/3 justify-end">
              <button
                onClick={() => scrollToSection("resort-facts")}
                className={`text-[11px] font-sans tracking-[0.25em] uppercase transition-colors hover:text-gold focus:outline-none ${
                  activeTab === "RESORT-FACTS" ? "text-gold font-medium" : "text-neutral-400"
                }`}
              >
                RESORT FACTS
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`text-[11px] font-sans tracking-[0.25em] uppercase transition-colors hover:text-gold focus:outline-none ${
                  activeTab === "TESTIMONIALS" ? "text-gold font-medium" : "text-neutral-400"
                }`}
              >
                TESTIMONIALS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-[11px] font-sans tracking-[0.25em] uppercase transition-colors hover:text-gold focus:outline-none ${
                  activeTab === "CONTACT" ? "text-gold font-medium" : "text-neutral-400"
                }`}
              >
                CONTACT
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden w-full justify-between items-center px-2">
              <div className="text-gold tracking-[0.2em] font-serif text-lg">J R MIST VALLEY INN</div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-400 hover:text-gold transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-950 border-t border-neutral-900"
            >
              <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
                {["home", "about", "services", "resort-facts", "testimonials", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left py-2 text-xs font-sans tracking-[0.2em] uppercase text-neutral-300 hover:text-gold"
                  >
                    {item.replace("-", " ")}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SECTION 1: HERO BANNER */}
      <section id="home" className="relative h-screen sm:h-[80vh] md:h-[85vh] min-h-screen sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentHeroIndex}
              src={HERO_IMAGES[currentHeroIndex].src}
              alt={HERO_IMAGES[currentHeroIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover brightness-75"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-neutral-950/20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-50 to-transparent"></div>
        </div>

        {/* Hero slide dot indicators */}
        <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all focus:outline-none ${
                currentHeroIndex === idx ? "bg-gold w-6" : "bg-white/50 w-2 hover:bg-white/80"
              }`}
              aria-label={`Go to hero image ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Booking Search Widget: bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-center px-4 pb-10 sm:pb-12 pointer-events-none">
          <motion.form
            onSubmit={handleSearchAvailability}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="pointer-events-auto bg-neutral-50/95 backdrop-blur-md shadow-2xl rounded-sm w-full max-w-5xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
              {/* Location */}
              <div className="flex items-center gap-3 px-6 py-4 md:flex-1 min-w-0">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <div className="min-w-0 w-full">
                  <label htmlFor="widget-location" className="block text-[10px] font-sans tracking-[0.2em] uppercase text-neutral-500 font-semibold mb-0.5">
                    Location
                  </label>
                  <select
                    id="widget-location"
                    value={bookingWidgetLocation}
                    onChange={(e) => setBookingWidgetLocation(e.target.value)}
                    className="w-full bg-transparent text-neutral-900 text-sm font-serif focus:outline-none cursor-pointer appearance-none"
                  >
                    <option value="Ooty">Ooty</option>
                  </select>
                </div>
              </div>

              {/* Property / Address */}
              <div className="flex items-center gap-3 px-6 py-4 md:flex-1 min-w-0">
                <Home className="w-5 h-5 text-gold shrink-0" />
                <div className="min-w-0 w-full">
                  <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-neutral-500 font-semibold mb-0.5">
                    Property
                  </span>
                  <p className="text-neutral-900 text-sm font-serif truncate">
                    Coonoor Rd, Lovedale, Ooty, Tamil Nadu 643215
                  </p>
                </div>
              </div>

              {/* Check-In */}
              <div className="flex items-center gap-3 px-6 py-4 md:flex-1 min-w-0">
                <Calendar className="w-5 h-5 text-gold shrink-0" />
                <div className="min-w-0 w-full">
                  <label htmlFor="widget-checkin" className="block text-[10px] font-sans tracking-[0.2em] uppercase text-neutral-500 font-semibold mb-0.5">
                    Check-In
                  </label>
                  <input
                    id="widget-checkin"
                    type="date"
                    value={bookingWidgetCheckIn}
                    onChange={(e) => setBookingWidgetCheckIn(e.target.value)}
                    className="w-full bg-transparent text-neutral-900 text-sm font-serif focus:outline-none"
                  />
                </div>
              </div>

              {/* Check-Out */}
              <div className="flex items-center gap-3 px-6 py-4 md:flex-1 min-w-0">
                <Calendar className="w-5 h-5 text-gold shrink-0" />
                <div className="min-w-0 w-full">
                  <label htmlFor="widget-checkout" className="block text-[10px] font-sans tracking-[0.2em] uppercase text-neutral-500 font-semibold mb-0.5">
                    Check-Out
                  </label>
                  <input
                    id="widget-checkout"
                    type="date"
                    value={bookingWidgetCheckOut}
                    onChange={(e) => setBookingWidgetCheckOut(e.target.value)}
                    className="w-full bg-transparent text-neutral-900 text-sm font-serif focus:outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-neutral-950 text-xs font-bold tracking-[0.2em] uppercase transition-colors focus:outline-none"
              >
                <Search className="w-4 h-4" />
                Search Availability
              </button>
            </div>
          </motion.form>
        </div>

        {/* Wavy rugged white divider to About section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-auto text-neutral-50 fill-current drop-shadow-[0_-5px_10px_rgba(0,0,0,0.05)]"
            preserveAspectRatio="none"
          >
            <path d="M0,45 C150,55 350,15 500,25 C650,35 850,55 1050,45 C1250,35 1350,15 1440,30 L1440,60 L0,60 Z" />
            {/* Adding subtle jagged edge to simulate torn paper */}
            <path d="M0,40 Q30,35 60,42 T120,40 T180,45 T240,38 T300,43 T360,40 T420,36 T480,45 T540,42 T600,38 T660,43 T720,41 T780,35 T840,44 T900,40 T960,37 T1020,45 T1080,42 T1140,39 T1200,43 T1260,40 T1320,36 T1380,44 T1440,35 L1440,60 L0,60 Z" className="opacity-70 fill-white" />
          </svg>
        </div>
      </section>

      {/* SECTION 2: ABOUT US */}
      <section id="about" className="bg-neutral-50 text-neutral-800 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Columns: Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-semibold">WELCOME TO IBIZA</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-neutral-900 leading-tight">
                ABOUT <span className="text-gold font-light">US</span>
              </h2>
              
              <div className="h-[2px] w-24 bg-gold-light"></div>

              <div className="space-y-4 text-neutral-600 font-sans font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                </p>
              </div>

              <button
                onClick={() => setIsAboutModalOpen(true)}
                className="group relative inline-flex items-center gap-3 px-6 py-3 border border-gold text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-neutral-900 transition-all duration-300 font-medium focus:outline-none focus:ring-1 focus:ring-gold"
              >
                MORE DETAILS
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Columns: Styled Image with Mask/Painted Effect */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4">
              <div className="relative p-3 bg-white shadow-xl max-w-md w-full">
                {/* Rough painted border simulation via clipping */}
                <div className="overflow-hidden brush-edge-top brush-edge-bottom bg-neutral-100 rounded-sm">
                  <img
                    src={heroImageBackside}
                    alt="J R Mist Valley Inn exterior"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Vintage overlay elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-gold/40"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-gold/40"></div>
              </div>

              {/* Gallery strip: entrance, bed room, garden, viewpoint */}
              <div className="grid grid-cols-4 gap-2 max-w-md w-full">
                {HERO_IMAGES.map((image) => (
                  <div key={image.alt} className="overflow-hidden rounded-sm shadow-md aspect-square bg-neutral-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Transition: Dark grey brush edge separator to Services */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-auto text-neutral-900 fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,20 C180,35 320,5 480,25 C640,45 800,45 960,15 C1120,-15 1280,15 1440,5 L1440,60 L0,60 Z" />
            <path d="M0,15 Q40,8 80,18 T160,15 T240,22 T320,10 T400,18 T480,15 T560,9 T640,20 T720,17 T800,8 T880,19 T960,15 T1040,11 T1120,20 T1200,15 T1280,9 T1360,19 T1440,10 L1440,60 L0,60 Z" className="opacity-60 fill-neutral-900" />
          </svg>
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES */}
      <section id="services" className="bg-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-[0.2em] text-gold uppercase">
              OUR <span className="text-neutral-100 font-light">SERVICES</span>
            </h2>
            <div className="h-[1px] w-28 bg-gold mx-auto"></div>
            <p className="text-neutral-400 font-light font-sans text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Grid of 12 Services */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer border border-neutral-800 bg-neutral-950/40 p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-gold/80 hover:bg-neutral-950/80 hover:shadow-2xl hover:shadow-gold/5 relative overflow-hidden min-h-[160px]"
              >
                {/* Corner border styling */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-800 group-hover:border-gold"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-800 group-hover:border-gold"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-800 group-hover:border-gold"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-800 group-hover:border-gold"></div>

                {/* Service Icon */}
                <div className="p-3 bg-neutral-900 rounded-full border border-neutral-800/80 group-hover:border-gold/30 transition-colors">
                  {renderServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-neutral-200 text-xs sm:text-sm font-serif tracking-[0.15em] uppercase group-hover:text-gold transition-colors font-medium">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Transition: White brush edge separator to Facts section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-auto text-neutral-100 fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,35 C200,10 400,55 600,25 C800,-5 1000,50 1200,30 C1300,20 1380,10 1440,25 L1440,60 L0,60 Z" />
            <path d="M0,30 Q40,22 80,32 T160,25 T240,35 T320,20 T400,32 T480,25 T560,18 T640,32 T720,28 T800,18 T880,32 T960,25 T1040,20 T1120,32 T1200,25 T1280,18 T1360,32 T1440,20 L1440,60 L0,60 Z" className="opacity-50 fill-white" />
          </svg>
        </div>
      </section>

      {/* SECTION 4: LOREM IPSUM RESORT FACTS */}
      <section id="resort-facts" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-100">
        
        {/* Background Image of Cabanas */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImageViewPoint}
            alt="J R Mist Valley Inn view point"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-900/50 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Frosted Glass Floating Card with Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 bg-white/90 backdrop-blur-md p-8 sm:p-12 border border-white/60 shadow-2xl text-neutral-800"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">DISCOVER OUR HAVEN</span>
              <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-neutral-900 uppercase mt-2 mb-4">
                LOREM <span className="text-gold font-light">IPSUM</span>
              </h2>
              
              <p className="text-neutral-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>

              {/* Facts Grid arranged in a neat 2-column layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-neutral-200/80 pt-8">
                {RESORT_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    onClick={() => setSelectedFact(fact.label)}
                    className="flex items-center gap-3 group cursor-pointer py-1.5 px-2 hover:bg-gold/10 rounded transition-all"
                  >
                    <Star className="w-4 h-4 text-gold fill-gold shrink-0 transition-transform group-hover:scale-125" />
                    <span className="text-xs sm:text-sm font-sans tracking-wide text-neutral-700 group-hover:text-neutral-900 transition-colors">
                      <strong className="text-neutral-900 font-medium">{fact.count}</strong> {fact.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side Info Box */}
            <div className="lg:col-span-4 text-white space-y-6 lg:pl-6">
              <div className="border-l-4 border-gold pl-6 py-2">
                <p className="text-lg sm:text-xl font-serif italic tracking-wide text-gold-light">
                  "The ultimate Ibiza luxury retreat experience where every single desire is beautifully met."
                </p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Whether you need a dedicated in-villa massage therapist, exclusive entrance to world-famous dance arenas, or a private yacht crossing to the beaches of Formentera, our lifestyle managers are at your disposal 24/7.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 text-gold-light hover:text-white transition-colors text-xs tracking-widest font-medium uppercase"
              >
                REQUEST A BESPOKE STAY <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Transition: White curve to Testimonials */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-auto text-white fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,25 C250,55 450,15 700,45 C950,75 1150,15 1440,35 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section id="testimonials" className="bg-white text-neutral-800 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-serif tracking-[0.2em] text-neutral-900 uppercase">
              TESTIMONIALS
            </h2>
            <div className="h-[1px] w-24 bg-gold mx-auto"></div>
          </div>

          {/* Slider Display */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Left Side: Avatar */}
                <div className="md:col-span-3 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-gold p-1 shadow-lg bg-neutral-100 overflow-hidden relative">
                    {TESTIMONIALS_DATA[currentTestimonialIndex].avatar ? (
                      <img
                        src={testimonialUserImage}
                        alt={TESTIMONIALS_DATA[currentTestimonialIndex].name}
                        className="w-full h-full rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                        <User className="w-10 h-10" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-neutral-900 font-serif tracking-widest text-sm font-medium uppercase mt-4">
                    {TESTIMONIALS_DATA[currentTestimonialIndex].name}
                  </h4>
                  <p className="text-gold text-[10px] tracking-wider uppercase mt-1">
                    {TESTIMONIALS_DATA[currentTestimonialIndex].role}
                  </p>
                </div>

                {/* Right Side: Quote */}
                <div className="md:col-span-9 bg-neutral-50 p-6 sm:p-8 border border-neutral-100/80 relative">
                  {/* Decorative big quote mark */}
                  <span className="absolute top-2 left-4 text-neutral-200 text-6xl font-serif select-none pointer-events-none">“</span>
                  <p className="text-neutral-600 font-sans font-light italic leading-relaxed text-sm sm:text-base relative z-10 pl-4 pt-2">
                    {TESTIMONIALS_DATA[currentTestimonialIndex].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clickable Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${
                  currentTestimonialIndex === idx ? "bg-gold scale-125 px-2" : "bg-neutral-300 hover:bg-gold/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: FOOTER & QUICK CONTACT */}
      <footer id="contact" className="bg-neutral-950 text-neutral-300 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Col 1: QUICK LINKS */}
            <div className="space-y-6">
              <h3 className="text-white text-xs font-serif tracking-[0.25em] uppercase border-b border-neutral-800 pb-3 font-medium">
                QUICK LINKS
              </h3>
              <ul className="space-y-2.5">
                {[
                  { name: "HOME", id: "home" },
                  { name: "ABOUT", id: "about" },
                  { name: "SERVICES", id: "services" },
                  { name: "RESORT FACTS", id: "resort-facts" },
                  { name: "TESTIMONIALS", id: "testimonials" },
                  { name: "CONTACT", id: "contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-neutral-400 hover:text-gold transition-colors text-xs tracking-widest uppercase focus:outline-none flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-gold/60 group-hover:text-gold transition-colors" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: BRAND LOGO & BIO */}
            <div className="flex flex-col items-center justify-center text-center p-6 border border-neutral-900 bg-neutral-950/50 space-y-6">
              <div className="text-center">
                <div className="text-gold text-2xl tracking-[0.25em] font-serif font-light">
                  J R MIST VALLEY INN
                </div>
              </div>

              <p className="text-neutral-400 font-sans font-light text-xs leading-relaxed max-w-sm">
                Curabitur congue dolor sed massa feugiat, sit amet tempor orci convallis. Donec lacus magna, semper eget nisl sed, posuere.
              </p>

              {/* Contact Info: Address, Phone, Hours */}
              <div className="space-y-2.5 text-left">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span className="text-neutral-400 font-sans font-light text-xs leading-relaxed">
                    J R Mist Valley Inn, Coonoor Rd, Lovedale, Ooty, Tamil Nadu 643215
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a href="tel:+919487072058" className="text-neutral-400 hover:text-gold transition-colors font-sans font-light text-xs">
                    094870 72058
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-neutral-400 font-sans font-light text-xs">
                    Open 24 Hours, Every Day
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-gold hover:border-gold transition-all" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-gold hover:border-gold transition-all" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-gold hover:border-gold transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-gold hover:border-gold transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 3: QUICK CONTACT FORM */}
            <div className="space-y-6">
              <h3 className="text-white text-xs font-serif tracking-[0.25em] uppercase border-b border-neutral-800 pb-3 font-medium">
                QUICK CONTACT
              </h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name-input" className="sr-only">Name</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className="sr-only">Email</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message-input" className="sr-only">Message</label>
                  <textarea
                    id="message-input"
                    required
                    rows={3}
                    placeholder="Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-gold text-gold hover:text-neutral-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 border border-gold focus:outline-none focus:ring-1 focus:ring-gold flex items-center justify-center gap-2"
                >
                  {isSubmittingContact ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Golden tan sub-footer copyright strip */}
        <div className="bg-gold text-neutral-950 text-center py-3 px-4">
          <p className="text-[10px] font-sans tracking-[0.15em] uppercase font-medium">
            Copyright © 2016 La Isla Concierge Agency Ibiza. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── MODALS & INTERACTIVE POPUPS ── */}

      {/* 1. SERVICE DETAILS & LIFESTYLE BOOKING MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 text-neutral-100 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeBookingModal}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-gold transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Details Header */}
              <div className="flex items-center gap-4 border-b border-neutral-800 pb-4 mb-6">
                <div className="p-3 bg-neutral-950 rounded-lg border border-gold/30">
                  {renderServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-gold tracking-widest uppercase font-semibold">LA ISLA EXPERIENCES</span>
                  <h3 className="text-xl sm:text-2xl font-serif tracking-wide uppercase text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {!showBookingSuccess ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Col: Info */}
                  <div className="space-y-4">
                    <p className="text-neutral-300 font-sans font-light text-xs sm:text-sm leading-relaxed">
                      {selectedService.longDesc}
                    </p>
                    
                    {selectedService.priceTag && (
                      <div className="py-2.5 px-4 bg-neutral-950 border-l-2 border-gold flex flex-col">
                        <span className="text-[10px] text-neutral-400 tracking-wider uppercase">ESTIMATED INVESTMENT</span>
                        <span className="text-gold font-serif text-base font-semibold mt-0.5">{selectedService.priceTag}</span>
                      </div>
                    )}

                    {selectedService.features && (
                      <div className="space-y-2 pt-2">
                        <h4 className="text-[10px] text-neutral-400 tracking-widest uppercase font-semibold">EXCLUSIVELY INCLUDED:</h4>
                        <ul className="space-y-1.5">
                          {selectedService.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                              <Star className="w-3 h-3 text-gold fill-gold shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Col: Booking Request Form */}
                  <div className="bg-neutral-950 p-4 border border-neutral-800 space-y-4">
                    <h4 className="text-xs font-serif tracking-widest uppercase text-white border-b border-neutral-800 pb-2">
                      BOOKING REQUEST
                    </h4>

                    <form onSubmit={handleBookingSubmit} className="space-y-3">
                      <div>
                        <label htmlFor="modal-name" className="sr-only">Full Name</label>
                        <input
                          id="modal-name"
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label htmlFor="modal-email" className="sr-only">Email</label>
                          <input
                            id="modal-email"
                            type="email"
                            required
                            placeholder="Email *"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="modal-phone" className="sr-only">Phone Number</label>
                          <input
                            id="modal-phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label htmlFor="modal-date" className="sr-only">Date</label>
                          <input
                            id="modal-date"
                            type="date"
                            required
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-neutral-300 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="modal-guests" className="sr-only">Party Size</label>
                          <select
                            id="modal-guests"
                            value={bookingForm.guestCount}
                            onChange={(e) => setBookingForm({ ...bookingForm, guestCount: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-neutral-300 focus:outline-none transition-colors"
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="4">4 People</option>
                            <option value="6">6 People</option>
                            <option value="10">10+ People</option>
                          </select>
                        </div>
                      </div>

                      {/* Custom selection dropdown for specific choices */}
                      {selectedService.id === "car-rentals" && (
                        <div>
                          <label htmlFor="car-select" className="sr-only">Vehicle Tier</label>
                          <select
                            id="car-select"
                            value={bookingForm.specificSelection}
                            onChange={(e) => setBookingForm({ ...bookingForm, specificSelection: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-neutral-300 focus:outline-none transition-colors"
                          >
                            <option value="">Select vehicle style...</option>
                            <option value="ferrari">Ferrari Portofino Convertible</option>
                            <option value="lamborghini">Lamborghini Urus S SUV</option>
                            <option value="porsche">Porsche 911 Carrera Cabriolet</option>
                            <option value="jeep">Jeep Wrangler Rubicon (Open-top)</option>
                          </select>
                        </div>
                      )}

                      {selectedService.id === "spa-beauty" && (
                        <div>
                          <label htmlFor="spa-select" className="sr-only">Treatment Focus</label>
                          <select
                            id="spa-select"
                            value={bookingForm.specificSelection}
                            onChange={(e) => setBookingForm({ ...bookingForm, specificSelection: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-neutral-300 focus:outline-none transition-colors"
                          >
                            <option value="">Select treatment focus...</option>
                            <option value="massage">Deep Tissue Body Massage</option>
                            <option value="facial">Hydrating Facial & Glow</option>
                            <option value="yoga">Private Villa Yoga & Meditation</option>
                            <option value="detox">Full Body Detox Ritual</option>
                          </select>
                        </div>
                      )}

                      {selectedService.id === "yacht-rental" && (
                        <div>
                          <label htmlFor="yacht-select" className="sr-only">Charter Class</label>
                          <select
                            id="yacht-select"
                            value={bookingForm.specificSelection}
                            onChange={(e) => setBookingForm({ ...bookingForm, specificSelection: e.target.value })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-neutral-300 focus:outline-none transition-colors"
                          >
                            <option value="">Select charter category...</option>
                            <option value="catamaran">Luxury Sailing Catamaran (50ft+)</option>
                            <option value="motor-yacht">Italian Flybridge Motor Yacht</option>
                            <option value="speed-boat">Sleek Day Cruiser (35ft)</option>
                            <option value="mega-yacht">Superyacht with full crew (100ft+)</option>
                          </select>
                        </div>
                      )}

                      <div>
                        <label htmlFor="modal-notes" className="sr-only">Special Requirements</label>
                        <textarea
                          id="modal-notes"
                          rows={2}
                          placeholder="Special requirements or dietary guidelines..."
                          value={bookingForm.customNotes}
                          onChange={(e) => setBookingForm({ ...bookingForm, customNotes: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingBooking}
                        className="w-full py-2.5 bg-gold hover:bg-gold-dark text-neutral-950 font-semibold text-xs tracking-widest uppercase transition-all duration-300 focus:outline-none flex items-center justify-center gap-2"
                      >
                        {isSubmittingBooking ? (
                          <span>SUBMITTING SECURELY...</span>
                        ) : (
                          <>
                            <span>REQUEST BOOKING</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6 bg-neutral-950 border border-neutral-800 rounded-lg"
                >
                  <CheckCircle className="w-14 h-14 text-gold mb-4 animate-pulse" />
                  <h4 className="text-lg font-serif text-white tracking-widest uppercase mb-2">
                    REQUEST SUBMITTED
                  </h4>
                  <p className="text-neutral-300 font-sans font-light text-xs sm:text-sm max-w-md leading-relaxed mb-6">
                    Thank you, <strong className="text-gold">{bookingForm.name}</strong>. Your luxury lifestyle request for <strong className="text-gold">{selectedService.title}</strong> has been secured in our priority queue.
                  </p>
                  <div className="bg-neutral-900 border border-neutral-800/80 px-6 py-4 rounded-md max-w-sm w-full text-left space-y-1 text-xs text-neutral-400">
                    <div className="flex justify-between"><span className="font-medium text-neutral-300">Reference:</span> <span className="font-mono">LIS-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                    <div className="flex justify-between"><span className="font-medium text-neutral-300">Preferred Date:</span> <span>{bookingForm.date}</span></div>
                    <div className="flex justify-between"><span className="font-medium text-neutral-300">Response Window:</span> <span>Within 15 minutes</span></div>
                  </div>
                  <button
                    onClick={closeBookingModal}
                    className="mt-8 px-6 py-2 bg-neutral-900 hover:bg-gold text-gold hover:text-neutral-950 text-xs tracking-widest uppercase transition-all duration-300 border border-gold"
                  >
                    RETURN TO GALLERY
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. ABOUT MORE DETAILS MODAL */}
      <AnimatePresence>
        {isAboutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 text-neutral-100 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsAboutModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-gold transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-gold tracking-widest uppercase font-semibold">LA ISLA CONCIERGE AGENCY</span>
                  <h3 className="text-2xl font-serif tracking-wide uppercase text-white mt-1">
                    OUR HISTORY & PHILOSOPHY
                  </h3>
                  <div className="h-[1px] w-20 bg-gold mt-2"></div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed">
                  <p>
                    Established in 2016 in the beating heart of Ibiza, Spain, <strong>La Isla Concierge Agency</strong> was formed with a singular mission: to provide the ultimate luxury, bespoke, and seamless hospitality services for the world's most discerning travelers.
                  </p>
                  <p>
                    Our curated collection of elite lifestyle resources spans private mega-yachts, custom sports convertibles, breathtaking cliffside sanctuary villas, and elite VIP table accessibility in Ibiza's globally renowned musical spaces.
                  </p>
                  <p>
                    We operate with absolute discretion, prompt timing, and deep indigenous knowledge of the island's hidden coves, sunset spots, and authentic culinary experiences. From the moment you land at Ibiza Private Terminal to your final sunset cruise, our managers assure an flawless stay.
                  </p>
                </div>

                {/* Grid of values */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800 text-center">
                  <div className="p-4 bg-neutral-950 border border-neutral-800/80 rounded">
                    <Compass className="w-6 h-6 text-gold mx-auto mb-2" />
                    <h5 className="text-[10px] text-white tracking-widest uppercase font-semibold">BESPOKE ROUTING</h5>
                    <p className="text-[10px] text-neutral-400 mt-1">Tailor-made schedules for coves & dining.</p>
                  </div>
                  <div className="p-4 bg-neutral-950 border border-neutral-800/80 rounded">
                    <ShieldCheck className="w-6 h-6 text-gold mx-auto mb-2" />
                    <h5 className="text-[10px] text-white tracking-widest uppercase font-semibold">TOTAL SECURITY</h5>
                    <p className="text-[10px] text-neutral-400 mt-1">Discrete VIP security & secure routes.</p>
                  </div>
                  <div className="p-4 bg-neutral-950 border border-neutral-800/80 rounded">
                    <Heart className="w-6 h-6 text-gold mx-auto mb-2" />
                    <h5 className="text-[10px] text-white tracking-widest uppercase font-semibold">PASSIONATE HOSTING</h5>
                    <p className="text-[10px] text-neutral-400 mt-1">Dedicated bilingual hosts at your beck.</p>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setIsAboutModalOpen(false)}
                    className="px-6 py-2 bg-neutral-950 hover:bg-gold text-gold hover:text-neutral-950 text-xs tracking-widest uppercase transition-all border border-gold"
                  >
                    CLOSE DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. RESORT FACT INTERACTIVE HIGHLIGHTS */}
      <AnimatePresence>
        {selectedFact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 text-neutral-100 p-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedFact(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-gold transition-colors focus:outline-none"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <span className="text-[10px] text-gold tracking-widest uppercase font-semibold">RESORT SPECIFICATIONS</span>
                <h4 className="text-lg font-serif text-white tracking-widest uppercase">
                  {selectedFact}
                </h4>
                <div className="h-[1px] w-12 bg-gold"></div>

                <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed">
                  Our {selectedFact.toLowerCase()} are designed in full alignment with local Mediterranean styles, incorporating natural Balearic pine woodwork, spacious layouts, private sunrise decks, and direct visual access to our private coastal cove.
                </p>

                <div className="bg-neutral-950 p-3.5 border border-neutral-800/80 rounded text-xs space-y-1 text-neutral-400">
                  <div className="flex justify-between"><span className="font-semibold text-neutral-300">Availability:</span> <span className="text-gold">Select Dates</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-neutral-300">Design style:</span> <span>Modern Ibicencan Minimalist</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-neutral-300">Privileges:</span> <span>Full 24/7 Butler Access</span></div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setSelectedFact(null)}
                    className="px-4 py-1.5 bg-neutral-950 text-neutral-400 hover:text-neutral-200 text-[10px] tracking-widest uppercase transition-all"
                  >
                    CLOSE
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFact(null);
                      scrollToSection("contact");
                    }}
                    className="px-4 py-1.5 bg-gold text-neutral-950 font-semibold text-[10px] tracking-widest uppercase transition-all hover:bg-gold-dark"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. GENERAL CONTACT SUCCESS OVERLAY */}
      <AnimatePresence>
        {showContactSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-sm bg-neutral-900 border border-neutral-800 text-neutral-100 p-6 text-center shadow-2xl"
            >
              <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h4 className="text-lg font-serif tracking-widest uppercase text-white mb-2">
                MESSAGE SECURED
              </h4>
              <p className="text-xs text-neutral-300 font-sans font-light leading-relaxed mb-6">
                Thank you for reaching out to La Isla Concierge. An executive lifestyle associate will contact you on your registered email address shortly.
              </p>
              <button
                onClick={() => setShowContactSuccess(false)}
                className="w-full py-2 bg-gold hover:bg-gold-dark text-neutral-950 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
              >
                RETURN TO LOBBY
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. AVAILABILITY SEARCH: IN DEVELOPMENT NOTICE */}
      <AnimatePresence>
        {showAvailabilityNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-sm bg-neutral-900 border border-neutral-800 text-neutral-100 p-6 text-center shadow-2xl"
            >
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <h4 className="text-lg font-serif tracking-widest uppercase text-white mb-2">
                IN DEVELOPMENT
              </h4>
              <p className="text-xs text-neutral-300 font-sans font-light leading-relaxed mb-6">
                Online availability search is coming soon. In the meantime, please reach out to our team directly and we'll be happy to check availability for you.
              </p>
              <button
                onClick={() => setShowAvailabilityNotice(false)}
                className="w-full py-2 bg-gold hover:bg-gold-dark text-neutral-950 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
              >
                CLOSE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
