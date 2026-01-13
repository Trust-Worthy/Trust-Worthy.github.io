// Chess Game Replay: Karpov vs Kasparov 1985 (Game 5)
// Embedded moves for simplicity

const moves = [
    // 1. Nf3 Nf6
    { from: [7, 6], to: [5, 5] },
    { from: [0, 6], to: [2, 5] },
    // 2. c4 g6
    { from: [6, 2], to: [4, 2] },
    { from: [1, 6], to: [2, 6] },
    // 3. Nc3 Bg7
    { from: [7, 1], to: [5, 2] },
    { from: [0, 5], to: [1, 6] },
    // 4. d4 O-O
    { from: [6, 3], to: [4, 3] },
    { from: [0, 4], to: [0, 6] },
    { from: [0, 7], to: [0, 5] },
    // 5. Bf4 d5
    { from: [7, 2], to: [4, 5] },
    { from: [1, 3], to: [3, 3] },
    // 6. Qb3 dxc4
    { from: [7, 3], to: [5, 1] },
    { from: [3, 3], to: [4, 2] },
    // 7. Qxc4 c6
    { from: [5, 1], to: [4, 2] },
    { from: [1, 2], to: [2, 2] },
    // 8. e4 Nbd7
    { from: [6, 4], to: [4, 4] },
    { from: [0, 1], to: [1, 3] },
    // 9. Rd1 Nb6
    { from: [7, 0], to: [7, 3] },
    { from: [1, 3], to: [2, 1] },
    // 10. Qc5 Bg4
    { from: [4, 2], to: [4, 5] },
    { from: [0, 2], to: [3, 6] },
    // 11. Bg5 Na4
    { from: [4, 5], to: [2, 6] },
    { from: [2, 1], to: [3, 0] },
    // 12. Qa3 Nxc3
    { from: [4, 5], to: [7, 0] },
    { from: [3, 0], to: [5, 2] },
    // 13. bxc3 Nxe4
    { from: [6, 1], to: [5, 2] },
    { from: [2, 5], to: [4, 4] },
    // 14. Bxe7 Qd5
    { from: [2, 6], to: [1, 4] },
    { from: [0, 3], to: [4, 3] },
    // 15. Bxf8 Bxf8
    { from: [1, 4], to: [0, 5] },
    { from: [1, 6], to: [0, 5] },
    // 16. Bxf7+ Kg7
    { from: [7, 5], to: [1, 5] },
    { from: [0, 6], to: [1, 6] },
    // 17. Be6 Qd6
    { from: [1, 5], to: [2, 4] },
    { from: [4, 3], to: [3, 3] },
    // 18. Bxg4 Qxa3
    { from: [2, 4], to: [3, 6] },
    { from: [3, 3], to: [7, 0] },
    // 19. Rd8 Qc1+
    { from: [7, 3], to: [0, 3] },
    { from: [7, 0], to: [7, 2] },
    // 20. Kf2 Qxc3
    { from: [7, 4], to: [6, 5] },
    { from: [7, 2], to: [5, 2] },
    // 21. Rxa8 Qxd4+
    { from: [0, 3], to: [0, 0] },
    { from: [5, 2], to: [4, 3] },
    // 22. Kg3 Qd2
    { from: [6, 5], to: [5, 6] },
    { from: [4, 3], to: [3, 3] },
    // 23. Bf3 Qxf2+
    { from: [3, 6], to: [5, 5] },
    { from: [3, 3], to: [6, 5] },
    // 24. Kh3 Qf1+
    { from: [5, 6], to: [5, 7] },
    { from: [6, 5], to: [7, 5] },
    // 25. Kh4 Qc4+
    { from: [5, 7], to: [5, 4] },
    { from: [7, 5], to: [4, 2] },
    // 26. g4 Qf1
    { from: [6, 6], to: [4, 6] },
    { from: [4, 2], to: [7, 5] },
    // 27. Kg5 h6+
    { from: [5, 4], to: [4, 6] },
    { from: [1, 7], to: [2, 7] },
    // 28. Kh4 Qf4
    { from: [4, 6], to: [5, 4] },
    { from: [7, 5], to: [5, 5] },
    // 29. Ra4 Qe3
    { from: [0, 0], to: [3, 0] },
    { from: [5, 5], to: [4, 4] },
    // 30. Kg3 Qe1+
    { from: [5, 4], to: [5, 6] },
    { from: [4, 4], to: [7, 4] },
    // 31. Kf4 Qf2
    { from: [5, 6], to: [5, 5] },
    { from: [7, 4], to: [6, 5] },
    // 32. Ke4 Qxh2
    { from: [5, 5], to: [4, 4] },
    { from: [6, 5], to: [6, 7] },
    // 33. Ra7+ Kf6
    { from: [3, 0], to: [1, 0] },
    { from: [1, 6], to: [2, 5] },
    // 34. Ra6+ Kg5
    { from: [1, 0], to: [1, 0] },
    { from: [2, 5], to: [3, 6] },
    // 35. Kf4+ Kh4
    { from: [4, 4], to: [5, 5] },
    { from: [3, 6], to: [5, 7] },
    // 36. Ra4+ Qxg4+
    { from: [1, 0], to: [3, 0] },
    { from: [6, 7], to: [4, 6] },
    // 37. Bxg4 Kg3
    { from: [5, 5], to: [4, 6] },
    { from: [5, 7], to: [5, 6] },
    // 38. Be2 Kf2
    { from: [4, 6], to: [6, 4] },
    { from: [5, 6], to: [6, 5] },
    // 39. Bd3 Ke1
    { from: [6, 4], to: [5, 3] },
    { from: [6, 5], to: [7, 4] },
    // 40. Ra1+ Kd2
    { from: [3, 0], to: [7, 0] },
    { from: [7, 4], to: [6, 3] },
    // 41. Ra2+ Kc3
    { from: [7, 0], to: [6, 0] },
    { from: [6, 3], to: [5, 2] },
    // 42. Rc2+ Kb4
    { from: [6, 0], to: [6, 2] },
    { from: [5, 2], to: [4, 1] },
    // 43. Rc4+ Kb5
    { from: [6, 2], to: [6, 2] },
    { from: [4, 1], to: [3, 1] },
    // 44. Rc5+ Kb6
    { from: [6, 2], to: [6, 2] },
    { from: [3, 1], to: [2, 1] },
    // 45. Rc6+ Kb7
    { from: [6, 2], to: [6, 2] },
    { from: [2, 1], to: [1, 1] },
    // 46. Rc7+ Kb8
    { from: [6, 2], to: [6, 2] },
    { from: [1, 1], to: [0, 1] },
    // 47. Rc8+ Kb7
    { from: [6, 2], to: [6, 2] },
    { from: [0, 1], to: [1, 1] },
    // 48. Re8 Bd6+
    { from: [6, 2], to: [4, 4] },
    { from: [0, 5], to: [3, 3] },
    // 49. Kf5 Kc7
    { from: [5, 5], to: [2, 5] },
    { from: [1, 1], to: [0, 2] },
    // 50. Re4 Kd7
    { from: [4, 4], to: [4, 4] },
    { from: [0, 2], to: [1, 3] },
    // 51. Be4 Be5
    { from: [5, 3], to: [4, 4] },
    { from: [3, 3], to: [4, 4] },
    // 52. Bd3 Bd4
    { from: [4, 4], to: [5, 3] },
    { from: [4, 4], to: [3, 3] },
    // 53. Be4 Be5
    { from: [5, 3], to: [4, 4] },
    { from: [3, 3], to: [4, 4] },
    // 54. Bd3 Kd6
    { from: [4, 4], to: [5, 3] },
    { from: [1, 3], to: [2, 3] },
    // 55. Rf4 Bd4
    { from: [4, 4], to: [5, 5] },
    { from: [4, 4], to: [3, 3] },
    // 56. Rf3 Be5
    { from: [5, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 57. Re3 Bd4
    { from: [5, 5], to: [4, 4] },
    { from: [4, 4], to: [3, 3] },
    // 58. Re4 Be5
    { from: [4, 4], to: [4, 4] },
    { from: [3, 3], to: [4, 4] },
    // 59. Bd3 Kd5
    { from: [5, 3], to: [5, 3] },
    { from: [2, 3], to: [3, 3] },
    // 60. Re1 Bd4
    { from: [4, 4], to: [7, 4] },
    { from: [4, 4], to: [3, 3] },
    // 61. Re2 Be5
    { from: [7, 4], to: [6, 4] },
    { from: [3, 3], to: [4, 4] },
    // 62. Re1 Bd4
    { from: [6, 4], to: [7, 4] },
    { from: [4, 4], to: [3, 3] },
    // 63. Re4+ Kd6
    { from: [7, 4], to: [4, 4] },
    { from: [3, 3], to: [2, 3] },
    // 64. Re1 Kd5
    { from: [4, 4], to: [7, 4] },
    { from: [2, 3], to: [3, 3] },
    // 65. Re2 Be5
    { from: [7, 4], to: [6, 4] },
    { from: [3, 3], to: [4, 4] },
    // 66. Re1 Bd4
    { from: [6, 4], to: [7, 4] },
    { from: [4, 4], to: [3, 3] },
    // 67. Re4+ Kd6
    { from: [7, 4], to: [4, 4] },
    { from: [3, 3], to: [2, 3] },
    // 68. Re8 Kd7
    { from: [4, 4], to: [0, 4] },
    { from: [2, 3], to: [1, 3] },
    // 69. Re4 Kd6
    { from: [0, 4], to: [4, 4] },
    { from: [1, 3], to: [2, 3] },
    // 70. Kf4 Be5+
    { from: [2, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 71. Kg5 Bd4
    { from: [5, 5], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 72. Kh4 Be5
    { from: [4, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 73. Kg5 Bd4
    { from: [5, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 74. Kf5 Be5
    { from: [4, 6], to: [2, 5] },
    { from: [3, 3], to: [4, 4] },
    // 75. Bg6 Bd4
    { from: [5, 3], to: [2, 6] },
    { from: [4, 4], to: [3, 3] },
    // 76. Bh5 Be5
    { from: [2, 6], to: [3, 7] },
    { from: [3, 3], to: [4, 4] },
    // 77. Bg4 Bd4
    { from: [3, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 78. Bh3 Be5
    { from: [4, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 79. Bg2 Bd4
    { from: [5, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 80. Bh1 Be5
    { from: [6, 6], to: [7, 7] },
    { from: [3, 3], to: [4, 4] },
    // 81. Bg2 Bd4
    { from: [7, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 82. Bh3 Be5
    { from: [6, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 83. Bg4 Bd4
    { from: [5, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 84. Bh5 Be5
    { from: [4, 6], to: [3, 7] },
    { from: [3, 3], to: [4, 4] },
    // 85. Re1 Bd4
    { from: [4, 4], to: [7, 4] },
    { from: [4, 4], to: [3, 3] },
    // 86. Re4+ Kd5
    { from: [7, 4], to: [4, 4] },
    { from: [2, 3], to: [3, 3] },
    // 87. Re1 Kd6
    { from: [4, 4], to: [7, 4] },
    { from: [3, 3], to: [2, 3] },
    // 88. Re4 Be5
    { from: [7, 4], to: [4, 4] },
    { from: [3, 3], to: [4, 4] },
    // 89. Bg4 Bd4
    { from: [3, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 90. Bh3 Be5
    { from: [4, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 91. Bg2 Bd4
    { from: [5, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 92. Bh1 Be5
    { from: [6, 6], to: [7, 7] },
    { from: [3, 3], to: [4, 4] },
    // 93. Bg2 Bd4
    { from: [7, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 94. Kf4 Be5+
    { from: [2, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 95. Kf3 Bd4
    { from: [5, 5], to: [5, 5] },
    { from: [4, 4], to: [3, 3] },
    // 96. Bh3 Be5
    { from: [6, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 97. Bg4 Bd4
    { from: [5, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 98. Kf4 Be5+
    { from: [5, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 99. Kf5 Bd4
    { from: [5, 5], to: [2, 5] },
    { from: [4, 4], to: [3, 3] },
    // 100. Re1 Be5
    { from: [4, 4], to: [7, 4] },
    { from: [3, 3], to: [4, 4] },
    // 101. Re4+ Kd5
    { from: [7, 4], to: [4, 4] },
    { from: [2, 3], to: [3, 3] },
    // 102. Re1 Kd6
    { from: [4, 4], to: [7, 4] },
    { from: [3, 3], to: [2, 3] },
    // 103. Re4 Kd5
    { from: [7, 4], to: [4, 4] },
    { from: [2, 3], to: [3, 3] },
    // 104. Re1 Bd4
    { from: [4, 4], to: [7, 4] },
    { from: [4, 4], to: [3, 3] },
    // 105. Re4+ Kd6
    { from: [7, 4], to: [4, 4] },
    { from: [3, 3], to: [2, 3] },
    // 106. Re1 Be5
    { from: [4, 4], to: [7, 4] },
    { from: [3, 3], to: [4, 4] },
    // 107. Re4 Bd4
    { from: [7, 4], to: [4, 4] },
    { from: [4, 4], to: [3, 3] },
    // 108. Bh3 Be5
    { from: [4, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 109. Bg2 Bd4
    { from: [5, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 110. Bh1 Be5
    { from: [6, 6], to: [7, 7] },
    { from: [3, 3], to: [4, 4] },
    // 111. Bg2 Bd4
    { from: [7, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 112. Bh3 Be5
    { from: [6, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 113. Bg4 Bd4
    { from: [5, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 114. Bh5 Be5
    { from: [4, 6], to: [3, 7] },
    { from: [3, 3], to: [4, 4] },
    // 115. Bg6 Bd4
    { from: [3, 7], to: [2, 6] },
    { from: [4, 4], to: [3, 3] },
    // 116. Bh7 Be5
    { from: [2, 6], to: [1, 7] },
    { from: [3, 3], to: [4, 4] },
    // 117. Bg8 Bd4
    { from: [1, 7], to: [0, 6] },
    { from: [4, 4], to: [3, 3] },
    // 118. Bh7 Be5
    { from: [0, 6], to: [1, 7] },
    { from: [3, 3], to: [4, 4] },
    // 119. Bg6 Bd4
    { from: [1, 7], to: [2, 6] },
    { from: [4, 4], to: [3, 3] },
    // 120. Bh5 Be5
    { from: [2, 6], to: [3, 7] },
    { from: [3, 3], to: [4, 4] },
    // 121. Bg4 Bd4
    { from: [3, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 122. Bh3 Be5
    { from: [4, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 123. Bg2 Bd4
    { from: [5, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 124. Kf4 Be5+
    { from: [2, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 125. Kf3 Bd4
    { from: [5, 5], to: [5, 5] },
    { from: [4, 4], to: [3, 3] },
    // 126. Kf4 Be5+
    { from: [5, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 127. Kf5 Bd4
    { from: [5, 5], to: [2, 5] },
    { from: [4, 4], to: [3, 3] },
    // 128. Bh1 Be5
    { from: [6, 6], to: [7, 7] },
    { from: [3, 3], to: [4, 4] },
    // 129. Bg2 Bd4
    { from: [7, 7], to: [6, 6] },
    { from: [4, 4], to: [3, 3] },
    // 130. Bh3 Be5
    { from: [6, 6], to: [5, 7] },
    { from: [3, 3], to: [4, 4] },
    // 131. Bg4 Bd4
    { from: [5, 7], to: [4, 6] },
    { from: [4, 4], to: [3, 3] },
    // 132. Bh5 Be5
    { from: [4, 6], to: [3, 7] },
    { from: [3, 3], to: [4, 4] },
    // 133. Bg6 Bd4
    { from: [3, 7], to: [2, 6] },
    { from: [4, 4], to: [3, 3] },
    // 134. Kf4 Be5+
    { from: [2, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // 135. Kf3 Bd4
    { from: [5, 5], to: [5, 5] },
    { from: [4, 4], to: [3, 3] },
    // 136. Kf4 Be5+
    { from: [5, 5], to: [5, 5] },
    { from: [3, 3], to: [4, 4] },
    // Draw agreed after move 136
];

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("chessCanvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const tileSize = 50; // 400px / 8
    
    // Initial board setup
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

    // Unicode chess pieces
    const pieceMap = {
        r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
        R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙"
    };

    function drawBoard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                // Alternating squares (light gray / dark slate)
                ctx.fillStyle = (row + col) % 2 === 0 ? "#E2E8F0" : "#334155"; 
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);

                const piece = board[row][col];
                if (piece) {
                    // White pieces = white, black pieces = teal accent
                    ctx.fillStyle = (piece === piece.toUpperCase()) ? "#FFFFFF" : "#00A3C4";
                    ctx.font = "32px serif";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(
                        pieceMap[piece], 
                        col * tileSize + tileSize / 2, 
                        row * tileSize + tileSize / 2
                    );
                }
            }
        }
    }

    let moveIndex = 0;

    function animateMoves() {
        if (moveIndex >= moves.length) return;
        
        const move = moves[moveIndex];
        
        // Move piece from 'from' to 'to'
        const piece = board[move.from[0]][move.from[1]];
        board[move.from[0]][move.from[1]] = "";
        board[move.to[0]][move.to[1]] = piece;
        
        drawBoard();
        moveIndex++;
        
        // Delay between moves (800ms = 0.8 seconds per move)
        setTimeout(animateMoves, 800); 
    }

    // Start the game
    drawBoard();
    setTimeout(animateMoves, 1000); // 1 second delay before first move
}); 