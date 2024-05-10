import React, { createContext } from "react";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebEditor from "./WebEditor/WebEditor";
import Home from "./Home";
import Inbox from "./Inbox/Inbox";
import UserControl from "./UserControl/UserControl";
import Insights from "./Insights/Insights";

export const currentItemStateProvide = createContext();

const Dashboard = () => {

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <Router>
                <Header />
                <Routes>
                    <Route path="/insights" exact Component={Insights} />
                    <Route path="/inbox" exact Component={Inbox} />
                    <Route path="/usercontrol" exact Component={UserControl} />
                    <Route path="/webeditor" exact Component={WebEditor}/>
                    <Route path="/" exact Component={Home} />
                </Routes>
            </Router>
        </div>
    );
};

export default Dashboard;