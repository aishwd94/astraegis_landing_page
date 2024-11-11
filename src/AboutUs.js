import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import Footer from './Footer'; // Ensure this import is correct

const iconStyle = {
  color: 'black',
  transition: 'color 0.3s',
};

const iconHoverStyle = {
  color: 'grey',
};

const AboutUs = () => {
  return (
    <>
      <Container style={{ minHeight: '1vh' , padding: '10vw'} }>
        <Typography variant="body1" paragraph>
          Astraegis aims to be the leading AI security, access control, and data protection platform. We help businesses safeguard their data and manage access with advanced AI-powered solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide cutting-edge security solutions that empower businesses to protect their most valuable assets. We offer a range of services, including AI-driven security, comprehensive access control, and robust data protection.
        </Typography>
        <Typography variant="body1" paragraph>
          Contact us today to learn more about how Astraegis can help secure your business.
        </Typography>
      </Container>
      <Footer /> {/* Added Footer */}
    </>
  );
};

export default AboutUs;