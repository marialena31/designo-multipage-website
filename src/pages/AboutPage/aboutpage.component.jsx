import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './aboutpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";

const AboutPage = () => {
    return (
        <div className="page">
            <Header />
            <EntetePage/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default AboutPage;