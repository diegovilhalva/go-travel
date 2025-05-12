import {
  type NavigationLink,
  HeroBenefit,
  Step,
  Service,
  Testimonial,
  FooterCol,
  FooterSocials,
  BlogPost,
  Location,
} from "./contentTypes";

import Booking from "../components/Icons/Booking";
import Airplane from "../components/Icons/Airplane";
import Guide from "../components/Icons/Guide";
import Box from "../components/Icons/Box";
import Culinary from "../components/Icons/Culinary";
import Destination from "../components/Icons/Destination";
import Linkedin from "../components/Icons/Linkedin";
import Instagram from "../components/Icons/Instagram";
import WhatsApp from "../components/Icons/WhatsApp";
import Phone from "../components/Icons/Phone";
import Email from "../components/Icons/Email";
import { Location as LocationIcon } from "../components/Icons/Location";

const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    href: "/",
    text: "Home",
    dropdown: false,
  },
  {
    id: 2,
    href: "/about",
    text: "About",
    dropdown: false,
  },
  {
    id: 3,
    href: "/services",
    text: "Services",
    dropdown: true,
    dropdownLinks: [
      {
        id: 1,
        href: "/culinaryTours",
        text: "Culinary Tours",
        dropdown: false,
      },
      {
        id: 2,
        href: "/destinationExpertise",
        text: "Destination Expertise",
        dropdown: false,
      },
      {
        id: 3,
        href: "/customizedPackages",
        text: "Customized Packages",
        dropdown: false,
      },
    ],
  },
  {
    id: 4,
    href: "/pages",
    text: "Pages",
    dropdown: true,
    dropdownLinks: [
      {
        id: 1,
        href: "/privacyPolicy",
        text: "Privacy Policy",
        dropdown: false,
      },
      {
        id: 2,
        href: "/aboutCompany",
        text: "About Company",
        dropdown: false,
      },
      {
        id: 3,
        href: "/paymentGateway",
        text: "Payment Gateway",
        dropdown: false,
      },
      {
        id: 4,
        href: "/termsConditions",
        text: "Terms & Conditions",
        dropdown: false,
      },
    ],
  },
  {
    id: 5,
    href: "/testimonials",
    text: "Testimonials",
    dropdown: false,
  },
];

const heroBenefits: HeroBenefit[] = [
  {
    id: 1,
    Icon: Booking,
    heading: "Easy Booking",
    description: "Your hassle-free solution for convenient.",
  },
  {
    id: 2,
    Icon: Airplane,
    heading: "Airport Pickup",
    description: "Offers a reliable and convenient transportation service.",
  },
  {
    id: 3,
    Icon: Guide,
    heading: "Best Guide",
    description: "trusted companion for exploring new destinations.",
  },
];

const steps: Step[] = [
  {
    id: 1,
    heading: "Reignite those travel tastebuds",
    description:
      "Embark on a gastronomic adventure  that transports you to distant lands, where every dish tells a story.",
  },
  {
    id: 2,
    heading: "Get back to nature by travel",
    description:
      "Escape the hustle and bustle of daily life and reconnect with the serene beauty of the natural.",
  },
  {
    id: 3,
    heading: "Find trips that fit your freedom",
    description:
      "Embark on a gastronomic adventure  that transports you to distant lands, where every dish tells a story.",
  },
];

