import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import ReactMarkdown from 'react-markdown';
import { Grid, List, ListItem, ListItemText, Box, TextField, Card } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Documentation.css';
import documentationContent from './documentation.md';

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState('');
  const [headers, setHeaders] = useState([]);
  const [leftContainerHeight, setLeftContainerHeight] = useState(0);

  useEffect(() => {
    fetch(documentationContent)
      .then(response => response.text())
      .then(text => {
        setFilteredContent(text);
        const headers = text.split('\n').filter(line => line.startsWith('#'));
        setHeaders(headers);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      fetch(documentationContent)
        .then(response => response.text())
        .then(text => setFilteredContent(text));
    } else {
      const filtered = filteredContent
        .split('\n')
        .filter(line => line.toLowerCase().includes(searchTerm.toLowerCase()))
        .join('\n');
      setFilteredContent(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    const leftContainer = document.querySelector('.rounded-card');
    if (leftContainer) {
      setLeftContainerHeight(leftContainer.offsetHeight);
    }
  }, [headers]);

  const renderMarkdownWithElements = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('#')) {
        const id = line.replace(/#/g, '').trim().toLowerCase().replace(/\s+/g, '-');
        return (
          <Element name={id} key={index}>
            <ReactMarkdown>{line}</ReactMarkdown>
          </Element>
        );
      }
      return <ReactMarkdown key={index}>{line}</ReactMarkdown>;
    });
  };

  return (
    <div>
      <Box width="100%" style={{ padding: '1em' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={3} style={{ marginLeft: '1em', marginRight: '1em' }}>
        <Grid item xs={3} style={{ height: 'auto', padding: '1em 2em 1em 2em' }}>
          <Card className="rounded-card" style={{ backgroundColor: '#F5F5F5', padding: '5px', height: '100%' }}>
            <List>
              {headers.map((header, index) => (
                <ListItem button key={index} style={{ paddingLeft: header.startsWith('##') ? '20px' : '10px', cursor: 'pointer' }}>
                  <ScrollLink to={header.replace(/#/g, '').trim().toLowerCase().replace(/\s+/g, '-')} smooth={true} duration={500}>
                    <ListItemText primary={header.replace(/#/g, '').trim()} />
                  </ScrollLink>
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item md={9} style={{ padding: '0 5em 0 2em', height: leftContainerHeight, overflowY: 'auto' }}>
          {renderMarkdownWithElements(filteredContent)}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Documentation;