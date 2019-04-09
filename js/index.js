const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};


//************* Navigation *****************
const navAs = Array.from(document.querySelectorAll(" header a"));
let logo = document.getElementById("logo-img");

navAs.map(function (anchor, index) {
  return anchor.textContent = Object.values(siteContent.nav)[index];
});

logo.src = siteContent.nav["img-src"];

//************* CTA *****************
const ctaH1 = document.querySelector(".cta h1").textContent = siteContent.cta["h1"];
const ctaButton = document.querySelector(".cta button").textContent = siteContent.cta["button"];
const ctaImg = document.querySelector("#cta-img").src = siteContent.cta["img-src"];

//************* Main Content *****************
const featuresH4 = document.querySelectorAll(".top-content h4")[0].textContent = siteContent["main-content"]["features-h4"];
const featuresContent = document.querySelectorAll(".top-content p")[0].textContent = siteContent["main-content"]["features-content"];
const aboutH4 = document.querySelectorAll(".top-content h4")[1].textContent = siteContent["main-content"]["about-h4"];
const aboutContent = document.querySelectorAll(".top-content p")[1].textContent = siteContent["main-content"]["about-content"];
const middleImgSrc = document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];
const servicesH4 = document.querySelectorAll(".bottom-content h4")[0].textContent = siteContent["main-content"]["services-h4"];
const servicesContent = document.querySelectorAll(".bottom-content p")[0].textContent = siteContent["main-content"]["services-content"];
const productH4 = document.querySelectorAll(".bottom-content h4")[1].textContent = siteContent["main-content"]["product-h4"];
const productContent = document.querySelectorAll(".bottom-content p")[1].textContent = siteContent["main-content"]["product-content"];
const visionH4 = document.querySelectorAll(".bottom-content h4")[2].textContent = siteContent["main-content"]["vision-h4"];
const visionContent = document.querySelectorAll(".bottom-content p")[2].textContent = siteContent["main-content"]["vision-content"];

//************* Contact *****************
const contact = Array.from(document.querySelectorAll(".contact h4, .contact p"));

contact.map((element, index) => element.textContent = Object.values(siteContent.contact)[index]);

//************* Footer *****************
const copyright = document.querySelector("footer p").textContent = siteContent.footer["copyright"];

//************* Task 3 *****************

navAs.map(anchor => anchor.style.color = "green");

const nav = document.querySelector("nav");

const firstA = document.createElement("a");
firstA.textContent = "Content";

const secondA = document.createElement("a");
secondA.textContent = "Map";

nav.appendChild(firstA);
nav.prepend(secondA);