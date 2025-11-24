// assets/js/maps.js - Mappe interattive per tutti i giorni del Tour

// Variabili globali per le mappe
var mapG1, mapG2, mapG3, mapG4, mapG5;
var routeLineG1, routeLineG2, routeLineG3, routeLineG4, routeLineG5;

// Funzione di inizializzazione migliorata
function initMap(mapId, center, zoom) {
    console.log('Inizializzando mappa:', mapId);
    var map = L.map(mapId).setView(center, zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    return map;
}

// ===== GIORNO 1: TORINO → BOLZANO =====
function initMapG1() {
    console.log('Inizializzando mappa G1');
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

// ===== GIORNO 2: DOLOMITI =====
function initMapG2() {
    console.log('Inizializzando mappa G2');
    mapG2 = initMap('routeMapG2', [46.5, 11.7], 9);
    
    // Coordinate del percorso Dolomiti
    var bolzano = [46.4982953, 11.3547582];
    var passoGiau = [46.4833, 11.9833];
    var passoPordoi = [46.4889, 11.8167];
    var passoSella = [46.5083, 11.7583];
    
    var routePoints = [
        bolzano,
        [46.4, 11.5],        // Val di Fassa
        passoGiau,
        passoPordoi,
        passoSella,
        bolzano
    ];
    
    routeLineG2 = L.polyline(routePoints, {
        color: '#ff4500',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(mapG2);
    
    // Marker passi
    L.marker(passoGiau).addTo(mapG2).bindPopup('<b>🌄 PASSO GIAU</b><br>2.236m - 29 tornanti');
    L.marker(passoPordoi).addTo(mapG2).bindPopup('<b>🏔️ PASSO PORDOI</b><br>2.239m - Terrazza Dolomiti');
    L.marker(passoSella).addTo(mapG2).bindPopup('<b>⚡ PASSO SELLA</b><br>2.240m - Cuore di pietra');
    
    mapG2.fitBounds(routeLineG2.getBounds(), { padding: [50, 50] });
}

// ===== GIORNO 3: TIMMELSJOCH =====
function initMapG3() {
    console.log('Inizializzando mappa G3');
    mapG3 = initMap('routeMapG3', [46.8, 11.0], 9);
    
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
    
    routeLineG3 = L.polyline(routePoints, {
        color: '#33cc33',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(mapG3);
    
    // Marker passi
    L.marker(timmelsjoch).addTo(mapG3).bindPopup('<b>🔁 TIMMELSJOCH</b><br>2.509m - Italia/Austria');
    L.marker(passoGiovo).addTo(mapG3).bindPopup('<b>🏔️ PASSO GIOVO</b><br>2.094m - Ritorno in Italia');
    
    mapG3.fitBounds(routeLineG3.getBounds(), { padding: [50, 50] });
}

// ===== GIORNO 4: STELVIO & GAVIA =====
function initMapG4() {
    console.log('Inizializzando mappa G4');
    mapG4 = initMap('routeMapG4', [46.4, 10.5], 9);
    
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
    
    routeLineG4 = L.polyline(routePoints, {
        color: '#ffd700',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(mapG4);
    
    // Marker passi
    L.marker(passoMendola).addTo(mapG4).bindPopup('<b>🌲 PASSO MENDOLA</b><br>1.363m - Riscaldamento');
    L.marker(passoGavia).addTo(mapG4).bindPopup('<b>💎 PASSO GAVIA</b><br>2.621m - Gigante selvaggio');
    L.marker(passoStelvio).addTo(mapG4).bindPopup('<b>👑 PASSO STELVIO</b><br>2.758m - Il Re - 48 tornanti');
    
    mapG4.fitBounds(routeLineG4.getBounds(), { padding: [50, 50] });
}

// ===== GIORNO 5: RITORNO =====
function initMapG5() {
    console.log('Inizializzando mappa G5');
    mapG5 = initMap('routeMapG5', [45.5, 9.5], 7);
    
    // Coordinate del percorso ritorno
    var bormio = [46.468, 10.372];
    var torino = [45.062356, 7.679937];
    
    var routePoints = [
        bormio,
        [46.3, 10.8],        // Strada del Vino
        [45.4642, 9.1900],   // Milano
        torino
    ];
    
    routeLineG5 = L.polyline(routePoints, {
        color: '#667eea',
        weight: 6,
        opacity: 0.8,
        lineJoin: 'round'
    }).addTo(mapG5);
    
    // Marker
    L.marker(bormio).addTo(mapG5).bindPopup('<b>🏔️ BORMIO</b><br>Partenza - Base Stelvio');
    L.marker(torino).addTo(mapG5).bindPopup('<b>🏠 TORINO</b><br>Arrivo - Ritorno a casa');
    
    mapG5.fitBounds(routeLineG5.getBounds(), { padding: [50, 50] });
}

// ===== FUNZIONI DI CONTROLLO PER OGNI MAPPA =====

// Giorno 1
function showFullRouteG1() { 
    if (mapG1 && routeLineG1) {
        mapG1.fitBounds(routeLineG1.getBounds(), { padding: [50, 50] }); 
    }
}
function showStartEndG1() { 
    if (mapG1 && routeLineG1) {
        var bounds = routeLineG1.getBounds();
        mapG1.fitBounds(bounds, { padding: [100, 100] });
    }
}
function resetMapG1() { 
    if (mapG1 && routeLineG1) {
        mapG1.fitBounds(routeLineG1.getBounds(), { padding: [50, 50] }); 
    }
}

// Giorno 2
function showFullRouteG2() { 
    if (mapG2 && routeLineG2) {
        mapG2.fitBounds(routeLineG2.getBounds(), { padding: [50, 50] }); 
    }
}
function showStartEndG2() { 
    if (mapG2 && routeLineG2) {
        var bounds = routeLineG2.getBounds();
        mapG2.fitBounds(bounds, { padding: [100, 100] });
    }
}
function resetMapG2() { 
    if (mapG2 && routeLineG2) {
        mapG2.fitBounds(routeLineG2.getBounds(), { padding: [50, 50] }); 
    }
}

// Giorno 3
function showFullRouteG3() { 
    if (mapG3 && routeLineG3) {
        mapG3.fitBounds(routeLineG3.getBounds(), { padding: [50, 50] }); 
    }
}
function showStartEndG3() { 
    if (mapG3 && routeLineG3) {
        var bounds = routeLineG3.getBounds();
        mapG3.fitBounds(bounds, { padding: [100, 100] });
    }
}
function resetMapG3() { 
    if (mapG3 && routeLineG3) {
        mapG3.fitBounds(routeLineG3.getBounds(), { padding: [50, 50] }); 
    }
}

// Giorno 4
function showFullRouteG4() { 
    if (mapG4 && routeLineG4) {
        mapG4.fitBounds(routeLineG4.getBounds(), { padding: [50, 50] }); 
    }
}
function showStartEndG4() { 
    if (mapG4 && routeLineG4) {
        var bounds = routeLineG4.getBounds();
        mapG4.fitBounds(bounds, { padding: [100, 100] });
    }
}
function resetMapG4() { 
    if (mapG4 && routeLineG4) {
        mapG4.fitBounds(routeLineG4.getBounds(), { padding: [50, 50] }); 
    }
}

// Giorno 5
function showFullRouteG5() { 
    if (mapG5 && routeLineG5) {
        mapG5.fitBounds(routeLineG5.getBounds(), { padding: [50, 50] }); 
    }
}
function showStartEndG5() { 
    if (mapG5 && routeLineG5) {
        var bounds = routeLineG5.getBounds();
        mapG5.fitBounds(bounds, { padding: [100, 100] });
    }
}
function resetMapG5() { 
    if (mapG5 && routeLineG5) {
        mapG5.fitBounds(routeLineG5.getBounds(), { padding: [50, 50] }); 
    }
}

// ===== INIZIALIZZAZIONE MAPPE AL CARICAMENTO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== TOUR DEI GIGANTI - INIZIALIZZAZIONE MAPPE ===');
    
    // Inizializza le mappe con un piccolo ritardo per sicurezza
    setTimeout(function() {
        console.log('Controllo disponibilità mappe...');
        
        // Array con tutte le mappe da inizializzare
        const mapsToInitialize = [
            { id: 'routeMapG1', init: initMapG1, name: 'Giorno 1' },
            { id: 'routeMapG2', init: initMapG2, name: 'Giorno 2' },
            { id: 'routeMapG3', init: initMapG3, name: 'Giorno 3' },
            { id: 'routeMapG4', init: initMapG4, name: 'Giorno 4' },
            { id: 'routeMapG5', init: initMapG5, name: 'Giorno 5' }
        ];
        
        mapsToInitialize.forEach(map => {
            const element = document.getElementById(map.id);
            if (element) {
                console.log(`✅ Trovata mappa: ${map.name} (${map.id})`);
                try {
                    map.init();
                    console.log(`✅ Mappa ${map.name} inizializzata con successo`);
                } catch (error) {
                    console.error(`❌ Errore inizializzazione ${map.name}:`, error);
                }
            } else {
                console.warn(`⚠️ Mappa non trovata: ${map.name} (${map.id})`);
            }
        });
        
        console.log('=== INIZIALIZZAZIONE COMPLETATA ===');
    }, 500);
});

// Controlla se Leaflet è disponibile
window.addEventListener('load', function() {
    if (typeof L === 'undefined') {
        console.error('❌ Leaflet non è caricato correttamente!');
    } else {
        console.log('✅ Leaflet caricato correttamente', L.version);
    }
});
