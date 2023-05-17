let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = "pk.eyJ1Ijoicnluby1nb2VkaGFscyIsImEiOiJjbGhqdHY4ZHYwbGhsM2NxdjRoNWMwa2kyIn0.qYm3ZfCRZuo7yHGNoDcEwA";

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

var img1 = document.querySelector("#amber");
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);