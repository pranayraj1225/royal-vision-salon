import skinFacialImg from './assets/images/regenerated_image_1789039245539.jpg';
import nailsHandsImg from './assets/images/regenerated_image_1789039265742.jpg';
import makeupImg from './assets/images/regenerated_image_1789039289104.jpg';

export const reviews = [
  {
    id: 1,
    text: "Excellent service and good customer services best receiving..",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    id: 2,
    text: "Value for money, good infrastructure, warm reception, good hygiene.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    id: 3,
    text: "This was a last minute decision as I wanted to get a quick facial done and I was super impressed. Pavni did a great job and recommended the facial type based on my skin type. I am happy with the results and will again visit them for a different service.",
    author: "Priyanka Ray",
    rating: 5,
  },
  {
    id: 4,
    text: "I went to get my hair cut done here during closing time and I was extremely impressed with the patience and attention to detail by the hair dresser. I didn't see any signs of impatience nor did I notice any rush in trying to get the hair cut.",
    author: "Dugyala Ashritha",
    rating: 5,
  },
  {
    id: 5,
    text: "My mom and I went here for a pedicure and facial, the service was excellent, and the staff were incredibly patient.",
    author: "Sanjana Erravelli",
    rating: 5,
  }
];

export const services = [
  {
    category: "HAIR",
    description: "Refresh your look with professional styling and attentive service.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    items: [
      "Haircuts",
      "Hair Styling",
      "Hair Spa",
      "Hair Care"
    ]
  },
  {
    category: "SKIN & FACIAL",
    description: "Treat your skin with services selected according to your needs.",
    image: skinFacialImg,
    items: [
      "Facials",
      "De-Tan / Skin Care",
      "Personalized Facial Recommendations",
      "Beauty Treatments"
    ]
  },
  {
    category: "NAILS & HANDS",
    description: "Relaxing nail and foot care with attention to detail.",
    image: nailsHandsImg,
    items: [
      "Manicure",
      "Pedicure",
      "Nail Care"
    ]
  },
  {
    category: "MAKEUP",
    description: "Complete your look with professional makeup services.",
    image: makeupImg,
    items: [
      "Makeup Services",
      "Occasion Makeup"
    ]
  }
];
