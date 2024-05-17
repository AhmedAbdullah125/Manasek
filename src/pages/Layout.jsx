import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import icon from '../assets/ABC 16.webp'
// import Favicon from 'react-favicon';



export default function Layout() {

    // const [faviconUrl, setFaviconUrl] = useState({ icon });

    useEffect(() => {
        document.title = "Manasek Alhaj"
    }, []);
    return (
        <Outlet >
            {/* <Favicon /> */}
        </Outlet>
    )
}
