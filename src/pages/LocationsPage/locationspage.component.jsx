import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './locationspage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";

const LocationsPage = () => {
    return (
        <div className="page">
            <Header />
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default LocationsPage;