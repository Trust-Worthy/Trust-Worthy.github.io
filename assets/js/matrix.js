document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('matrixContainer');
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    
    // Config matches your request
    const letters = "01ιμβψλπabcdefghijklmnopqrstuvwxyz"; // Mixed Greek/English
    const fontSize = 14;
    let columns = 0;
    let drops = [];

    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
        initSkyline(); // Re-calc skyline on resize
    }
    
    // --- YOUR LOGIC BELOW ---
    let phase = 'matrix'; 
    let startTime = Date.now();
    let skylineHeights = [];
    let currentHeights = [];
    let buildingSpeed = 0.25;

    function initSkyline() {
        skylineHeights = [];
        currentHeights = [];
        for (let i = 0; i < columns; i++) {
            const baseHeight = Math.floor(canvas.height / fontSize * 0.15);
            const variation = Math.floor(Math.random() * (canvas.height / fontSize * 0.35));
            skylineHeights[i] = Math.min(baseHeight + variation, Math.floor(canvas.height / fontSize) - 2);
            currentHeights[i] = 0;
        }
    }

    function drawMatrix() {
        ctx.fillStyle = "rgba(248, 250, 252, 0.1)"; // Fade matches BG color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#89CFF0"; // Your Blue
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }

    function drawBuildingSkyline() {
        ctx.fillStyle = "rgba(248, 250, 252, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#89CFF0";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < columns; i++) {
            if (currentHeights[i] < skylineHeights[i]) currentHeights[i] += buildingSpeed;
            let h = Math.floor(currentHeights[i]);
            for (let j = 0; j < h; j++) {
                ctx.fillText(letters.charAt(Math.floor(Math.random() * letters.length)), i * fontSize, canvas.height - (j * fontSize));
            }
        }
    }

    function drawFinalSkyline() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#89CFF0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < skylineHeights[i]; j++) {
                ctx.fillText(letters.charAt(Math.floor(Math.random() * letters.length)), i * fontSize, canvas.height - (j * fontSize));
            }
        }
    }

    function animate() {
        const elapsed = Date.now() - startTime;
        if (phase === 'matrix' && elapsed < 8000) {
            drawMatrix();
            requestAnimationFrame(animate);
        } else if (phase === 'matrix') {
            phase = 'building';
            initSkyline();
            requestAnimationFrame(animate);
        } else if (phase === 'building' && elapsed < 18000) {
            drawBuildingSkyline();
            requestAnimationFrame(animate);
        } else if (phase === 'building') {
            phase = 'complete';
            drawFinalSkyline();
        }
    }

    // Start
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});