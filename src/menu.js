const createNav = () => {
  let navItems = ['Home', 'Products', 'About'];
  let section2 = document.getElementById('section-2');
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'nav');
  navItems.map(item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.setAttribute('class', 'navItem');
    li.setAttribute('data-nav', item);
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
  });
  section2.appendChild(ul);

}

export { createNav }
