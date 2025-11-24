// assets/js/maps.js - Mappe interattive per tutti i giorni del Tour

// Variabili globali per le mappe
var mapG1, mapG2, mapG3, mapG4, mapG5;
var routeLineG1, routeLineG2, routeLineG3, routeLineG4, routeLineG5;

// Funzione di inizializzazione migliorata
function initMap(mapId, center, zoom) {
    var map = L.map(mapId).setView(center, zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    return map;
}

// ===== GIORNO 1: TORINO → BOLZANO =====
function initMapG1() {
    console.log('Inizializando mappa G1');
    mapG1 = initMap('routeMapG1', [45.5, 9.5], 7);
    
    // Coordinate del percorso Torino-Bolzano
    var torino = [45.062356, 7.679937];
    var bolzano = [46.495278, 11.353469];
    
    var routePoints = [
        torino,
        [45.4642, 9.1900],   // Milano
        [45.5396, 10.2206],  // Brescia
        [46.0667, 11.1167],  // Trento
        bolzano
    ];
    
    routeLineG1 = L.polyline(routePoints, {
        color: '#ff0000',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(mapG1);
    
    // Marker Torino
    L.marker(torino).addTo(mapG1)
        .bindPopup('<b>🏁 TORINO</b><br>Partenza - 45.062356° N, 7.679937° E');
    
    // Marker Bolzano
    L.marker(bolzano).addTo(mapG1)
        .bindPopup('<b>🎯 BOLZANO</b><br>Arrivo - 46.495278° N, 11.353469° E');
    
    mapG1.fitBounds(routeLineG1.getBounds(), { padding: [50, 50] });
}

// ===== GIORNO 3: TIMMELSJOCH =====
function initMapG3() {
    var map = L.map('routeMapG3').setView([46.8, 11.0], 9);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Coordinate del percorso Timmelsjoch
    var bolzano = [46.4982953, 11.3547582];
    var timmelsjoch = [46.904167, 11.2275];
    var passoGiovo = [46.583333, 11.5];
    
    var routePoints = [
        bolzano,
        [46.7, 10.9],        // Curon Venosta
        timmelsjoch,
        [47.0667, 10.8833],  // Ötztal (Austria)
        passoGiovo,
        bolzano
    ];
    
    var routeLine = L.polyline(routePoints, {
        color: '#33cc33',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(map);
    
    // Marker passi
    L.marker(timmelsjoch).addTo(map).bindPopup('<b>🔁 TIMMELSJOCH</b><br>2.509m - Italia/Austria');
    L.marker(passoGiovo).addTo(map).bindPopup('<b>🏔️ PASSO GIOVO</b><br>2.094m - Ritorno in Italia');
    
    map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
    
    window.mapG3 = map;
    window.routeLineG3 = routeLine;
}


// ===== GIORNO 4: STELVIO & GAVIA =====
function initMapG4() {
    var map = L.map('routeMapG4').setView([46.4, 10.5], 9);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Coordinate del percorso Stelvio
    var bolzano = [46.4982953, 11.3547582];
    var passoMendola = [46.4167, 11.2167];
    var passoGavia = [46.3417, 10.4917];
    var bormio = [46.468, 10.372];
    var passoStelvio = [46.5286, 10.4531];
    
    var routePoints = [
        bolzano,
        passoMendola,
        passoGavia,
        bormio,
        passoStelvio,
        bormio
    ];
    
    var routeLine = L.polyline(routePoints, {
        color: '#ffd700',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(map);
    
    // Marker passi
    L.marker(passoMendola).addTo(map).bindPopup('<b>🌲 PASSO MENDOLA</b><br>1.363m - Riscaldamento');
    L.marker(passoGavia).addTo(map).bindPopup('<b>💎 PASSO GAVIA</b><br>2.621m - Gigante selvaggio');
    L.marker(passoStelvio).addTo(map).bindPopup('<b>👑 PASSO STELVIO</b><br>2.758m - Il Re - 48 tornanti');
    
    map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
    
    window.mapG4 = map;
    window.routeLineG4 = routeLine;
}

// ===== GIORNO 5: RITORNO =====
function initMapG5() {
    var map = L.map('routeMapG5').setView([45.5, 9.5], 7);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Coordinate del percorso ritorno
    var bormio = [46.468, 10.372];
    var torino = [45.062356, 7.679937];
    
    var routePoints = [
        bormio,
        [46.3, 10.8],        // Strada del Vino
        [45.4642, 9.1900],   // Milano
        torino
    ];
    
    var routeLine = L.polyline(routePoints, {
        color: '#667eea',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(map);
    
    // Marker
    L.marker(bormio).addTo(map).bindPopup('<b>🏔️ BORMIO</b><br>Partenza - Base Stelvio');
    L.marker(torino).addTo(map).bindPopup('<b>🏠 TORINO</b><br>Arrivo - Ritorno a casa');
    
    map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
    
    window.mapG5 = map;
    window.routeLineG5 = routeLine;
}

// ===== FUNZIONI DI CONTROLLO PER OGNI MAPPA =====

// Giorno 1
function showFullRouteG1() { window.mapG1.fitBounds(window.routeLineG1.getBounds(), { padding: [50, 50] }); }
function showStartEndG1() { 
    var group = new L.featureGroup([window.routeLineG1.getBounds().getSouthWest(), window.routeLineG1.getBounds().getNorthEast()]);
    window.mapG1.fitBounds(group.getBounds(), { padding: [100, 100] });
}
function resetMapG1() { window.mapG1.fitBounds(window.routeLineG1.getBounds(), { padding: [50, 50] }); }

// Giorno 2
function showFullRouteG2() { window.mapG2.fitBounds(window.routeLineG2.getBounds(), { padding: [50, 50] }); }
function showStartEndG2() { 
    var group = new L.featureGroup([window.routeLineG2.getBounds().getSouthWest(), window.routeLineG2.getBounds().getNorthEast()]);
    window.mapG2.fitBounds(group.getBounds(), { padding: [100, 100] });
}
function resetMapG2() { window.mapG2.fitBounds(window.routeLineG2.getBounds(), { padding: [50, 50] }); }

// Giorno 3
function showFullRouteG3() { window.mapG3.fitBounds(window.routeLineG3.getBounds(), { padding: [50, 50] }); }
function showStartEndG3() { 
    var group = new L.featureGroup([window.routeLineG3.getBounds().getSouthWest(), window.routeLineG3.getBounds().getNorthEast()]);
    window.mapG3.fitBounds(group.getBounds(), { padding: [100, 100] });
}
function resetMapG3() { window.mapG3.fitBounds(window.routeLineG3.getBounds(), { padding: [50, 50] }); }

// Giorno 4
function showFullRouteG4() { window.mapG4.fitBounds(window.routeLineG4.getBounds(), { padding: [50, 50] }); }
function showStartEndG4() { 
    var group = new L.featureGroup([window.routeLineG4.getBounds().getSouthWest(), window.routeLineG4.getBounds().getNorthEast()]);
    window.mapG4.fitBounds(group.getBounds(), { padding: [100, 100] });
}
function resetMapG4() { window.mapG4.fitBounds(window.routeLineG4.getBounds(), { padding: [50, 50] }); }

// Giorno 5
function showFullRouteG5() { window.mapG5.fitBounds(window.routeLineG5.getBounds(), { padding: [50, 50] }); }
function showStartEndG5() { 
    var group = new L.featureGroup([window.routeLineG5.getBounds().getSouthWest(), window.routeLineG5.getBounds().getNorthEast()]);
    window.mapG5.fitBounds(group.getBounds(), { padding: [100, 100] });
}
function resetMapG5() { window.mapG5.fitBounds(window.routeLineG5.getBounds(), { padding: [50, 50] }); }

// ===== INIZIALIZZAZIONE MAPPE AL CARICAMENTO =====
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (document.getElementById('routeMapG1')) initMapG1();
        if (document.getElementById('routeMapG2')) initMapG2();
        if (document.getElementById('routeMapG3')) initMapG3();
        if (document.getElementById('routeMapG4')) initMapG4();
        if (document.getElementById('routeMapG5')) initMapG5();
    }, 500);
});
