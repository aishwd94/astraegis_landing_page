import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import Footer from './Footer';

const GettingStarted = () => {
  return (
    <Container>
      <Box my={5} mx={20}>
        <Typography variant="h3" gutterBottom>
          Getting Started
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the Getting Started guide. Here you will find all the information you need to start using our platform.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Step 1: Check out the Documentation
        </Typography>
        <Typography variant="body1" paragraph>
          Start by exploring the documentation. Here you can explore various features and functionalities of our platform.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Step 2: Request a Demo
        </Typography>
        <Typography variant="body1" paragraph>
          Request a demo for deploying the tool in your own environment. You can create new rules, manage your data, and utilize our tools to achieve your goals. A member of our team will reach out to you to schedule a demo.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Need Help?
        </Typography>
        <Typography variant="body1" paragraph>
          If you need any assistance, feel free to reach out to our support team. You can find the contact details on the <a href="/contact">Contact Us</a> page.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Quick Links
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="FAQs" />
            </ListItem>
            <List>
                    <ListItem>
                    <ListItemText primary="Q: How do I contact support?" secondary="A: You can contact support through the 'Contact Us' page or by emailing support at astraegis dot com" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Q: Where can I find the user guide?" secondary="A: The user guide is available in the 'User Guide' section of the website." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Q: How much does it cost?" secondary="A: Pricing information would be shared once you Contact Us and schedule a Demo." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Q: Can I upgrade my plan?" secondary="A: Yes, you can upgrade your plan at any time from the 'Account Settings' section." />
                </ListItem>
            </List>

          <ListItem>
            <ListItemText primary="Support" />
          </ListItem>
          <Typography variant="body1" paragraph>
          Our support team is here to help you with any issues or questions you may have. You can reach out to us through the 'Contact Us' page or by emailing support at astraegis dot com.
        </Typography>
        </List>
      </Box>
      <Footer />
    </Container>
  );
};

export default GettingStarted;