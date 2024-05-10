import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const Home = () => {
    return (
        <div className="app-main">
            <Sidebar />
            <Main />
            <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
        </div>
    );
};

export default Home;