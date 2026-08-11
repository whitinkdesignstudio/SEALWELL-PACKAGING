export const whatsappLink =
  "https://wa.me/919898866610?text=Hello%20Sealwell%20Packaging%2C%20I%20would%20like%20to%20enquire%20about%20flip-off%20seals.";

export const contact = {
  phone: "+91 98988 66610",
  phoneRaw: "919898866610",
  email: "sealwellpack@gmail.com",
  address: "Road No. 13, Shed No. 390, Gopal Charan Industrial Hub, Kunjad–Bakrol Road, Ahmedabad, Gujarat",
  map: "https://www.google.com/maps?q=22.9917082,72.7410283",
};

export const products = [
  {
    slug: "13-mm",
    name: "13 mm Flip-Off Seal",
    short: "Designed for pharmaceutical vials requiring a compact and reliable closure solution.",
    image: "/assets/13mm-flip-off-seal.png",
    imageAlt: "13 mm flip-off seal samples",
    specs: [
      ["Overall diameter", "14.90 mm"],
      ["Inner diameter", "13.34 mm"],
      ["Outer height", "8.50 mm"],
      ["Inner height", "6.60 mm"],
    ],
  },
  {
    slug: "20-mm",
    name: "20 mm Flip-Off Seal",
    short: "Designed for larger pharmaceutical vials, providing a secure, consistent, and visually clean closure solution.",
    image: "/assets/20mm-flip-off-seal.png",
    imageAlt: "20 mm red flip-off seal samples",
    specs: [
      ["Overall diameter", "22.25 mm"],
      ["Inner diameter", "20.30 mm"],
      ["Outer height", "9.10 mm"],
      ["Inner height", "7.50 mm"],
    ],
  },
] as const;

export const colours = [
  ["SW01", "Super White", "#f4f1e8"], ["SW02", "Ivory", "#e9dfb4"],
  ["SW03", "Light Grey", "#b8c1bd"], ["SW04", "Special Black", "#20252c"],
  ["SW05", "Coffee Brown", "#473d3b"], ["SW06", "Bright Pink", "#c93165"],
  ["SW07", "Rose Pink", "#cf3d86"], ["SW08", "Baby Pink", "#e9a39a"],
  ["SW09", "Chocolate Brown", "#815146"], ["SW10", "Dark Jute Brown", "#8a6940"],
  ["SW11", "Red", "#c7393d"], ["SW12", "Super Orange", "#eb4b08"],
  ["SW13", "Bright Orange", "#ee7207"], ["SW14", "Golden Yellow", "#e9a50d"],
  ["SW15", "Lemon Yellow", "#efd30c"], ["SW16", "Navy Blue", "#232638"],
  ["SW17", "Dark Blue", "#303d94"], ["SW18", "Super Blue", "#2353ae"],
  ["SW19", "Light Blue", "#08a9c7"], ["SW20", "Super Violet", "#614095"],
  ["SW21", "Dark Green", "#17683f"], ["SW22", "Parrot Green", "#1e9b53"],
  ["SW23", "Apple Green", "#64bf35"], ["SW24", "Reliance Green", "#089779"],
  ["SW25", "Rama Green", "#0082a0"],
] as const;

