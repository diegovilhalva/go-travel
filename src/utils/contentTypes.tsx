import { JSX } from "react";

interface NavigationLink {
  id: number;
  href: string;
  text: string;
  dropdown: boolean;
  dropdownLinks?: NavigationLink[];
}

interface HeroBenefit {
  id: number;
  Icon: (props: { className: string }) => JSX.Element;
  heading: string;
  description: string;
}

interface Step {
  id: number;
  heading: string;
  description: string;
}

interface Service {
  id: number;
  Icon: (props: { className: string }) => JSX.Element;
  heading: string;
  description: string;
}

interface BlogPost {
  id: string;
  img: string;
  alt: string;
  date: string;
  title: string;
  summary: string;
}

interface Location {
  id: string;
  img: string;
  alt: string;
  rating: number;
  title: string;
  location: string;
  pricePerPerson: number;
}

interface Testimonial {
  id: number;
  img: string;
  alt: string;
  name: string;
  description: string;
  vacation: string;
}

interface FooterLink {
  id: number;
  href: string;
  name: string;
  Icon?: (props: { className: string }) => JSX.Element;
}

interface FooterCol {
  id: number;
  heading: string;
  links: FooterLink[];
}

interface FooterSocials {
  id: number;
  alt: string;
  href: string;
  Icon: (props: { className: string }) => JSX.Element;
}

interface Lead {
  createdAt: number;
  fullName: string;
  emailAddress: string;
}

export type {
  NavigationLink,
  HeroBenefit,
  Step,
  Service,
  BlogPost,
  Location,
  Testimonial,
  FooterCol,
  FooterSocials,
  FooterLink,
  Lead,
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
