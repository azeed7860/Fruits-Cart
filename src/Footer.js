import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactIcon = styled.i`
  margin-right: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;

  a {
    margin-right: 10px;
    font-size: 1.5rem;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Heading>About Us</Heading>
          <Paragraph>
            Our fruits cart application is dedicated to providing you with the freshest and highest quality fruits delivered right to your doorstep.
          </Paragraph>
          <ContactInfo>
            <span><ContactIcon className="fas fa-phone"></ContactIcon>123-456-7890</span>
            <span><ContactIcon className="fas fa-envelope"></ContactIcon>info@fruitsapp.com</span>
          </ContactInfo>
          <SocialIcons>
            <a href="#"><i className="bi-facebook"></i></a>
            <a href="#"><i className="bi-instagram"></i></a>
            <a href="#"><i className="bi-whatsapp"></i></a>
            <a href="#"><i className="bi-twitter"></i></a>
          
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <Heading>Quick Links</Heading>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <Heading>Contact Us</Heading>
          <ContactForm onSubmit={handleSubmit}>
            <input type="email" placeholder="Your email address..." />
            <textarea placeholder="Your message..."></textarea>
            <button type="submit">Send</button>
          </ContactForm>
        </FooterSection>
      </FooterContent>
      <p style={{ textAlign: 'center' }}>© 2024 Fruits Cart Application | Azeed.Sk</p>
    </FooterContainer>
  );
}

export default Footer;
