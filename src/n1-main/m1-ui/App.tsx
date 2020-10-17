import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routers from "./routes/Routers";
import Header from "./header/Header";
import {Grid, ThemeProvider} from "@material-ui/core";
import Button from "./common/Button/Button";
import {theme} from "./styles/main";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Grid container justify="space-around">
                        <Grid item md={10} sm={11}>
                            <Routers/>
                            <Button color="primary" variant="contained">Click me</Button>
                        </Grid>
                    </Grid>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
