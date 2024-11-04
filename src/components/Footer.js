import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const footerLinks = [
  'FAQ',
  'Help Center',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
];

const Footer = () => {
  return (
    <Box py={5} bgcolor="#141414" color="#B3B3B3">
      <Container maxWidth="md">
        <Typography variant="body2" align="center" gutterBottom>
          Questions? Call 1-800-012-3456
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {footerLinks.map((link) => (
            <Grid item key={link}>
              <Link href="#" color="inherit" underline="hover">
                {link}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Typography variant="caption" display="block" align="center" mt={3}>
          © 2023 Netflix Clone
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
