export const enteteInfos = [
    {
        page : "home",
        title : "Award-winning custom designs and digital branding solutions",
        info: "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
        buttonTitle: "Learn more",
        buttonLink: "/about",
        image: "image-hero-phone.png",
        imageBackground: "bg-pattern-hero-home.svg",
        imgBkgPosition: "right",
    },
    {
        page : "about",
        title : "About us",
        info: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.", 
        image: "image-about-hero.jpg", 
        imageBackground: "bg-pattern-hero-about-desktop.svg",    
        imgBkgPosition: "left bottom",
    },
    {
        page : "contact",
        title : "Contact us",
        info: "Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.", 
        form: "true",
        imageBackground: "bg-pattern-hero-desktop.svg",    
        imgBkgPosition: "left bottom",
    },
    {
        page : "app-design",
        title : "App design",
        info: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
        imageBackground: "bg-pattern-intro-app.svg",
        imgBkgPosition: "left -5rem center",
    },
    {
        page : "web-design",
        title : "Web design",
        info: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
        imageBackground: "bg-pattern-intro-web.svg",
        imgBkgPosition: "right",
    },
    {
        page : "graphic-design",
        title : "Graphic design",
        info: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
        imageBackground: "bg-pattern-intro-graphic.svg",
        imgBkgPosition: "left -5rem center",
    },
]

export const talkAboutInfos = [
    {
        page : "talk-about",
        title : "Let’s talk about your project",
        info: "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",
        buttonTitle: "Get in touch",
        buttonLink: "/contact",
        imageBackground: "bg-pattern-call-to-action.svg",
        imgBkgPosition: "right",
    },
]

export const cardInfos = [
    {
        link : "app-design",
        title : "App Design",
        size: "small",
        imageBackground: "image-app-design.jpg",
    },
    {
        link : "graphic-design",
        title : "Graphic Design",
        size: "small",
        imageBackground: "image-graphic-design.jpg",
    },
    {
        link : "web-design",
        title : "Web Design",
        size: "small",
        imageBackground: "image-web-design-small.jpg",
    },
    {
        link : "web-design",
        title : "Web Design",
        size: "large",
        imageBackground: "image-web-design-large.jpg",
    },
]

function getPageEnteteInfos() {
    return {enteteInfos};
}

export function getTalkAboutInfos() {
    return {talkAboutInfos};
}

export function getCardInfos() {
    return {cardInfos};
}

export default getPageEnteteInfos;