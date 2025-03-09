"use client";

import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  display: flex;
  justify-content: space-between; // Ensures items are spaced out
  align-items: center;
  padding: 20px;
  border-top: 1px solid #ccc;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #4ADE80; 
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" style={{ color: 'white' }}>
        © 2025 Tam Tran. All rights reserved.
      </Typography>
      <StyledLink to="/">
        Home
      </StyledLink>
    </FooterContainer>
  );
};

export default Footer;
