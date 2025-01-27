function matrixChainOrder(p) {
    const n = p.length;
    const m = [];
    const s = [];

    for (let i = 0; i < n; i++) {
        m[i] = [];
        m[i][i] = 0;
    }

    for (let l = 2; l < n; l++) {
        for (let i = 1; i <= (n - l) + 1; i++) {
            const j = (i + l) - 1;
            m[i - 1][j - 1] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k <= j - 1; k++) {
                const q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j]);
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }

    return m[1][n - 1];
}