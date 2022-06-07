import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from "../../pages/login";
import Fbsignup from "../../pages/signup";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signup" element={<Fbsignup/>}/>
            </Routes>
        </Router>
    );
}
