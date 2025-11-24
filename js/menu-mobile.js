// Menu Mobile Hamburger per Tour dei Giganti
document.addEventListener('DOMContentLoaded', function() {
    // Creiamo il menu hamburger
    const header = document.querySelector('.header-inferno') || document.querySelector('.hero-section');
    
    if (header) {
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
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
        `;

        const mobileMenu = document.createElement('div');
        mobileMenu.style.cssText = `
            position: fixed;
            top: 0;
            left: -100%;
            width: 80%;
            height: 100vh;
            background: #000000;
            border-right: 3px solid #ff0000;
            padding: 2rem;
            transition: left 0.3s ease;
            z-index: 999;
            overflow-y: auto;
        `;

        mobileMenu.innerHTML = `
            <div style="margin-top: 3rem;">
                <h3 style="color: #ff4500; margin-bottom: 2rem;">🏍️ TOUR DEI GIGANTI</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 1rem;"><a href="index.html" style="color: white; text-decoration: none; font-size: 1.2rem;">🏠 Home</a></li>
                    <li style="margin-bottom: 1rem;"><a href="index.html#giorno1" style="color: white; text-decoration: none; font-size: 1.2rem;">📅 Giorno 1</a></li>
                    <li style="margin-bottom: 1rem;"><a href="index.html#giorno2" style="color: white; text-decoration: none; font-size: 1.2rem;">📅 Giorno 2</a></li>
                    <li style="margin-bottom: 1rem;"><a href="index.html#giorno3" style="color: white; text-decoration: none; font-size: 1.2rem;">📅 Giorno 3</a></li>
                    <li style="margin-bottom: 1rem;"><a href="index.html#giorno4" style="color: white; text-decoration: none; font-size: 1.2rem;">📅 Giorno 4</a></li>
                    <li style="margin-bottom: 1rem;"><a href="index.html#giorno5" style="color: white; text-decoration: none; font-size: 1.2rem;">📅 Giorno 5</a></li>
                    <li style="margin-bottom: 1rem;"><a href="la-nostra-storia.html" style="color: #ff4500; text-decoration: none; font-size: 1.2rem;">❤️ La Nostra Storia</a></li>
                </ul>
            </div>
        `;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: none;
            z-index: 998;
        `;

        // Aggiungi elementi al DOM
        document.body.appendChild(menuButton);
        document.body.appendChild(mobileMenu);
        document.body.appendChild(overlay);

        // Funzioni toggle
        menuButton.addEventListener('click', function() {
            mobileMenu.style.left = '0';
            overlay.style.display = 'block';
        });

        overlay.addEventListener('click', function() {
            mobileMenu.style.left = '-100%';
            overlay.style.display = 'none';
        });

        // Mostra menu solo su mobile
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                menuButton.style.display = 'block';
            } else {
                menuButton.style.display = 'none';
                mobileMenu.style.left = '-100%';
                overlay.style.display = 'none';
            }
        }

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    }
});
