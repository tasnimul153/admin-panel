import React, { useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Item = ({ name, urlName, icon }) => {
    const [isActive, setIsActive] = React.useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const simulateOperation = (e) => {
        e.preventDefault();
        navigate(`/${urlName}`);
    }


    useEffect(() => {
        setIsActive(location.pathname === "/"+urlName);
    }, [location.pathname, urlName]);

    //const isActive = location.pathname === urlName;

    return (
        <a href="#" className={` ${isActive ? 'mm-active' : ''}`} style={{
            textDecoration: "none",
        }} onClick={simulateOperation}>
            <i className={icon}></i> {name}
        </a>
    );
};

export default Item;