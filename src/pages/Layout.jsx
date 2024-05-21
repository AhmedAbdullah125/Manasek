import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
export default function Layout() {
    useEffect(() => {
        document.title = "Manasek Alhaj"
    }, []);
    return (
        <Outlet ></Outlet>
    )
}
