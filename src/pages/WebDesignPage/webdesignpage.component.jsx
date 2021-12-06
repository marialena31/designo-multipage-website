import React from "react";
import { useLocation } from 'react-router-dom';

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './webdesignpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import { LinkCardBlocAppGraph } from "../../components/link-card-bloc/link-card-bloc.component"

const WebDesignPage = ({currentPage, setCurrentPage}) => {
    const location = useLocation();
    React.useEffect(() => {
        const page = location.pathname === '/' ? 'home' : location.pathname;
        setCurrentPage(page)
    }, [location])

    return (
        <div className="page">
            <Header />
            <EntetePage currentPage={currentPage}/>
            <LinkCardBlocAppGraph/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default WebDesignPage;