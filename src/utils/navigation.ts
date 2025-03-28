// An array of links for navigation bar
const navBarLinks = [
  { name: "Início", url: "/" },
  { name: "Obras Concluídas", url: "/obras" },
  { name: "Serviços", url: "/servicos" },
  { name: "Blog", url: "/blog" },
  { name: "Contato", url: "/contato" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Informações",
    links: [
      { name: "Obras Concluídas", url: "/obras" },
      { name: "Serviços", url: "/servicos" },
      { name: "Contato", url: "/contato" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/maridoaluguelgarcia/",
  whastapp: "http://wa.me/+5504199843157",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};