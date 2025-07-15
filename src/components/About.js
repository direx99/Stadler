import React from 'react';
import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';

const aboutImages = [
  'https://github.com/user-attachments/assets/36e62d0f-4a13-4a4a-bfef-f8b6c5a3fb7e',
  'https://github.com/user-attachments/assets/3e68007e-3be9-4ce5-b62a-714cfb7fd17e',
  'https://github.com/user-attachments/assets/f2287fea-8d4e-41ec-ab69-fe0062eebf79',
  'https://github.com/user-attachments/assets/f2287fea-8d4e-41ec-ab69-fe0062eebf79',
  
];

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 4, md: 8 }, background: '#f8fafc' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {aboutImages.map((img, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`About ${idx + 1}`}
                    sx={{ width: '100%', height: { xs: 140, sm: 180, md: 200 }, objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 0, md: 4 } }}>
            <Typography variant="h4" fontWeight={800} color="#2d3748" gutterBottom>
              About Stadler Hotel
            </Typography>
            <Typography variant="body1" color="#4a5568" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}>
              Stadler Hotel offers a unique blend of comfort, luxury, and convenience. Our rooms are designed to provide the utmost relaxation, and our services are tailored to meet all your needs.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About; 