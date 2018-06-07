function initMap()
{
    map = new google.maps.Map(document.getElementById('map'),
    {

        center: {
                lat: 23.104169,
                lng: -102.750437,
        },
        zoom:5.13
    })

    infowindow = new google.maps.InfoWindow();

    var marker = {
        text: 'Texto del marker',// añadimos un texto para el infowindow
        lat: 23.104169,
        lng: -102.750437,
        icon: 'https://vignette4.wikia.nocookie.net/video151/images/2/2f/Star_Wars_Explained_avatar.jpg'
        // http://www.iconhot.com/icon/png/star-wars-1/128/anakin-starfighter.png
    };

    markers.push(addMarker(marker));








    addPolyline();


}

/**
 *
 * función que devuelve un marker
 *
 * @param data
 * @returns {google.maps.Marker}
 */
function addMarker(data) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.lng),
        map: map,
        icon: data.icon
    });

    var html = "<b>" + data.text + "</b> <br/>"; //html del infowindow

    bindInfoWindow(marker, html); //creamos el infowindow

    return marker;
}

/**
 *
 * función que permite añadir infowindows
 *
 * @param marker
 * @param html
 */
function bindInfoWindow(marker, html) {
    google.maps.event.addListener(marker, 'click', function (event) {
        infowindow.setContent(html);
        infowindow.position = event.latLng;
        infowindow.open(map, marker);
    });
}


function toggleMarkers()
{
    markers.map(function(marker) {
        marker.setVisible(!marker.getVisible())
    })
}

function addPolyline()
{
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        strokeColor: "#000000",
        strokeOpacity: 1
    };

    var routeCoordinates = [
        {lat: 22.621681,lng: -105.664376},
        {lat: 23.940740,lng: -106.663350},
        {lat: 26.649945,lng: -109.348094},
        {lat: 29.568251,lng: -112.469889},
        {lat:31.344217,lng: -113.406428},
        {lat: 31.663615,lng: -114.780018},
        {lat:30.066667,lng:  -114.533165},
        {lat:25.371730,lng:  -110.983705},
        {lat:22.968294,lng:  -109.885934},
        {lat:27.078573,lng:  -114.130649},
        {lat:31.637301,lng:  -116.692114},
        {lat:32.628861,lng:  -114.825903},
        {lat:31.325238,lng: -111.093482},
        {lat:30.980770,lng: -105.860774},
        {lat:29.080103,lng: -103.079754},
        {lat:29.781240,lng: -101.908799},
        {lat:26.948172,lng: -99.457110},
        {lat:25.734872,lng: -97.261568},
        {lat:22.461985,lng: -97.810454},
        {lat:20.101527,lng: -96.702902},
        {lat:18.323374,lng: -94.620604},
        {lat:18.666808,lng: -92.357237},
        {lat:19.385748,lng:  -90.745719},
        {lat:21.135283, lng: -90.093869},
        {lat:21.506372,lng:  -86.997582},
        {lat:18.512348,lng:  -88.446138},
        {lat:17.875890,lng:  -90.963002},
        {lat:14.608166, lng: -92.302916},
        {lat:16.405208,lng:  -94.874101},
        {lat:15.709192,lng:  -96.757223},
        {lat:18.323374,lng:  -103.511112},
        {lat:20.441235, lng: -105.683944},
        {lat: 22.621681,lng: -105.664376},
    ];
    var flightPath = new google.maps.Polyline({
        path: routeCoordinates,
        geodesic: true,
        strokeColor: 'rgb(41,121,129)',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '100px'
        }]
    });

    flightPath.setMap(map);
}
