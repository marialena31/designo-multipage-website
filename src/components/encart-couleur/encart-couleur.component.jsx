import React from "react";
import { useHistory } from 'react-router-dom';
import ButtonOnDark from "../button-on-dark/button-on-dark.component";
import { getBaseUrlMedia } from "../../utils /utils";
import ContactForm from "../contact-form/contact-form.component";

import './encart-couleur.styles.scss'

const EncartCouleur = ({data}) => {
    const history = useHistory();

    const getUrlMedia = (img) => {
        return getBaseUrlMedia() +'/'+ ((data.page === "talk-about") ? 'shared' : data.page)  +'/'+ 'desktop' +'/'+ img
    }

    const classNameSupp = data.image && data.buttonTitle ? "big-height" : (data.image || data.form)  && !data.buttonTitle ? "middle-height" : ""

    return (           
        <div className={`encart-couleur ${data.page} ${classNameSupp}`} style={{backgroundImage: `url(${getUrlMedia(data.imageBackground)})`, backgroundPosition: `${data.imgBkgPosition}`}}>
            <div className={`encart-couleur__text ${data.page} ${classNameSupp}`}>
                <h2 className={`encart-couleur__text__title ${data.page} ${classNameSupp}`}>
                    {data.title}
                </h2>
                <p  className={`encart-couleur__text__info ${data.page} ${classNameSupp}`}>{data.info}</p>
                {data.buttonTitle && data.image ? <ButtonOnDark className={`encart-couleur__text__btn ${data.page}`} title={data.buttonTitle} handleClick={() => history.push(data.buttonLink)} /> : null}
            </div>
            {data.buttonTitle && !data.image ? <ButtonOnDark className={`encart-couleur__btn ${data.page} ${classNameSupp}`}title={data.buttonTitle} handleClick={() => history.push(data.buttonLink)} /> : null}
            {data.image ?
                <div className={`encart-couleur__picture ${data.page}  ${classNameSupp}`} >
                    <img src={`${getUrlMedia(data.image)}`} className={`encart-couleur__picture__img ${data.page}  ${classNameSupp}`} alt={data.page}/>
                </div>
            : null}
            {/* {data.form ?
            <ContactForm/>
            : null} */}
        </div>
    )
}

export default EncartCouleur;