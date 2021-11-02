import React from 'react';
import './App.css';
import { DishProvider } from './DishContext';
import Main from './main';


function App() {

    return (
        <>
            <DishProvider>
                <Main/>
            </DishProvider>
        </>
    );
}

export default App;