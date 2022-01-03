import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function AuthStack() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<SignUp/>}/>
            </Routes>

        </Router>
    );
}