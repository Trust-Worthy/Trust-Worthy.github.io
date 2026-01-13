// Moves embedded directly for simplicity
const moves = [
    { from: [7, 6], to: [5, 5] }, { from: [0, 6], to: [2, 5] },
    { from: [6, 2], to: [4, 2] }, { from: [1, 6], to: [2, 6] },
    // ... PASTE THE FULL MOVES LIST FROM YOUR SNIPPET HERE ...
    { from: [5, 5], to: [5, 5] } // Last move
];

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("chessCanvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const tileSize = 50; // 400px / 8
    
    // Initial Board State
    const board = [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"]
    ];

    const pieceMap = {
        r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
        R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙"
    };

    function drawBoard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                // Classic Green/Cream or Grey/White board
                ctx.fillStyle = (row + col) % 2 === 0 ? "#EEE" : "#334155"; 
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);

                const piece = board[row][col];
                if (piece) {
                    // Pieces are White or Cyan (Matrix Accent)
                    ctx.fillStyle = (piece === piece.toUpperCase()) ? "#FFF" : "#00A3C4";
                    // Add stroke for visibility
                    ctx.font = "32px serif";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(pieceMap[piece], col * tileSize + tileSize / 2, row * tileSize + tileSize / 2);
                }
            }
        }
    }

    let moveIndex = 0;

    function animateMoves() {
        if (moveIndex >= moves.length) return;
        const move = moves[moveIndex];
        
        // Move Logic
        const piece = board[move.from[0]][move.from[1]];
        board[move.from[0]][move.from[1]] = "";
        board[move.to[0]][move.to[1]] = piece;
        
        drawBoard();
        moveIndex++;
        
        // Speed of moves
        setTimeout(animateMoves, 800); 
    }

    drawBoard();
    setTimeout(animateMoves, 1000);
});