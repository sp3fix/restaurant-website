const createProductDesc = () => {
    let products = {
        ID001 : {name: 'Kicking Horse Coffee', weigth: '500gr', price: '8.99 CAD', roast: 'Light Roast'},
        ID003 : {name: 'Morning bliss', weigth: '500gr', price: '9.99 CAD', roast: 'Medium Roast'},
        ID004 : {name: 'Cafe 1820 Tueste Claro', weigth: '500gr', price: '10.99 CAD', roast: 'Light Roast'},
        ID005 : {name: 'Real Good Coffee', weigth: '500gr', price: '14.99 CAD', roast: 'Dark Roast'},
        ID006 : {name: 'Tiny Footprint Coffee', weigth: '750gr', price: '16.99 CAD', roast: 'Dark Roast'},
    }
    // Object.keys(products).map(key => console.log(products[key].name)) 
    
    let section3 = document.getElementById('section-3');
    
    // Clean the section-3
    while (section3.firstElementChild) {
        section3.removeChild(section3.firstElementChild);        
    }
    for (let key in products) {
        let div = document.createElement('div');
        div.setAttribute('class', 'productDesc');
        for(let element in products[key]) {
            let subDiv = document.createElement('div');
            let subTitle = document.createElement('div');
            let subText = document.createElement('div');
            subText.textContent = products[key][element];
            subTitle.textContent = element;
            subText.setAttribute('class', 'subText');
            subTitle.setAttribute('class','subTitle');
            subDiv.appendChild(subTitle);
            subDiv.appendChild(subText);
            subDiv.setAttribute('class', `descEl ${element}`);
            if(element == 'roast') subDiv.setAttribute('class', `descEl ${products[key][element]}`);
            div.appendChild(subDiv);
        }
        section3.appendChild(div);
    };
}

export { createProductDesc }