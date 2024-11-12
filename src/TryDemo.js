import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Footer from './Footer';

const headerStyle = {
  margin: '10px 0', // Reduce the header margin
  fontSize: '2rem', // Increase font size if needed
};

const iconStyle = {
  color: 'black',
  fontSize: '2rem', // Increase icon size
};

const iconHoverStyle = {
  color: 'grey',
  fontSize: '2rem', // Increase icon size
};

const cardStyle = {
  boxShadow: 'none',
  borderRadius: '15px',
};

const TryDemo = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleResourcesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Container>

        {/* Contact Us Section */}
        <section style={{ padding: '2em 0' }}>
          <Typography variant="h4" gutterBottom>
            Interested in a Demo?
          </Typography>
          <Typography variant="body1" paragraph>
            Please use the <a href="/contact">contact page</a> and a member of our team will reach out to you with further details.
          </Typography>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default TryDemo;