const services: Service[] = [
  {
    id: 1,
    Icon: Box,
    heading: "Customized Packages",
    description:
      "Explore our range of customizable travel packages tailored to your budget and preferences.",
  },
  {
    id: 2,
    Icon: Culinary,
    heading: "Culinary Tours",
    description:
      "Indulge in culinary delights from around the world with our curated food and wine tours.",
  },
  {
    id: 3,
    Icon: Destination,
    heading: "Destination Expertise",
    description:
      "Benefit from our extensive knowledge of destinations worldwide for informed travel decisions.",
  },
];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    img: "/blogs/aroundTheGlobe.webp",
    alt: "An arial image of 4 small islands near a shoreline with 2 boats passing between them.",
    date: "Nov 19, 2024",
    title: "Stories from Around the Globe",
    summary:
      "From the bustling streets of Tokyo to the serene landscapes of  Patagonia, each story offers a glimpse into the diverse cultures,  breathtaking landscapes, and unforgettable encounters.",
  },
  {
    id: "2",
    img: "/blogs/hiddenGems.webp",
    alt: "An arial shot of bungalows on the water in the Maldives",
    date: "Dec 25, 2024",
    title: "Exploring Hidden Gems",
    summary:
      "Dive into our latest blog post as we uncover the enchanting allure of  off the beaten path destinations. From secluded beaches to quaint  villages, we guide you on a journey to discover the hidden gems waiting  to be explored.",
  },
];

const locations: Location[] = [
  {
    id: "1",
    img: "/locations/kudahuvadhoo.webp",
    alt: "An image of kudahuvadhoo in Central Province, Maldives",
    rating: 4.6,
    title: "Kudahuvadhoo",
    location: "Central Province, Maldives",
    pricePerPerson: 127,
  },
  {
    id: "2",
    img: "/locations/greatBarrierReef.webp",
    alt: "An image of Great Barrier Reef in Queensland, Australia",
    rating: 4.2,
    title: "Great Barrier Reef",
    location: "Queensland, Australia",
    pricePerPerson: 149,
  },
  {
    id: "3",
    img: "/locations/sonevaSecret.webp",
    alt: "An image of Soneva Secret in Makunudhoo, Maldives",
    rating: 4.5,
    title: "Soneva Secret",
    location: "Makunudhoo, Maldives",
    pricePerPerson: 152,
  },
  {
    id: "4",
    img: "/locations/navagioBay.webp",
    alt: "An image of Navagio Bay in Zakynthos, Greece",
    rating: 4.1,
    title: "Navagio Bay",
    location: "Zakynthos, Greece",
    pricePerPerson: 137,
  },
  {
    id: "5",
    img: "/locations/grandAnse.webp",
    alt: "An image of Grand Anse in Grenada, Caribbean",
    rating: 4.9,
    title: "Grand Anse",
    location: "Grenada, Caribbean",
    pricePerPerson: 102,
  },
  {
    id: "6",
    img: "/locations/zakynthos.webp",
    alt: "An image of Zakynthos in Keri, Greece",
    rating: 4.4,
    title: "Zakynthos",
    location: "Keri, Greece",
    pricePerPerson: 191,
  },
  {
    id: "7",
    img: "/locations/sonevaJani.webp",
    alt: "An image of Soneva Jani in Noonu Atoll, Maldives",
    rating: 4.9,
    title: "Soneva Jani",
    location: "Noonu Atoll, Maldives",
    pricePerPerson: 340,
  },
  {
    id: "8",
    img: "/locations/fourSeasons.webp",
    alt: "An image of Four Seasons in Motu Tehotu, Bora Bora",
    rating: 4.3,
    title: "Four Seasons",
    location: "Motu Tehotu, Bora Bora",
    pricePerPerson: 235,
  },
  {
    id: "9",
    img: "/locations/nusaPenida.webp",
    alt: "An image of Nusa Penida in Bali, Indonesia",
    rating: 4.2,
    title: "Nusa Penida",
    location: "Bali, Indonesia",
    pricePerPerson: 235,
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    img: "/headshots/linh.webp",
    alt: "Headshot of a customer named Linh Chuong",
    name: "Linh Chuong",
    description:
      "Our experience with GoTravel has been nothing short of exceptional. We were able to find & book our annual vacation to Thailand in under an hour! ",
    vacation: "Trip to Thialand",
  },
  {
    id: 2,
    name: "Alex Johnson",
    alt: "Headshot of a customer named Alex Johnson",
    img: "/headshots/alex.webp",
    description:
      "I booked a 2 week vacation to the Maldives for me and my fiance with GoTravel. Very fair price and stunning resort. Felt amazing to unwind and get away!",
    vacation: "Maldives Getaway",
  },
];

