import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const SignUpForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSignUp = () => {
    // Add sign-up logic
    console.log('Email:', email);
  };

  return (
    <Box py={5} bgcolor="#141414" color="white">
      <Container maxWidth="sm">
        <Typography variant="h6" align="center">
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Box display="flex" mt={2} gap={2}>
          <TextField
            fullWidth
            variant="filled"
            label="Email address"
            value={email}
            onChange={handleEmailChange}
            sx={{ bgcolor: 'white', borderRadius: '5px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignUp}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpForm;
