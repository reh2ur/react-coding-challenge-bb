import React from 'react';
import './App.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import BreakingBadGenerator from "./challenges/BreakingBadGenerator/BreakingBadGenerator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BreakingBadGenerator/>,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
