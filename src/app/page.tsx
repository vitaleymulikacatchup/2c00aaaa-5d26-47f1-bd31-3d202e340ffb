"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

const components = {
    Navbar: NavbarBase,
    Hero: BillboardHero,
    About: SplitAbout,
    HowToBuy: HowToBuy3D,
    Tokenomics: NumberGridTokenomics,
    FAQ: CentralFAQ,
    Footer: FooterBase
};

const navbarLinks = [
  { name: "Hero", id: "#hero" },
  { name: "About", id: "#about" },
  { name: "How To Buy", id: "#how-to-buy" },
  { name: "Tokenomics", id: "#tokenomics" },
  { name: "FAQ", id: "#faq" },
  { name: "Footer", id: "#footer" }
];

const heroProps = {
  title: "Welcome to MemeNova",
  subtitle: "Discover the fun, community-driven token experience!",
  primaryButtonText: "Buy MemeNova"
};

const aboutProps = {
  description: "At MemeNova, we embrace a friendly and irreverent approach to building community through memes and tokens. Join us on this exciting journey!"
};

const howToBuyProps = {
  steps: [
    { title: "Step 1: Connect Wallet", description: "Link your wallet to start buying MemeNova tokens.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
    { title: "Step 2: Choose Amount", description: "Decide how many tokens you'd like to purchase.", image: "/images/placeholder2.avif", position: "right", isCenter: false },
    { title: "Step 3: Confirm Purchase", description: "Verify your choices and complete the transaction!", image: "/images/placeholder3.avif", position: "left", isCenter: false }
  ]
};

const tokenomicsProps = {
  title: "Tokenomics",
  description: "Understand the key metrics behind MemeNova. Each element plays a vital role in our community's growth and sustainability.",
  tokenData: [
    { value: "1M", description: "Total Supply" },
    { value: "50K", description: "Market Cap" },
    { value: "10%", description: "Team Allocation" },
    { value: "10%", description: "Community Rewards" },
  ]
};

const faqProps = {
  items: [
    { title: "What is MemeNova?", content: "MemeNova is a community-driven token project focusing on memes.", },
    { title: "How do I buy MemeNova?", content: "You can buy MemeNova through our platform using a crypto wallet.", },
    { title: "What makes MemeNova unique?", content: "Our community-first approach and playful engagement sets us apart!", },
    { title: "Where can I learn more?", content: "Visit our website for more details on our mission and roadmap.", }
  ]
};

const footerProps = {
  logoSrc: "/images/logo.svg",
  logoAlt: "MemeNova Logo",
  columns: [
    {
      title: "Quick Links",
      items: [
        { label: "Home", onClick: () => {} },
        { label: "About", onClick: () => {} },
        { label: "How to Buy", onClick: () => {} },
        { label: "Tokenomics", onClick: () => {} },
      ]
    },
    {
      title: "Community",
      items: [
        { label: "Social Media", onClick: () => {} },
        { label: "Support", onClick: () => {} },
        { label: "Contact", onClick: () => {} }
      ]
    },
    {
      title: "Learn More",
      items: [
        { label: "FAQ", onClick: () => {} },
        { label: "Privacy Policy", onClick: () => {} }
      ]
    }
  ],
  copyrightText: "© 2023 MemeNova. All rights reserved.",
  onPrivacyClick: () => {}
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "highlight" }}>
      <components.Navbar navItems={navbarLinks} logoSrc={footerProps.logoSrc} logoAlt={footerProps.logoAlt} buttonText="Buy MemeNova" onButtonClick={() => {}} />
      <components.Hero {...heroProps} />
      <components.About {...aboutProps} />
      <components.HowToBuy {...howToBuyProps} />
      <components.Tokenomics {...tokenomicsProps} />
      <components.FAQ {...faqProps} />
      <components.Footer {...footerProps} />
    </SiteThemeProvider>
  );
}
