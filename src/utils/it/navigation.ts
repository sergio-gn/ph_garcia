
const navBarLinks = [
  { name: "Accueil", url: "/it" },
  { name: "Produits", url: "/it/products" },
  { name: "Services", url: "/it/services" },
  { name: "Blog", url: "/it/blog" },
  { name: "Contact", url: "/it/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/it/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/it/products" },
      { name: "Services de Construction", url: "/it/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/it/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/maridoaluguelgarcia/",
  whatsapp: "http://wa.me/+5504199843157",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};