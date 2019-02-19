const createAbout = () => {
    let section3 = document.getElementById('section-3');

    while (section3.firstChild) {
        section3.removeChild(section3.firstChild)
    }

    let map = document.createElement('iframe');
    let url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22362.734171528202!2d-73.60333848213202!3d45.52332752340955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bd192d52ab1%3A0xdf672d1ee5eca55c!2sLe+Plateau-Mont-Royal%2C+Montr%C3%A9al%2C+QC!5e0!3m2!1sfr!2sca!4v1550599741819'
    map.setAttribute('id', 'map');
    map.src = url;
    section3.appendChild(map);
}

export { createAbout }