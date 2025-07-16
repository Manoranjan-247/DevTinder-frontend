import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from '@mui/material';
import axios from 'axios';
const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      if (isSignup) {
        console.log("Signup:", formData);
        // Call signup API
      } else {
        console.log("Login:", {
          email: formData.email,
          password: formData.password,
        });
        const emailId = formData.email;
        const password = formData.password;
        // Call login API
        axios.post("http://localhost:7777/login", { emailId, password },{withCredentials: true})
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 350,
          backgroundColor: '#1e1e1e',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" align="center" color="white" fontWeight="bold">
          {isSignup ? 'Sign Up' : 'Login'}
        </Typography>

        {isSignup && (
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            sx={textFieldStyle}
          />
        )}

        <TextField
          label="Email ID"
          name="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          sx={textFieldStyle}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          sx={textFieldStyle}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 1,
            bgcolor: '#6366f1',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#4f46e5',
            },
          }}
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </Button>

        <Typography variant="body2" align="center" sx={{ color: '#bbb', mt: 1 }}>
          {isSignup ? (
            <>
              Already have an account?{' '}
              <Link
                component="button"
                onClick={() => setIsSignup(false)}
                sx={{ color: '#6366f1', textDecoration: 'none' }}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              New user?{' '}
              <Link
                component="button"
                onClick={() => setIsSignup(true)}
                sx={{ color: '#6366f1', textDecoration: 'none' }}
              >
                Sign up
              </Link>
            </>
          )}
        </Typography>
      </Paper>
    </Box>
  );
};

// TextField MUI styling for dark mode
const textFieldStyle = {
  '& .MuiInputBase-input': { color: 'white' },
  '& .MuiInputLabel-root': { color: '#bbb' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: '#555' },
    '&:hover fieldset': { borderColor: '#888' },
    '&.Mui-focused fieldset': { borderColor: '#6366f1' },
  },
};

export default Login;
