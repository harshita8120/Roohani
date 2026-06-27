const services = [{
    serviceImage: 'images/6addb94c6ec74028d86626d8e4aab4ae.jpg',
    serviceName: 'Our Restaurant',
    servicePhotoId: 'photo1',
    serviceId: 'info1',
    serviceAltText:'Restaurant',
    serviceTiming: 'Timings: 11:00 a.m. to 10:30 p.m.'
}, {
    serviceImage: 'images/IMG_20241118_144020.jpg',
    serviceName: 'Our Cocktail Bar',
    servicePhotoId: 'photo2',
    serviceId: 'info2',
    serviceAltText:'Cocktail Bar',
    serviceTiming: 'Timings: 6:00 a.m. to 11:00 p.m.'
}];

const serviceHTML = services.map((service) => { 			
    return `<div class="col">
        <img src="${service.serviceImage}" alt="${service.serviceAltText}" id="${service.servicePhotoId}">
        <div class="layer"><img src="${service.serviceImage}"></div>
        <div id="${service.serviceId}" class="info">
            <h3 class="service-name">${service.serviceName}</h3>
            <p class="service-timing">${service.serviceTiming}</p>
        </div>
    </div>`
});

document.querySelector('#service-row').innerHTML=serviceHTML.join('');