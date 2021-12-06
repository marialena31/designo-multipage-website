import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './homepage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import LinkCardBlocLarge from "../../components/link-card-bloc-large/link-card-bloc-large.component";

const HomePage = () => {
    return (
        <div className="page bck-img home">
            <Header />
            <EntetePage/>
            <LinkCardBlocLarge/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default HomePage;