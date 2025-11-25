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

// =============================================
// SISTEMA IMMAGINI ESPANDIBILI POTENZIATO
// =============================================
function initExpandableImages() {
    console.log('🖼️ Inizializzo immagini espandibili avanzate...');
    
    // Crea il modal per le immagini
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.98);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: zoom-out;
    `;
    
    const modalImg = document.createElement('img');
    modalImg.id = 'expandedImage';
    modalImg.style.cssText = `
        max-width: 95%;
        max-height: 85%;
        border-radius: 10px;
        border: 3px solid #ffd700;
        box-shadow: 0 0 60px rgba(255, 215, 0, 0.6);
        cursor: grab;
        transition: transform 0.2s ease;
        transform-origin: center center;
    `;
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 25px;
        right: 35px;
        color: #ffd700;
        font-size: 45px;
        font-weight: bold;
        cursor: pointer;
        z-index: 10001;
        text-shadow: 2px 2px 8px #000;
        transition: all 0.3s ease;
        background: rgba(0,0,0,0.7);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    const caption = document.createElement('div');
    caption.id = 'modalCaption';
    caption.style.cssText = `
        color: #ffd700;
        font-size: 1.3rem;
        margin-top: 1.5rem;
        text-align: center;
        font-style: italic;
        background: rgba(0,0,0,0.7);
        padding: 10px 20px;
        border-radius: 20px;
        max-width: 80%;
    `;
    
    const zoomControls = document.createElement('div');
    zoomControls.style.cssText = `
        position: absolute;
        bottom: 30px;
        display: flex;
        gap: 15px;
        z-index: 10001;
    `;
    
    const zoomInBtn = document.createElement('button');
    zoomInBtn.innerHTML = '➕';
    zoomInBtn.title = 'Zoom In';
    zoomInBtn.style.cssText = `
        background: rgba(255, 215, 0, 0.9);
        color: #000;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    
    const zoomOutBtn = document.createElement('button');
    zoomOutBtn.innerHTML = '➖';
    zoomOutBtn.title = 'Zoom Out';
    zoomOutBtn.style.cssText = `
        background: rgba(255, 215, 0, 0.9);
        color: #000;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '🔄';
    resetBtn.title = 'Reset Zoom';
    resetBtn.style.cssText = `
        background: rgba(255, 69, 0, 0.9);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.3rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    
    // Aggiungi elementi al modal
    zoomControls.appendChild(zoomInBtn);
    zoomControls.appendChild(zoomOutBtn);
    zoomControls.appendChild(resetBtn);
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    modal.appendChild(caption);
    modal.appendChild(zoomControls);
    document.body.appendChild(modal);
    
    // Variabili per lo zoom
    let currentScale = 1;
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;
    
    // Aggiungi event listener a tutte le immagini
    document.querySelectorAll('.mappa-immagine').forEach(img => {
        img.classList.add('expandable-image');
        img.style.cursor = 'zoom-in';
        img.style.transition = 'all 0.3s ease';
        
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
        
        // Effetto hover migliorato
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.4)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.2)';
        });
    });
    
    function openModal(src, alt) {
        modal.style.display = 'flex';
        modalImg.src = src;
        modalImg.alt = alt;
        caption.textContent = alt;
        document.body.style.overflow = 'hidden';
        
        // Reset zoom e posizione
        currentScale = 1;
        modalImg.style.transform = 'scale(1)';
        modalImg.style.cursor = 'grab';
        
        // Animazione di entrata
        modalImg.style.opacity = '0';
        modalImg.style.transform = 'scale(0.7)';
        setTimeout(() => {
            modalImg.style.opacity = '1';
            modalImg.style.transform = 'scale(1)';
        }, 50);
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentScale = 1;
    }
    
    // Controlli zoom
    zoomInBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentScale += 0.3;
        modalImg.style.transform = `scale(${currentScale})`;
        modalImg.style.cursor = 'grab';
    });
    
    zoomOutBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentScale > 0.5) {
            currentScale -= 0.3;
            modalImg.style.transform = `scale(${currentScale})`;
        }
        if (currentScale <= 1) {
            modalImg.style.cursor = 'grab';
        }
    });
    
    resetBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentScale = 1;
        modalImg.style.transform = 'scale(1)';
        modalImg.style.cursor = 'grab';
    });
    
    // Zoom con rotella mouse
    modalImg.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            // Zoom in
            currentScale += 0.2;
        } else {
            // Zoom out
            if (currentScale > 0.5) {
                currentScale -= 0.2;
            }
        }
        modalImg.style.transform = `scale(${currentScale})`;
        if (currentScale > 1) {
            modalImg.style.cursor = 'grab';
        }
    });
    
    // Drag per muovere l'immagine zoommata
    modalImg.addEventListener('mousedown', startDrag);
    modalImg.addEventListener('touchstart', startDrag);
    
    function startDrag(e) {
        if (currentScale <= 1) return;
        
        isDragging = true;
        modalImg.style.cursor = 'grabbing';
        
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        startX = clientX - modalImg.offsetLeft;
        startY = clientY - modalImg.offsetTop;
        
        e.preventDefault();
    }
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    
    function drag(e) {
        if (!isDragging) return;
        
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        e.preventDefault();
        
        const x = clientX - startX;
        const y = clientY - startY;
        
        modalImg.style.left = x + 'px';
        modalImg.style.top = y + 'px';
        modalImg.style.position = 'relative';
    }
    
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
    
    function stopDrag() {
        isDragging = false;
        if (currentScale > 1) {
            modalImg.style.cursor = 'grab';
        }
    }
    
    // Chiudi modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Chiudi modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    // Effetti hover per i pulsanti
    [zoomInBtn, zoomOutBtn, resetBtn, closeBtn].forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    console.log('✅ Immagini espandibili avanzate pronte!');
}

// =============================================
// INIZIALIZZAZIONE AGGIORNATA
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inizializzazione Tour dei Giganti...');
    initMobileMenu();
    initExpandableImages(); // <-- AGGIUNTA QUESTA RIGA!
});
