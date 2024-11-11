import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Added import

const iconStyle = {
  color: 'black',
  transition: 'color 0.3s',
  fontSize: '30px', // Increased icon size
};

const iconHoverStyle = {
  color: 'grey',
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#fff', color: '#000', padding: '20px 0' }}>
      <Container className='sectionStyle'>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" style={{ padding: '10em 0' }}>
          <Box flex="1" minWidth="200px" style={{ paddingBottom: '20px' }} display="flex" flexDirection="column">
            <Typography variant="h6" style={{ marginBottom: '10px', fontSize: '18px' }}>Product</Typography> {/* Increased text size */}
            <Typography component={Link} to="/" variant="body2" className="footer-link">Explore product</Typography>
            <Typography component={Link} to="/pricing" variant="body2" className="footer-link">Pricing</Typography>
            <Typography component={Link} to="/" variant="body2" className="footer-link">Integrations</Typography>
            <Typography component={Link} to="/" variant="body2" className="footer-link">Features</Typography>
          </Box>
          <Box flex="1" minWidth="200px" style={{ paddingBottom: '20px' }} display="flex" flexDirection="column">
            <Typography variant="h6" style={{ marginBottom: '10px', fontSize: '18px' }}>Why Astraegis</Typography> {/* Renamed section */}
            <Typography component={Link} to="/" variant="body2" className="footer-link">Analyst Reports</Typography> {/* Updated items */}
            <Typography component={Link} to="/" variant="body2" className="footer-link">Partners</Typography>
            <Typography component={Link} to="/" variant="body2" className="footer-link">Competitors</Typography>
            <Typography component={Link} to="/" variant="body2" className="footer-link">Our Customers</Typography>
          </Box>
          <Box flex="1" minWidth="200px" style={{ paddingBottom: '20px' }} display="flex" flexDirection="column">
            <Typography variant="h6" style={{ marginBottom: '10px', fontSize: '18px' }}>Resources</Typography> {/* Increased text size */}
            <Typography component={Link} to="/" variant="body2" className="footer-link">Blog</Typography> {/* Added link to blog page */}
            <Typography component={Link} to="/" variant="body2" className="footer-link">Case Studies</Typography>
            <Typography component={Link} to="/documentation" variant="body2" className="footer-link">Documentation</Typography> {/* Replaced Help with Documentation */}
          </Box>
          <Box flex="1" minWidth="200px" style={{ paddingBottom: '20px' }} display="flex" flexDirection="column">
            <Typography variant="h6" style={{ marginBottom: '10px', fontSize: '18px' }}>Company</Typography> {/* Increased text size */}
            <Typography component={Link} to="/about" variant="body2" className="footer-link">About</Typography> {/* Linked to AboutUs page */}
            <Typography component={Link} to="contact" variant="body2" className="footer-link">Careers</Typography>
            <Typography component={Link} to="/contact" variant="body2" className="footer-link">Contact Us</Typography> {/* Added Contact Us */}
          </Box>
          <Box flex="1" minWidth="200px" style={{ paddingBottom: '20px' }} display="flex" flexDirection="column">
            <Typography variant="h6" style={{ marginBottom: '10px', fontSize: '18px' }}>Follow Us</Typography> {/* Increased text size */}
            <Box display="flex" justifyContent="space-between" mt={3}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook style={iconStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = iconStyle.color} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter style={iconStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = iconStyle.color} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram style={iconStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = iconStyle.color} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedIn style={iconStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = iconStyle.color} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <YouTube style={iconStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = iconStyle.color} />
              </a>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body3">
            &copy; 2024 Astraegis. All rights reserved.
          </Typography>
          <Typography variant="body3">
            <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link> | <Link to="/termsofservice" className="footer-link">Terms of Service</Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
