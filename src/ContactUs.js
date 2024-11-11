import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import Footer from './Footer'; // Ensure this import is correct
import './App.css'; // Ensure this import is correct

const ContactUs = () => {
  return (
    <>
      <Container style={{'margin-top':'2em'}}>
        <Typography variant="h4" gutterBottom>
          Talk to us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="subject"
                    name="subject"
                    label="Subject"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="message"
                    name="message"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" className="primary-button">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={2}>
            
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Prefer email?
              </Typography>
              <Typography variant="body3" paragraph>
                We are here for you in every way possible. Please write directly to hi(at)astraegis(dot)com and we get back to you within one business day.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Our Office
              </Typography>
              <Typography variant="body1" paragraph>
                40 E 7th St, New York, NY 10003, USA
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer /> {/* Added Footer */}
    </>
  );
};

export default ContactUs;