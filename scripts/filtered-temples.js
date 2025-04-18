document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');
    const container = document.querySelector('.container.home');
    const navLinks = document.querySelectorAll('.navigation a');
    const titleName = document.querySelector('.title');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "images/temple1.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Arequipa Perú",
        location: "Arequipa, Arequipa, Perú",
        dedicated: "2019, dec, 15",
        area: 26969,
        imageUrl:
            "images/temple2.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Los Olivos Perú ",
        location: "Los Olivos, Lima, Perú",
        dedicated: "2024, Jan, 14",
        area: 47413,
        imageUrl:
            "images/temple3.webp",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "images/temple4.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "images/temple5.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "images/temple6.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "images/temple7.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Panamá City Panamá",
        location: "Ancon, Panamá, Panama",
        dedicated: "2008, August, 10",
        area: 18943,
        imageUrl:
            "images/temple8.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka-shi, Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "images/temple9.webp",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "images/temple10.webp",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Uusimaa, Finland",
        dedicated: "2006, February, 27",
        area: 16350,
        imageUrl:
            "images/temple11.webp",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "images/temple12.webp",
        width: "400px",
        height: "225px"
    },

];

// SHOW TEMPLES
const displayTemples = (filteredTemples) => {
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';
        card.innerHTML = `
            <img src="${temple.imageUrl}" loading="lazy" width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        container.appendChild(card);
    });
};

// FILTERED TEMPLES
const filterTemples = (criteria) => {
    let filteredTemples = temples;
    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            titleName.innerHTML = 'Old Temples';
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            titleName.innerHTML = 'New Temples';
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            titleName.innerHTML = 'Large Temples';
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            titleName.innerHTML = 'Small Temples';
            break;
        default:
            filteredTemples = temples;
            titleName.innerHTML = 'All Temples';
            break;
    }
    displayTemples(filteredTemples);
};

// ADD EVENTS
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(nav => nav.classList.remove('active'));
        e.target.classList.add('active');
        filterTemples(e.target.id);
    });
});


filterTemples('home-nav');

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;
});