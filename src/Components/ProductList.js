import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, CardActions, Fade, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Use the Unstable Grid component if you're on MUI 5
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";



const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is an awesome product',
        price: '$20',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 1
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This product is even better',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 3
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Top quality and affordable',
        price: '$50',
        image: './1-2.png',
        rating: 2
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 2,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 1
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 4
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 2
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 0,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 1
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 2,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 3,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Get it before it’s gone',
        price: '$65',
        imageUrl: 'https://via.placeholder.com/150',
        rating: 5,
    },
];

const ProductList = () => {
    return (

        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid
                alignItems="center"
                justifyContent="center" container spacing={1}>
                {products.map((product) => (
                    <Grid container spacing={2} xs={12} sm={6} md={4} lg={4} key={product.id}>
                        <Fade in="true">

                            <Card sx={{}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src={require('./1-2.png')}
                                    alt={product.name}
                                    loading="lazy"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                        {product.price}
                                    </Typography>
                                    <Rating name="customized-10" defaultValue={0} value={product.rating} max={5} />
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Add to Cart
                                    </Button>
                                    <Link to="products">

                                        <Button size="small" color="secondary">
                                            View Details
                                        </Button>
                                    </Link>
                                    <IconButton

                                        sx={{
                                            "--IconButton-size": "30px",
                                            "&:hover": { color: "red" }

                                        }}
                                    >
                                        <FavoriteIcon style={{

                                        }} />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductList;
