import React from "react";
import { useLocation } from 'react-router-dom';


import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './contactpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";

const ContactPage = () => {
    return (
        <div className="page">
            <Header />
            <EntetePage/>
            <Footer />
        </div>
    )
}

export default ContactPage;