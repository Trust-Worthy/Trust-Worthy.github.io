// Matrix Rain Animation with Skyline Building Effect
// For homepage right panel

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Greek and alphanumeric characters
    const letters = "01ιμβψλπabcdefghijklmnopqrstuvwxyz";
    const fontSize = 14;
    let columns = 0;
    let drops = [];

    // Animation phases
    let phase = 'matrix';
    let startTime = Date.now();
    
    // Skyline building variables
    let skylineHeights = [];
    let currentHeights = [];
    const buildingSpeed = 0.25;

    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
        initSkyline();
    }

    function initSkyline() {
        skylineHeights = [];
        currentHeights = [];
        for (let i = 0; i < columns; i++) {
            const baseHeight = Math.floor(canvas.height / fontSize * 0.15);
            const variation = Math.floor(Math.random() * (canvas.height / fontSize * 0.35));
            skylineHeights[i] = Math.min(
                baseHeight + variation,
                Math.floor(canvas.height / fontSize) - 2
            );
            currentHeights[i] = 0;
        }
    }

    function drawMatrix() {
        // Fade effect - adjusted for light background
        ctx.fillStyle = "rgba(248, 250, 252, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#00A3C4"; // Physical Intelligence teal
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to top when it reaches bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    function drawBuildingSkyline() {
        ctx.fillStyle = "rgba(248, 250, 252, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#00A3C4";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < columns; i++) {
            // Gradually increase building height
            if (currentHeights[i] < skylineHeights[i]) {
                currentHeights[i] += buildingSpeed;
            }
            
            const height = Math.floor(currentHeights[i]);
            
            // Draw building from bottom up
            for (let j = 0; j < height; j++) {
                const x = i * fontSize;
                const y = canvas.height - (j * fontSize);
                const letter = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(letter, x, y);
            }
        }
    }

    function drawFinalSkyline() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00A3C4";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < columns; i++) {
            const height = skylineHeights[i];
            
            for (let j = 0; j < height; j++) {
                const x = i * fontSize;
                const y = canvas.height - (j * fontSize);
                const letter = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(letter, x, y);
            }
        }
    }

    function animate() {
        const elapsed = Date.now() - startTime;
        
        if (phase === 'matrix' && elapsed < 10000) {
            // Matrix rain for 10 seconds
            drawMatrix();
            requestAnimationFrame(animate);
        } else if (phase === 'matrix' && elapsed >= 10000) {
            // Transition to building phase
            phase = 'building';
            initSkyline();
            requestAnimationFrame(animate);
        } else if (phase === 'building' && elapsed < 20000) {
            // Build skyline for 10 seconds
            drawBuildingSkyline();
            requestAnimationFrame(animate);
        } else if (phase === 'building' && elapsed >= 20000) {
            // Final static skyline
            phase = 'complete';
            drawFinalSkyline();
        }
    }

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});