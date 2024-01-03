import React from 'react'

const Footer = () =>  {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-color text-light-gray text-opacity-90 py-3 text-center">
    <p>&copy; {currentYear} Aung Kyaw Wai Htun. All Rights Reserved.</p>
  </footer>
    )

}

export default Footer;
