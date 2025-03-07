import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { config } from "./Config";
import { PublicClientApplication } from "@azure/msal-browser";
import BookingPage from "./BookingPage";
import QRPage from "./qr-page";
import { Navigate } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
    };
    this.PublicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }

  async componentDidMount() {
    try {
      const response =
        await this.PublicClientApplication.handleRedirectPromise();
      if (response && response.account) {
        this.setState({
          isAuthenticated: true,
          user: response.account,
        });
      } else {
        this.login();
      }
    } catch (err) {
      console.error("MSAL error:", err);
      this.setState({ error: err });
    }
  }

  login = async () => {
    try {
      await this.PublicClientApplication.loginRedirect({
        scopes: config.scopes,
        prompt: "select_account",
      });
    } catch (err) {
      console.error("Login error:", err);
      this.setState({ isAuthenticated: false, user: {}, error: err });
    }
  };

  logout() {
    this.PublicClientApplication.logout();
  }

  render() {
    return <BookingPage />;
  }
}

export default App;
