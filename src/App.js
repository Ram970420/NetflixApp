import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e50914', // Netflix red
    },
    background: {
      default: '#141414', // Dark background
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <HeroSection />
        <SignUpForm />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
