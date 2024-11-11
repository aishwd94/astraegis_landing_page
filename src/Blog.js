import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Blog = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{ marginTop: '2em', fontWeight: 'bold' }}>
        Blog
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Blog Post Title 1
              </Typography>
              <Typography variant="body2">
                This is a summary of the blog post. Click to read more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Blog Post Title 2
              </Typography>
              <Typography variant="body2">
                This is a summary of the blog post. Click to read more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;