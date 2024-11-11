import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Grid, Typography, Card, CardContent, Container, AppBar, Tabs, Tab, Toolbar, Box, Menu, MenuItem } from '@mui/material';
import AboutUs from './AboutUs'; 
import ContactUs from './ContactUs'; 
import Footer from './Footer'; 
import GettingStarted from './GettingStarted'; 
import Documentation from './Documentation'; 
import Blog from './Blog';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import './App.css'; 

const iconStyle = {
  color: 'black',
  transition: 'color 0.3s',
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


const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleResourcesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleResourcesClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div>
        <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000', 
          boxShadow: 'none', 'padding':'1em' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={require('./logo-colored.png')} alt="Logo" style={{ height: '40px', marginRight: '1em' }} />
              <Typography 
                variant="h4" 
                style={{ textDecoration: 'none', color: 'inherit' }} 
                component={Link} 
                to="/"
              >
                Astraegis
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Tabs value={0} centered style={{ boxShadow: 'none' }} TabIndicatorProps={{ style: { display: 'none' } }}>
                <Tab label="About" component={Link} to="/about" style={{ color: 'black',  }} />
                <Tab label="Resources" style={{ color: 'black',  }} onClick={handleResourcesClick} />
                {/*<Tab label="Blog" component={Link} to="/blog" style={{ color: 'black' }} />*/}
                <Tab label="Contact" component={Link} to="/contact" style={{ color: 'black' }} />
              </Tabs>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleResourcesClose}
              >
                <MenuItem component={Link} to="/getting-started" onClick={handleResourcesClose}>Getting Started</MenuItem>
                <MenuItem component={Link} to="/documentation" onClick={handleResourcesClose}>Documentation</MenuItem>
              </Menu>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" className="primary-button">
                Try Demo
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={
            <>

              {/* Hero Section */}
              <section style={{ padding: '0', height:'100vh', display: 'flex', alignItems: 'center' }}>
                <Container>
                  <Grid container spacing={3} alignItems="center" style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold' }}>
                        Restrict your AI Agents.
                      </Typography>
                      <Typography variant="h5" paragraph style={{ marginBottom: '1em' }}>
                        Protect your data and control access to shared resources with our advanced AI security platform tailored to your business needs.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img src={require('./main.png')} alt="Main" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                  </Grid>
                </Container>
              </section>

              {/* Features Section */}
              <section className='sectionStyle' style={{ backgroundColor: 'var(--secondary-bg-color)', height:'100vh', display: 'flex', alignItems: 'center' }}>
                <Container>
                  <Grid container spacing={4} style={{ paddingLeft: '2em', paddingRight: '2em' }}>
                    <Grid item xs={12} md={4}>
                      <Card style={cardStyle}>
                        <CardContent>
                          <Typography variant="h4">AI to monitor AI </Typography>
                          <Typography variant="body6" style={{ fontSize: '1rem' }}>Leverage AI to enhance your security measures and protect your data. Protect your models from prompt injection attacks</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card style={cardStyle}>
                        <CardContent>
                          <Typography variant="h4">Access Control</Typography>
                          <Typography variant="body6" style={{ fontSize: '1rem' }}>Manage and seamlessly restrict your AI systems from accessing restricted resources.</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card style={cardStyle}>
                        <CardContent>
                          <Typography variant="h4">Data Masking</Typography>
                          <Typography variant="body6" style={{ fontSize: '1rem' }}>Ensure your sensitive data is safe and your PII remains within your organization with our comprehensive protection solutions.</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </section>


              <Container>
              <Typography  mt={10} variant="h2" justifyContent='center' gutterBottom>
                          A Firewall for your Agents
                      </Typography>
              <Grid item xs={12} md={6} mb={10}>
                      <img src={require('./screenshot3.png')} alt="Why Choose Us" style={{ width: '100%', height: 'auto' }} />
              </Grid>
              </Container>
              
              {/* Why Choose Us Section */}
              <section style={{ padding: '5em 0',  height:'100vh', backgroundColor: '#000', display: 'flex', alignItems: 'center' }}>
                <Container>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4" gutterBottom style={{ color: '#fff' }}>
                        Why Choose Us?
                      </Typography>
                      <Typography variant="body1" paragraph style={{ color: '#fff' }}>
                        Our platform offers unparalleled security features that ensure your data is always protected. With our advanced AI monitoring and access control, you can rest assured that your sensitive information is safe.
                      </Typography>
                      <Typography variant="body1" paragraph style={{ color: '#fff' }}>
                        Join the many businesses that trust us to safeguard their data and provide them with the tools they need to manage their AI systems effectively.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                          <Card style={{ borderRadius: '15px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#311B92' }}>
                            <CardContent>
                              <Typography variant="h5" style={{ color: '#fff' }}>Competitive Pricing</Typography>
                              <Typography variant="body2" style={{ color: '#fff' }}>We offer competitive pricing plans that fit businesses of all sizes. Our flexible pricing ensures you get the best value for your investment.</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Card style={{ borderRadius: '15px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#4A148C' }}>
                            <CardContent>
                              <Typography variant="h5" style={{ color: '#fff' }}>Custom Integrations</Typography>
                              <Typography variant="body2" style={{ color: '#fff' }}>Our platform supports custom integrations to meet your specific needs. We work closely with you to ensure seamless integration with your existing systems.</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Card style={{ borderRadius: '15px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#4A148C' }}>
                            <CardContent>
                              <Typography variant="h5" style={{ color: '#fff' }}>Highly Scalable</Typography>
                              <Typography variant="body2" style={{ color: '#fff' }}>Our architecture is highly scalable to grow with your business. Whether you're a small startup or a large enterprise, our platform can handle your needs.</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Card style={{ borderRadius: '15px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#311B92' }}>
                            <CardContent>
                              <Typography variant="h5" style={{ color: '#fff' }}>24/7 Support</Typography>
                              <Typography variant="body2" style={{ color: '#fff' }}>We provide 24/7 support to ensure your operations run smoothly. Our dedicated support team is always available to assist you with any issues.</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </section>


              {/* Our Mission */}
              <section style={{ padding: '5em 0',  height:'100vh', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center' }}>
                <Container>
                  <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4" gutterBottom>
                        Our Mission
                      </Typography>
                      <Typography variant="body5" paragraph>
                        At Astraegis, our mission is to provide top-notch AI security solutions that empower businesses to protect their data and control access to their resources. We are committed to innovation and excellence in AI security.
                      </Typography>
                      <Typography variant="body5" paragraph>
                        We believe in a future where AI can be used safely and responsibly, and we are dedicated to making that future a reality.
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </section>

              {/* CTA Section */}
              <section style={{ padding: '5em 0',  height:'100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
                <Container>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4" gutterBottom>
                        Take the next step
                      </Typography>
                      <Typography variant="h2" gutterBottom>
                        Ready when you are.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        Sign up for our platform and start protecting your data today.
                      </Typography>
                      <Button variant="contained" className="primary-button" component={Link} to="/getting-started">
                        Get Started
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img src={require('./cta.png')} alt="CTA" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                  </Grid>
                </Container>
              </section>

              {/* Footer Section */}
              <Footer />
            </>
          } />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
