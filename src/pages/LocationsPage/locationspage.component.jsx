import React from "react";
import { useLocation } from 'react-router-dom';


import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './locationspage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";

const LocationsPage = ({currentPage, setCurrentPage}) => {
    const location = useLocation();
    React.useEffect(() => {
        const page = location.pathname === '/' ? 'home' : location.pathname;
        setCurrentPage(page)
    }, [location])

    return (
        <div className="page">
            <Header />
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default LocationsPage;