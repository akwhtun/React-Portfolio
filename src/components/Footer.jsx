import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-color plus-jakarta-sans text-color border-t border-gray-200 py-6">
      <p className="text-center text-medium tracking-wide">
        © {currentYear} <span className="font-semibold">Aung Kyaw Wai Htun</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
