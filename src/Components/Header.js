// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';
import Container from '@mui/material/Container';
const Header = () => {
    return (
        <Container maxWidth="lg">

            <Toolbar>
                <Typography textAlign={'left'} variant="h6" style={{ flexGrow: 1 / 2 }}>
                    Gloves
                </Typography>
                <ButtonGroup style={{ flexGrow: 1 / 2 }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </ButtonGroup>

                <ButtonGroup aria-label="Basic button group">
                    <IconButton aria-label="add to shopping cart">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>

                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <Favorite />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    </IconButton>
                </ButtonGroup>
            </Toolbar>
        </Container>
    );
};

export default Header;
