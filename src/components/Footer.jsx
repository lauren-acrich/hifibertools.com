import React from 'react';
import Avatar from './Avatar';
import LaurenImg from '../images/Lauren.jpeg';
import AdrianImg from '../images/Adrian.jpeg';
import MichaelImg from '../images/Michael.jpeg';
import MattImg from '../images/Matt.jpeg';
import MikeImg from '../images/Mike.jpeg';



const Footer = () => {
  return (
    <>
      <header className="footerHeader">Meet the Team</header>
      
      <div className="footerContainer">
        <Avatar 
          image={LaurenImg}
          name="Lauren Acrich"
          github="https://github.com/lauren-acrich"
          linkedin="https://www.linkedin.com/in/laurenacrich/"
        />
        <Avatar 
          image={AdrianImg}
          name="Adrian Karnani"
          github="https://github.com/adriangk228"
          linkedin="https://www.linkedin.com/in/adriankarnani/"
        />
        <Avatar 
          image={MichaelImg}
          name="Michael Filoramo"
          github="https://github.com/mfiloramo"
          linkedin="https://www.linkedin.com/in/michael-filoramo/"
        />
        <Avatar 
          image={MattImg}
          name="Matthew Birnholtz"
          github="https://github.com/mattbirn93"
          linkedin="https://www.linkedin.com/in/matthew-birnholtz-1b607a85/"
        />
        <Avatar 
          image={MikeImg}
          name="Mikel Giffin"
          github="https://github.com/giffinmike"
          linkedin="https://www.linkedin.com/in/mikel-giffin-69480678/"
        />
      </div>

      <div className="closingTag">
        &copy; {new Date().getFullYear()}  HiFiber is an open-source project licensed under MIT.
      </div>
    </>
  )
}

export default Footer;