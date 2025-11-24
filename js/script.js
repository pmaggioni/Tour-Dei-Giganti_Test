// Script JavaScript per Tour dei Giganti
console.log('🏍️ Tour dei Giganti - Benvenuto Gnorante!');

// =============================================
// MENU MOBILE HAMBURGER
// =============================================
function initMobileMenu() {
    const header = document.querySelector('.header-inferno') || document.querySelector('.hero-section');
    
    if (!header) return;

    // Crea pulsante hamburger
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.setAttribute('aria-label', 'Menu navigazione');
    menuButton.style.cssText = `
        position: fixed;
        top: 15px;
        right: 15px;
        background: #ff0000;
        color: white;
        border: 2px solid #ff4500;
        border-radius: 5px;
        padding: 10px 15px;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        display: none;
        transition: all 0.3s ease;
    `;

    // Crea menu mobile
    const mobileMenu = document.createElement('div');
    mobileMenu.style.cssText = `
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background: #000000;
        border-right: 3px solid #ff0000;
        padding: 2rem;
        transition: left 0.3s ease;
        z-index: 999;
        overflow-y: auto;
        box-shadow: 5px 0 15px rgba(255, 69, 0, 0.3);
    `;

    mobileMenu.innerHTML = `
        <div style="margin-top: 3rem;">
            <h3 style="color: #ff4500; margin-bottom: 2rem; border-bottom: 2px solid #ff4500; padding-bottom: 1rem;">🏍️ TOUR DEI GIGANTI</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 1.5rem;"><a href="index.html" style="color: white; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid transparent; transition: all 0.3s ease;">🏠 Home</a></li>
                <li style="margin-bottom: 1.5rem;"><a href="#giorno1" style="color: white; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid transparent; transition: all 0.3s ease;">📅 Giorno 1 - Torino/Bolzano</a></li>
                <li style="margin-bottom: 1.5rem;"><a href="#giorno2" style="color: white; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid transparent; transition: all 0.3s ease;">📅 Giorno 2 - Dolomiti</a></li>
                <li style="margin-bottom: 1.5rem;"><a href="#giorno3" style="color: white; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid transparent; transition: all 0.3s ease;">📅 Giorno 3 - Timmelsjoch</a></li>
                <li style="margin-bottom: 1.5rem;"><a href="#giorno4" style="color: white; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid transparent; transition: all 0.3s ease;">📅 Giorno 4 - Stelvio</a></li>
                <li style="margin-bottom: 1.5rem;"><a href="#giorno5" style="color: white; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid transparent; transition: all 0.3s ease;">📅 Giorno 5 - Rientro</a></li>
                <li style="margin-bottom: 1.5rem;"><a href="la-nostra-storia.html" style="color: #ff4500; text-decoration: none; font-size: 1.2rem; display: block; padding: 0.5rem; border-left: 3px solid #ff4500; font-weight: bold;">❤️ La Nostra Storia</a></li>
            </ul>
        </div>
    `;

    // Overlay per chiudere il menu
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: none;
        z-index: 998;
        transition: opacity 0.3s ease;
    `;

    // Aggiungi elementi al DOM
    document.body.appendChild(menuButton);
    document.body.appendChild(mobileMenu);
    document.body.appendChild(overlay);

    // Event listeners
    menuButton.addEventListener('click', function() {
        mobileMenu.style.left = '0';
        overlay.style.display = 'block';
        setTimeout(() => overlay.style.opacity = '1', 10);
    });

    function closeMenu() {
        mobileMenu.style.left = '-100%';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 300);
    }

    overlay.addEventListener('click', closeMenu);

    // Chiudi menu cliccando sui link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Gestione responsive
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
        } else {
            menuButton.style.display = 'none';
            closeMenu();
        }
    }

    // Inizializzazione
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

// =============================================
// INIZIALIZZAZIONE
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inizializzazione Tour dei Giganti...');
    initMobileMenu();
    
    // Funzioni future da implementare:
    // - Mappa interattiva
    // - Calcolatore carburante  
    // - Checklist interattiva
    // - Galleria foto
    // - Download manager GPX
});

// =============================================
// UTILITY FUNCTIONS (future)
// =============================================
function calcolaCarburante(distanza, consumo) {
    // Da implementare
    return (distanza / 100 * consumo).toFixed(1);
}

function toggleChecklist(item) {
    // Da implementare
    console.log('Checklist item toggled:', item);
}
