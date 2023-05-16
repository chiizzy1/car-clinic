import { people01, people02, people03, airbnb, binance, coinbase, dropbox, send, shield, star, toolsIcon, carIcon,
  diagnosticIcon,
  lastIcon,
  mechanicIcon  } from "../assets";


import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"



export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];


export const servicesContent = [
  {
    id: "service-1",
    content:
      "Identifying issues with a vehicle's systems and providing an estimate of repair costs.",
    title: "Diagnostic Services",
    icon: carIcon,
  },
  {
    id: "service-2",
    content:
      "Performing routine services like oil changes, tire rotations, and brake inspections to prevent breakdowns.",
    title: "Regular Maintenance",
    icon: diagnosticIcon,
  },
  {
    id: "service-3",
    content:
      "Fixing or replacing damaged or worn-out parts of a vehicle.",
    title: "Repair Services",
    icon: mechanicIcon,
  },
  {
    id: "service-4",
    content:
      "Repairing or replacing damaged exterior components of a vehicle.",
    title: "Bodywork Services",
    icon: lastIcon,
  },
];

export const feedback = [
  {
    id: 1,
    name: "John Smith",
    title: "Software Engineer",
    content: "I recently brought my car in for service and was extremely impressed with the quality of work and customer service. The staff was friendly and knowledgeable, and my car was fixed in no time. I highly recommend this auto workshop to anyone in need of reliable and professional service.",
    img: people02
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Teacher",
    content: "I've been taking my car to this workshop for years and have always been satisfied with their service. The staff is always friendly and takes the time to explain the work that needs to be done. I highly recommend this workshop to anyone in need of car maintenance or repairs.",
    img: people01
  },
  {
    id: 3,
    name: "David Lee",
    title: "Accountant",
    content: "I recently had my brakes replaced at this workshop and was very happy with the quality of work. The staff was very professional and the pricing was very competitive. I would definitely recommend this workshop to anyone in need of car repairs or maintenance.",
    img: people03
  },
  // {
  //   id: 4,
  //   name: "Jessica Chen",
  //   title: "Marketing Manager",
  //   content: "I brought my car in for an oil change and was very happy with the service I received. The staff was friendly and knowledgeable, and my car was ready in no time. I would definitely recommend this workshop to anyone in need of car maintenance or repairs.",
  //   img: people01
  // }
];


export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      {
        name: "Repair Services",
        link: "/",
      },
      {
        name: "Regular Maintenance",
        link: "/",
      },
      {
        name: "Diagnostic Services",
        link: "/",
      },
      {
        name: "Bodywork Services",
        link: "/",
      },
      {
        name: "AC Repair Services",
        link: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "/",
      },
      {
        name: "Contact",
        link: "/",
      },
      {
        name: "Help Center",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Newsletters",
        link: "/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of use",
        link: "/",
      },
      {
        name: "Privacy policy",
        link: "/",
      },
      {
        name: "Cookie policy",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <FaInstagram className="text-3xl text-dimPurple"/>,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <FaFacebook className="text-3xl text-dimPurple"/>,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <FaTwitter className="text-3xl text-dimPurple"/>,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <FaLinkedin className="text-3xl text-dimPurple"/>,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];


export const data = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Smith',
    },
    total: 2795.95,
    status: 'On Hold',
    method: 'PayPal',
    date: '15 Minutes ago',
  },
  {
    id: 2,
    name: {
      first: 'Chris',
      last: 'Adams',
    },
    total: 1195.95,
    status: 'Processing',
    method: 'PayPal',
    date: '23 Minutes ago',
  },
  {
    id: 3,
    name: {
      first: 'Sarah',
      last: 'Smith',
    },
    total: 495.85,
    status: 'Completed',
    method: 'Visa',
    date: '1 Hour ago',
  },
  {
    id: 4,
    name: {
      first: 'Joseph',
      last: 'Choo',
    },
    total: 150.45,
    status: 'Processing',
    method: 'MasterCard',
    date: '1 Hour ago',
  },
  {
    id: 5,
    name: {
      first: 'Steve',
      last: 'Harding',
    },
    total: 175.25,
    status: 'On Hold',
    method: 'PayPal',
    date: '2 Hour ago',
  },
  {
    id: 6,
    name: {
      first: 'Laura',
      last: 'Croft',
    },
    total: 1295.75,
    status: 'Completed',
    method: 'Check',
    date: '3 Hour ago',
  },
  {
    id: 7,
    name: {
      first: 'Michael',
      last: 'Jones',
    },
    total: 89.95,
    status: 'Completed',
    method: 'MasterCard',
    date: '3 Hour ago',
  },
  {
    id: 8,
    name: {
      first: 'James',
      last: 'Bond',
    },
    total: 689.45,
    status: 'Completed',
    method: 'Visa',
    date: '7 Hour ago',
  },
  {
    id: 9,
    name: {
      first: 'Haley',
      last: 'Whiting',
    },
    total: 14.99,
    status: 'Completed',
    method: 'PayPal',
    date: '1 Day ago',
  },
  {
    id: 10,
    name: {
      first: 'Tim',
      last: 'Thomas',
    },
    total: 218.99,
    status: 'Completed',
    method: 'MasterCard',
    date: '1 Day ago',
  },
];