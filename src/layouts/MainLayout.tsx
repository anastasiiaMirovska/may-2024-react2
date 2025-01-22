import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            Main Layout
            <Outlet/>
        </div>
    );
};

export default MainLayout;
