(function() {


let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.750337, 37.605827],
        zoom: 15,
        controls: []
    });

    const myPlacemark = new ymaps.Placemark([55.749874, 37.604249], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/svg/marker.svg',
        iconImageSize: [57, 73],
        iconImageOffset: [-30, -50]
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);

})()