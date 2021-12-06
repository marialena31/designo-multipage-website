import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './graphicdesignpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import { LinkCardBlocAppWeb } from "../../components/link-card-bloc/link-card-bloc.component"

const GraphicDesignPage = () => {
    return (
        <div className="page">
            <Header />
            <EntetePage/>
            <LinkCardBlocAppWeb/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default GraphicDesignPage;