const footerCols: FooterCol[] = [
  {
    id: 1,
    heading: "Menu",
    links: [
      { id: 1, href: "#", name: "Blog" },
      { id: 2, href: "#", name: "Explore" },
      { id: 3, href: "#", name: "VIP Program" },
      { id: 4, href: "#", name: "Testimonials" },
    ],
  },
  {
    id: 2,
    heading: "Services",
    links: [
      { id: 1, href: "#", name: "Culinary" },
      { id: 2, href: "#", name: "Location" },
      { id: 3, href: "#", name: "Destination" },
      { id: 4, href: "#", name: "Customizes" },
    ],
  },
  {
    id: 3,
    heading: "Extra",
    links: [
      { id: 1, href: "#", name: "Privacy Policy" },
      { id: 2, href: "#", name: "About Company" },
      { id: 3, href: "#", name: "Payment Gateway" },
      { id: 4, href: "#", name: "Terms & Conditions" },
    ],
  },
  {
    id: 4,
    heading: "Contact Information",
    links: [
      { id: 1, href: "#", Icon: Phone, name: "1 248 416 6573" },
      { id: 2, href: "#", Icon: Email, name: "gotravel@gmail.com" },
      { id: 3, href: "#", Icon: LocationIcon, name: "25 East 29th Street, NY" },
    ],
  },
];

const footerSocials: FooterSocials[] = [
  {
    id: 1,
    alt: "LinkedIn Logo Link",
    href: "https://www.linkedin.com",
    Icon: Linkedin,
  },
  {
    id: 2,
    alt: "Instagram Logo Link",
    href: "https://www.instagram.com",
    Icon: Instagram,
  },
  {
    id: 3,
    alt: "WhatsApp Logo Link",
    href: "https://www.whatsapp.com",
    Icon: WhatsApp,
  },
];

export {
  navigationLinks,
  heroBenefits,
  steps,
  services,
  blogPosts,
  locations,
  testimonials,
  footerSocials,
  footerCols,
};

// BLOG POSTS CSV

// img_url,date_created,article_title,article_summary,img_alt
// some_url,2024-11-19,Stories from Around the Globe,"From the bustling streets of Tokyo to the serene landscapes of  Patagonia, each story offers a glimpse into the diverse cultures, breathtaking landscapes, and unforgettable encounters.",An arial image of 4 small islands near a shoreline with 2 boats passing between them.
// some_url,2024-12-25,Exploring Hidden Gems,"Dive into our latest blog post as we uncover the enchanting allure of  off the beaten path destinations. From secluded beaches to quaint  villages, we guide you on a journey to discover the hidden gems waiting  to be explored.",An arial shot of bungalows on the water in the Maldives

// LOCATION CARDS CSV

// img_url,rating,title,location,price_per_person,img_alt
// some_url,4.2,Nusa Penida,"Bali, Indonesia",235,"An image of Nusa Penida in Bali, Indonesia"
// some_url,4.5,Soneva Secret,"Makunudhoo, Maldives",152,"An image of Soneva Secret in Makunudhoo, Maldives"
// some_url,4.9,Grand Anse,"Grenada, Caribbean",102,"An image of Grand Anse in Grenada, Caribbean"
// some_url,4.9,Soneva Jani,"Noonu Atoll, Maldives",340,"An image of Soneva Jani in Noonu Atoll, Maldives"
// some_url,4.2,Great Barrier Reef,"Queensland, Australia",149,"An image of Great Barrier Reef in Queensland, Australia"
// some_url,4.3,Four Seasons,"Motu Tehotu, Bora Bora",235,"An image of Four Seasons in Motu Tehotu, Bora Bora"
// some_url,4.6,Kudahuvadhoo,"Central Province, Maldives",127,"An image of kudahuvadhoo in Central Province, Maldives"
// some_url,4.1,Navagio Bay,"Zakynthos, Greece",137,"An image of Navagio Bay in Zakynthos, Greece"
// some_url,4.4,Zakynthos,"Keri, Greece",191,"An image of Zakynthos in Keri, Greece"
