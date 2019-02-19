import { backgroundImg, homeContent } from './scripts/home.js'
import { createNav } from './scripts/menu.js'
import { createAbout } from './scripts/about.js'
import { createProductDesc } from './scripts/product-desc.js'
import './style.css';
import './reset.css';

const populateContent = (evt) => {
    let key =  evt.target.textContent
    switch (key) {
        case 'Home':
            homeContent()
            break;
        case 'Products':
            createProductDesc()
            break;
        case 'Find Us':
            createAbout()
            break;
    }
}

backgroundImg()
createNav()
homeContent()
// createAbout()

export { populateContent }
