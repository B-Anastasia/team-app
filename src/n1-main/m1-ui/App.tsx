import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from "./main/Main";
import Routers from "./routes/Routers";
import Header from "./header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routers/>
            </div>
        </BrowserRouter>
    );
}

export default App;
