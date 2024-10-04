// src/pages/HomePage.js
import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ProductList from './ProductList';

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
function Item(props) {
    return (
        <Card style={{ border: "none", boxShadow: "none" }}>
            <CardMedia
                component="img"
                height="400"
                src={require('./1-2.png')}
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                alt="Paella dish"
            />
        </Card>
    )
}

const HomePage = () => {
    return (
        <Container >
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <ProductList />

        </Container>
    );
};

export default HomePage;
