import React from 'react';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Footer from '../../components/Footer';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212', // Dark background
          color: '#fff', // White text color
          padding: '140px',
          marginTop: '0px'
        }
      }
    }
  }
});

const StyledButton = styled(Button)({
  backgroundColor: '#4ADE80 !important',  
  '&:hover': {
    backgroundColor: '#006400 important', 
  },
  color: '#1f1f1f !important', 
  marginTop: '20px',
  fontWeight: 'bold'
});

const RightAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #4ADE80; 
  }
`;

const CPPLibrary = () => {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        {/* Home icon linked to the About page */}
        <div style={{
          position: 'fixed',
          top: 50,
          left: 100,
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <StyledLink to="/projects">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </StyledLink>
        </div>

        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '5rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>
          Library System
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginTop: '-1.2rem', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>
          Developed
        </Typography>

        {/* Grid Layout: Left - Description | Right - Client & Technologies */}
        <Grid container spacing={4} style={{ marginTop: '20px', alignItems: 'flex-start' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                This is a group project that aims to create an online library system that provides streamlined services for students and library staff. 
                Students can look up materials, create a book borrowing order, renew, and return books through our system. 
                Meanwhile, staff can manage the book catalog and process students' orders.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700 }}>
                Collaborative Team
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '20px' }}>
                Tam Tran, Tram Tran, Vi Tran, An Nguyen, Thu Nguyen, David Lam
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 700 }}>
                Technologies
            </Typography>
            <Typography variant="body2">
                NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon
            </Typography>
          </Grid>
        </Grid>

        {/* Button */}
        <RightAlignedContainer>
            <StyledButton variant="contained" href="https://library-system-omega.vercel.app/">
                View Project
            </StyledButton>
        </RightAlignedContainer>

        <Typography variant="body1" gutterBottom component="div" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
            Below is the interface that library staff will see. Please click on 'View Project' to explore the user experience.
        </Typography>

        {/* Image */}
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/cpp-library-1.png"} 
          alt="CPPLibrary" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px' }}
        />
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/cpp-library-2.png"} 
          alt="CPPLibrary" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px' }}
        />
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/cpp-library-3.png"} 
          alt="CPPLibrary" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px' }}
        />
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/cpp-library-4.png"} 
          alt="CPPLibrary" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px' }}
        />
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/cpp-library-5.png"} 
          alt="CPPLibrary" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px' }}
        />
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/cpp-library-6.png"} 
          alt="CPPLibrary" 
          style={{ width: '100%', height: 'auto', marginTop: '40px', marginBottom: '20px' }}
        />
        <Footer />
      </ThemeProvider>
    </Container>
  );
};

export default CPPLibrary;
