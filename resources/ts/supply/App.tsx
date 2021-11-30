import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/system/Box";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../common/auth/AuthContext";
import theme from "../theme";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import { Footer } from "./footer/Footer";
import { Home } from "./home";
import { Navbar } from "./navbar";
import { NotFound } from "./not-found";
import Settings from "./users/Settings";

export function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Navbar />

                        <Box flex={1}>
                            <Routes>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/register">
                                    <Register />
                                </Route>
                                <Route path="/email/verify">
                                    <VerifyEmail />
                                </Route>

                                <Route path="/settings">
                                    <Settings />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                                <Route>
                                    <NotFound />
                                </Route>
                            </Routes>
                        </Box>

                        <Footer />
                    </Box>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}
