import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Frage und Antwort App
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/questions">Fragen</Button>
                <Button color="inherit" component={Link} to="/answers">Antworten</Button>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;
