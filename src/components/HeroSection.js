import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/95c9e00f-ff3d-414e-8e6b-2340033e5a0e/72a0f0c4-06cf-4a0b-b2a3-4f149b9699a8/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        paddingTop: '100px',
        paddingBottom: '200px',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h3" fontWeight="bold">
          Unlimited movies, TV shows, and more.
        </Typography>
        <Typography variant="h5" mt={2}>
          Watch anywhere. Cancel anytime.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
