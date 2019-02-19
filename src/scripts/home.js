const backgroundImg = () => {
  let section1 = document.getElementById('section-1');
  let logo = document.createElement('div');
  let cover = document.createElement('div');
  let arrow = document.createElement('div');
  arrow.setAttribute('id', 'down-arrow');
  cover.setAttribute('id', 'cover');
  logo.setAttribute('id', 'logo');
  logo.textContent = '\n';
  cover.appendChild(logo);
  section1.appendChild(cover);
  section1.appendChild(arrow);
}

const homeContent = () => {
  let desc = {grow :  ['We Grow','grow','Our farmer-owners have access to some of the best organic coffee in the world. They have a deep interest in seeing that you love their coffee. So, it only makes sense to carefully control quality from farm to cup. We grow, harvest, clean, import, roast, and deliver our best coffee directly to you.'], 
              invest : ['You Invest', 'invest', 'Choose to pre-pay seasonally or pay monthly for your share of the harvest. You may pause or cancel at anytime and we always offer free shipping. Repeat business is important for farmers because it gives them a good reason to stay on the farm and to invest in organic production'],
              deliver : ['We Deliver', 'deliver','We roast coffee daily in small batches in Sacramento, California. 100% of the coffee we roast is certified organic and grown under shade-canopy by small farmers. Whether you\'re near or far, you get to enjoy delicious coffee from responsible family farms around the world in the comfort of your home.']          
                      }
  let section3 = document.getElementById('section-3');

  // Clean the section-3
  while (section3.firstElementChild) {
    section3.removeChild(section3.firstElementChild);        
  }

  Object.keys(desc).map(key => {
    let divContent = document.createElement('div');
    let logoContent = document.createElement('div');
    let headerContent = document.createElement('h2');
    let descContent = document.createElement('p');
    divContent.setAttribute('class', 'divContent');
    logoContent.textContent = '\n';
    logoContent.setAttribute('class', `img ${desc[key][1]}`);
    headerContent.textContent = desc[key][0];
    descContent.textContent = desc[key][2];
    divContent.appendChild(logoContent);
    divContent.appendChild(headerContent);
    divContent.appendChild(descContent);
    section3.appendChild(divContent);
  });

}

export { backgroundImg, homeContent }
