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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])
//------------------------------------------------------------------------------------------
//get all navigation and set their textContent.
let navBar = document.querySelector('nav')
navBar.querySelector('a').textContent = siteContent['nav']["nav-item-1"]
navBar.querySelector('a:nth-of-type(2)').textContent = siteContent['nav']["nav-item-2"]
navBar.querySelector('a:nth-of-type(3)').textContent = siteContent['nav']["nav-item-3"]
navBar.querySelector('a:nth-of-type(4)').textContent = siteContent['nav']["nav-item-4"]
navBar.querySelector('a:nth-of-type(5)').textContent = siteContent['nav']["nav-item-5"]
navBar.querySelector('a:nth-of-type(6)').textContent = siteContent['nav']["nav-item-6"]

//getting main header(h1) and setting its text values
const mainHeader = document.querySelector('h1')
mainHeader.textContent = siteContent.cta.h1;

//setting button below 
const button = document.querySelector('button')
button.textContent = siteContent.cta.button;

//setting top image
const ctaImage = document.getElementById("cta-img")
ctaImage.src = siteContent.cta["img-src"]

//setting main content top section
const mainContentTop = document.querySelector('.top-content')
mainContentTop.querySelector('.text-content h4').textContent = siteContent['main-content']["features-h4"]
mainContentTop.querySelector('.text-content p').textContent = siteContent['main-content']["features-content"]
mainContentTop.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4']
mainContentTop.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content']

//setting middle content image
const middleImg = document.getElementById('middle-img')
middleImg.src = siteContent['main-content']["middle-img-src"]


//setting main content bottom section
const mainContentBottom = document.querySelector('.bottom-content') 
mainContentBottom.querySelector('.text-content h4').textContent = siteContent['main-content']["services-h4"]
mainContentBottom.querySelector('.text-content p').textContent = siteContent['main-content']["services-content"]
mainContentBottom.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4']
mainContentBottom.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content']
mainContentBottom.querySelector('.text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4']
mainContentBottom.querySelector('.text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content']

//setting contact section of the webpage
const contact = document.querySelector('.contact')
contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
contact.querySelector('p').textContent  = siteContent["contact"]["address"]
contact.querySelector('p:nth-of-type(2)').textContent  = siteContent["contact"]["phone"]
contact.querySelector('p:nth-of-type(3)').textContent  = siteContent["contact"]["email"]


//setting footer paragraph
const footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent['footer']["copyright"];
//--------------------------------------

//add items to navigation bar
const addedNav1 = document.createElement('a')
addedNav1.textContent = 'Cats'
const addedNav2 = document.createElement('a')
addedNav2.textContent = 'dogs'
navBar.appendChild(addedNav1)
navBar.prepend(addedNav2)


//coloring all of the navigation tags
let coloring = document.querySelectorAll('a')

for(let i=0;i<coloring.length;i++){
  if(i%2 === 0){
    coloring[i].style.color = 'green';
  }
  if(i%2 === 1){
    coloring[i].style.color = 'red';

  }
}

//----------------------------------------------------------------------

colors = ['purple']
const body = document.querySelector(".container")
body.addEventListener('click',()=>{
    body.style.backgroundColor = colors
})


// //get all navigation and set their textContent.
// let navBar = document.querySelectorAll('a')
// for(let i =0; i<navBar.length;i++){
//   navBar[i].textContent = `${siteContent.nav[`nav-item-${i}`]}`;
// }
// //getting main header(h1) and setting its text values
// let mainHeader = document.querySelector('h1')
// mainHeader.textContent = siteContent.cta.h1;

//  //setting button below 
// let button = document.querySelector('button')
// button.textContent = siteContent.cta.button;

//  //setting top image
// let ctaImage = document.getElementById("cta-img")
// ctaImage.src = siteContent.cta["img-src"]

//  //setting main content headers
// let headerSection = document.querySelectorAll('h4');
// headerSection[0].textContent = siteContent['main-content']["features-h4"]
// headerSection[1].textContent = siteContent['main-content']["about-h4"]
// headerSection[2].textContent = siteContent['main-content']["services-h4"]
// headerSection[3].textContent = siteContent['main-content']["product-h4"]
// headerSection[4].textContent = siteContent['main-content']["vision-h4"]

//  //setting all main content paragraphs
// let paragraphSection = document.querySelectorAll('p')
// paragraphSection[0].textContent = siteContent['main-content']["features-content"]
// paragraphSection[1].textContent = siteContent['main-content']["about-content"]
// paragraphSection[2].textContent = siteContent['main-content']["services-content"]
// paragraphSection[3].textContent = siteContent['main-content']["product-content"]
// paragraphSection[4].textContent = siteContent['main-content']["vision-content"]


//  //setting middle content image
// let middleImg = document.getElementById('middle-img')
// middleImg.src = siteContent['main-content']["middle-img-src"]

//  //setting contact section of the webpage
// headerSection[5].textContent = siteContent['contact']["contact-h4"]
// paragraphSection[5].textContent = siteContent['contact']["address"]
// paragraphSection[6].textContent = siteContent['contact']["phone"]
// paragraphSection[7].textContent = siteContent['contact']["email"]

//  //setting footer paragraph
