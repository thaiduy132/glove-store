import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%', // Full width of the screen
                backgroundColor: '#f8f8f8',
                padding: { xs: '10px 0', sm: '20px 0' },
                textAlign: 'center',
                boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)', // Optional shadow for effect
            }}
        >
            <Container>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
                >
                    © 2024 Your Company. All rights reserved.
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem' }, marginTop: { xs: '5px', sm: '10px' } }}
                >
                    <Link href="/privacy-policy" color="inherit" underline="hover">
                        Privacy Policy
                    </Link>
                    {' | '}
                    <Link href="/terms-of-service" color="inherit" underline="hover">
                        Terms of Service
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
